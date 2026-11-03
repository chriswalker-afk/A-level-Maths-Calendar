import test from "node:test";
import assert from "node:assert/strict";

const close=(a,b,eps=1e-8)=>Math.abs(a-b)<eps;
const deriv=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
const integrate=(f,a,b,n=4000)=>{
 const h=(b-a)/n;let s=f(a)+f(b);
 for(let i=1;i<n;i++)s+=(i%2?4:2)*f(a+i*h);
 return s*h/3;
};
const choose=(n,k)=>{let r=1;for(let i=1;i<=k;i++)r=r*(n-i+1)/i;return r;};

test("geometric campaign threshold checks both neighbouring integer months and finite limit",()=>{
 const term=n=>160*.8**(n-1);
 const sum=n=>Array.from({length:n},(_,i)=>term(i+1)).reduce((a,b)=>a+b,0);
 assert.ok(close(term(4),81.92));
 for(const n of [1,2,6,9,10,30])assert.ok(close(sum(n),800*(1-.8**n)));
 assert.ok(sum(9)<700&&sum(10)>=700);
 assert.ok(sum(80)<800&&sum(80)>799.999);
});
test("fractional binomial expansion and cancellation agree numerically with exact function",()=>{
 const f=x=>1/Math.sqrt(1+2*x);
 const cubic=x=>1-x+1.5*x*x-2.5*x*x*x;
 for(const x of [-.04,-.02,.02,.04])assert.ok(Math.abs(f(x)-cubic(x))<1.1e-4);
 const F=x=>(1+x)*f(x);
 assert.ok(close(deriv(F,0),0,1e-8));
 assert.ok(close(F(.1),1.1/Math.sqrt(1.2)));
 const approx=1+.5*.1**2-.1**3;
 assert.ok(close(approx,1.004));
 assert.ok(Math.abs(F(.1)-approx)<.0002);
});
test("affine recurrence has the derived exact terms and sum for arbitrary n",()=>{
 const u=[0,4];for(let k=1;k<=25;k++)u.push(.5*u[k]+3);
 for(let n=1;n<=25;n++){
  assert.ok(close(u[n],6-2**(2-n)));
  const sum=u.slice(1,n+1).reduce((a,b)=>a+b,0);
  assert.ok(close(sum,6*n-4*(1-2**(-n))));
  assert.ok(6*n-sum>0&&6*n-sum<4);
 }
 assert.ok(u[5]<=5.9&&u[6]>5.9);
});
test("discrete versus continuous growth has different doubling times and calibrated week-5 difference",()=>{
 const D=n=>200*1.15**n,C=t=>200*Math.exp(.15*t);
 assert.ok(D(4)<400&&D(5)>400);
 assert.ok(close(Math.log(2)/.15,4.620981203732969));
 assert.ok(close(D(5),402.2714375));
 assert.ok(close(C(5),423.400003322535));
 const pct=100*(C(5)/D(5)-1);
 assert.ok(close(pct,5.252315688591502));
});
test("arithmetically and geometrically escalating contributions satisfy cap and totals",()=>{
 const A=n=>1200+100*(n-1),B=n=>1200*1.08**(n-1);
 const SA=n=>n/2*(2400+100*(n-1));
 const SB=n=>15000*(1.08**n-1);
 for(const n of [1,7,8,9,10]){
  assert.ok(close(SA(n),Array.from({length:n},(_,i)=>A(i+1)).reduce((a,b)=>a+b,0)));
  assert.ok(close(SB(n),Array.from({length:n},(_,i)=>B(i+1)).reduce((a,b)=>a+b,0)));
 }
 assert.ok(close(SA(8),12400));
 assert.ok(close(SB(8),12763.953154228228));
 assert.ok(A(9)<=2000&&A(10)>2000);
 assert.ok(B(7)<=2000&&B(8)>2000);
 assert.ok(close(SA(7),10500)&&close(SB(7),10707.364031692801));
});
test("the three Year 1 mechanics questions differentiate/integrate and distinguish motion",()=>{
 const s1=t=>t**3-6*t*t+9*t,v1=t=>3*t*t-12*t+9,a1=t=>6*t-12;
 assert.ok(close(deriv(s1,2),v1(2))&&close(deriv(v1,2),a1(2)));
 assert.ok(close(a1(2),0)&&close(v1(2),-3));
 const a2=t=>6*t-4,v2=t=>3*t*t-4*t+3,s2=t=>t**3-2*t*t+3*t+2;
 for(const t of [0,.5,1,2,3]){assert.ok(close(deriv(s2,t),v2(t)));assert.ok(close(deriv(v2,t),a2(t)));assert.ok(v2(t)>0);}
 assert.ok(close(s2(0),2)&&close(v2(0),3)&&close(s2(3),20));
 const v3=t=>t*t-6*t+8,s3=t=>t**3/3-3*t*t+8*t;
 assert.ok(close(integrate(v3,0,5),20/3));
 assert.ok(close(s3(2),20/3)&&close(s3(4),16/3));
 const distance=integrate(v3,0,2)-integrate(v3,2,4)+integrate(v3,4,5);
 assert.ok(close(distance,28/3));
 assert.ok(close(deriv(v3,3),0)&&close(v3(3),-1));
});
test("timed arithmetic sum and binomial series coefficient computations are independent",()=>{
 for(const n of [1,4,14,15]){
  const sum=Array.from({length:n},(_,k)=>9+4*k).reduce((a,b)=>a+b,0);
  assert.ok(close(sum,n*(2*n+7)));
  assert.equal(Array.from({length:n},(_,k)=>2*k+1).reduce((a,b)=>a+b,0),n*n);
 }
 assert.ok(14*(2*14+7)<500&&15*(2*15+7)>500);
 assert.equal(choose(7,3)*(-2)**3,-280);
 const root=x=>Math.sqrt(1+x);
 assert.ok(Math.abs(root(.02)-(1+.02/2-.02**2/8+.02**3/16))<1e-8);
 const G=x=>root(x)/(1-3*x);
 // Coefficient x^2 = 83/8, verified by the central second derivative.
 const h=2e-4;
 const quadratic=(G(h)-2*G(0)+G(-h))/(2*h*h);
 assert.ok(close(quadratic,83/8,1e-4));
});
test("a returning particle has zero displacement but nonzero exact distance",()=>{
 const a=t=>6*t-12,v=t=>3*t*t-12*t+8,s=t=>t**3-6*t*t+8*t;
 const t1=2-2*Math.sqrt(3)/3,t2=2+2*Math.sqrt(3)/3;
 assert.ok(close(v(t1),0)&&close(v(t2),0));
 assert.ok(close(deriv(s,1),v(1))&&close(deriv(v,1),a(1)));
 assert.ok(close(s(t1),16*Math.sqrt(3)/9));
 assert.ok(close(s(t2),-16*Math.sqrt(3)/9));
 assert.ok(close(s(4)-s(0),0));
 const distance=integrate(v,0,t1)-integrate(v,t1,t2)+integrate(v,t2,4);
 assert.ok(close(distance,64*Math.sqrt(3)/9));
 assert.ok(close(a(2),0)&&close(v(2),-4));
});
test("extension finite weighted sum, exact tail and coefficient are independently verified",()=>{
 const H=(r,N)=>Array.from({length:N},(_,i)=>(i+1)*r**i).reduce((a,b)=>a+b,0);
 const formula=(r,N)=>(1-(N+1)*r**N+N*r**(N+1))/(1-r)**2;
 for(const r of [-.4,.1,1/3,.8])for(const n of [1,3,5,10]){
  assert.ok(close(H(r,n),formula(r,n)));
 }
 assert.ok(close(H(1/3,5),179/81));
 assert.ok(close(1/(1-1/3)**2-H(1/3,5),13/324));
 const coeff=5*2**4;
 assert.equal(coeff,80);
 assert.ok(close((1-2*.001)**(-2),1+2*(2*.001)+3*(2*.001)**2+4*(2*.001)**3+5*(2*.001)**4,1e-9));
});
