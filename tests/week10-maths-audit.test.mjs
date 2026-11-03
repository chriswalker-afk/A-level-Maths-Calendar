import test from "node:test";
import assert from "node:assert/strict";
const close=(a,b,eps=1e-8)=>Math.abs(a-b)<=eps;
const deriv=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
const simpson=(f,a,b,n=4000)=>{
 const h=(b-a)/n;let sum=f(a)+f(b);
 for(let i=1;i<n;i++)sum+=(i%2?4:2)*f(a+i*h);
 return sum*h/3;
};
const trapezia=(f,a,b,n)=>{
 const h=(b-a)/n;let sum=(f(a)+f(b))/2;
 for(let i=1;i<n;i++)sum+=f(a+i*h);
 return h*sum;
};
const choose=(n,k)=>{let r=1;for(let i=1;i<=k;i++)r=r*(n-i+1)/i;return Math.round(r);};
const binomial=(n,p,k)=>choose(n,k)*p**k*(1-p)**(n-k);
const newton=(f,fp,x)=>x-f(x)/fp(x);

test("Pure 1 — consecutive integers, proof and counterexample work for negative integers too",()=>{
 for(let n=-100;n<=100;n++){
  assert.equal(n*(n+1)*(n+2)%6,0);
  assert.equal(n*(n+1)%2,0);
 }
 assert.equal((1**2+1)%4,2);
});
test("Pure 2 — cubic factorisation, sign chart and intercept",()=>{
 const f=x=>x**3-4*x*x-x+4;
 for(const x of [-3,-1,-.5,0,1,2,4,5])
  assert.ok(close(f(x),(x+1)*(x-1)*(x-4)));
 assert.ok(f(-2)<0&&f(0)>0&&f(2)<0&&f(5)>0);
 assert.equal(f(0),4);
});
test("Pure 3 — two points lie on the line and circle, and their chord is a diameter",()=>{
 const A=[2+Math.sqrt(5),-1+2*Math.sqrt(5)];
 const B=[2-Math.sqrt(5),-1-2*Math.sqrt(5)];
 for(const [x,y]of [A,B]){
  assert.ok(close((x-2)**2+(y+1)**2,25));
  assert.ok(close(y,2*x-5));
 }
 assert.ok(close(Math.hypot(A[0]-B[0],A[1]-B[1]),10));
 assert.ok(close((A[0]+B[0])/2,2));
 assert.ok(close((A[1]+B[1])/2,-1));
});
test("Pure 4 — all exact trig zeros and the tangent match independent numerical derivatives",()=>{
 const y=x=>2*Math.sin(x)*Math.cos(x)-Math.cos(x);
 const zeros=[Math.PI/6,Math.PI/2,5*Math.PI/6,3*Math.PI/2];
 for(const x of zeros)assert.ok(close(y(x),0));
 const x=Math.PI/3;
 assert.ok(close(y(x),(Math.sqrt(3)-1)/2));
 assert.ok(close(deriv(y,x),Math.sqrt(3)/2-1,1e-9));
 const found=[];let prev=y(.0001);
 for(let i=1;i<=20000;i++){
  const x=i*2*Math.PI/20000,now=y(x);
  if(prev*now<0)found.push(x);
  prev=now;
 }
 assert.equal(found.length,4,"Four sign-changing zeros only");
});
test("Pure 5 — GP and fractional binomial coefficients are consistent",()=>{
 const terms=Array.from({length:7},(_,i)=>3*2**i);
 assert.equal(terms.slice(0,5).reduce((a,b)=>a+b,0),93);
 assert.equal(terms.reduce((a,b)=>a+b,0),381);
 const approx=x=>1-x/2+3*x*x/8;
 assert.ok(close(approx(.1),.95375));
 assert.ok(Math.abs(approx(.01)-1/Math.sqrt(1.01))<1e-6);
});
test("Pure 6 — calibrated decay, half-life, threshold, rate and units",()=>{
 const k=Math.log(2)/2,Q=t=>12*Math.exp(-k*t);
 assert.ok(close(Q(0),12)&&close(Q(2),6)&&close(Q(4),3));
 const t=Math.log(12)/k;
 assert.ok(close(Q(t),1));
 assert.ok(Q(t-.1)>1&&Q(t+.1)<1);
 assert.ok(close(deriv(Q,4),-3*k,1e-7));
});
test("Pure 7 — implicit curve, tangent and normal are algebraically correct",()=>{
 const F=(x,y)=>x*x+x*y+y*y-7;
 const dydx=(x,y)=>(-2*x-y)/(x+2*y);
 assert.equal(F(1,2),0);
 assert.ok(close(dydx(1,2),-.8));
 const tangent=x=>2-.8*(x-1);
 const normal=x=>2+1.25*(x-1);
 assert.ok(close(tangent(1),2)&&close(normal(1),2));
 assert.ok(close(dydx(1,2)*(5/4),-1));
 for(const h of [-.01,-.005,.005,.01]){
  const dy=tangent(1+h)-2;
  assert.ok(Math.abs(F(1+h,2+dy))<.0001);
 }
});
test("Pure 8 — substitution, integration by parts and definite limits",()=>{
 const F=x=>Math.log(1+x**3),f=x=>3*x*x/(1+x**3);
 const G=x=>Math.exp(2*x)*(2*x-1)/4,g=x=>x*Math.exp(2*x);
 for(const x of [.1,.7,1,2]){
  assert.ok(close(deriv(F,x),f(x),1e-7));
  assert.ok(close(deriv(G,x),g(x),1e-7));
 }
 assert.ok(close(simpson(g,0,1),(Math.E**2+1)/4));
});
test("Pure 9 — partial fractions and one particular differential equation",()=>{
 const f=x=>(3*x+2)/(x*(x+2));
 const y=x=>Math.log(x)+2*Math.log(x+2)-2*Math.log(3);
 for(const x of [.2,.9,1,1.5,3]){
  assert.ok(close(f(x),1/x+2/(x+2)));
  assert.ok(close(deriv(y,x),f(x)));
 }
 assert.ok(close(y(1),0));
 assert.ok(close(y(3),Math.log(25/3)));
});
test("Pure 10 — reverse-chain exact area, four trapezia and Newton root",()=>{
 const f=x=>Math.sqrt(1+4*x);
 const numeric=trapezia(f,0,1,4);
 const exact=(5*Math.sqrt(5)-1)/6;
 assert.ok(close(numeric,1.6910745896729669));
 assert.ok(close(exact,1.6967233145831582));
 assert.ok(close(numeric-exact,-.005648724910191305));
 assert.ok(close(simpson(f,0,1),exact,1e-8));
 assert.ok(numeric<exact);
 let x=1.3;const g=x=>x**3-x-1,gp=x=>3*x*x-1;
 const expected=[1.3253071253071254,1.324718280461173,1.3247179572448433];
 for(const e of expected){x=newton(g,gp,x);assert.ok(close(x,e,1e-10));}
 assert.equal(x.toFixed(4),"1.3247");
});
test("Pure 11 — exponential curve maximum and accumulated response",()=>{
 const f=t=>t*Math.exp(-t);
 const fp=t=>Math.exp(-t)*(1-t);
 for(const t of [.2,.8,1,1.5,3])assert.ok(close(deriv(f,t),fp(t)));
 assert.ok(f(.8)<f(1)&&f(2)<f(1));
 assert.ok(close(f(1),Math.exp(-1)));
 assert.ok(close(simpson(f,0,2),1-3*Math.exp(-2),1e-9));
});
test("Pure 12 — 3D parallelogram construction, diagonals and side length",()=>{
 const A=[1,2,-1],B=[5,-2,3],C=[3,0,1];
 const D=A.map((a,i)=>B[i]+C[i]-a);
 assert.deepEqual(D,[7,-4,5]);
 const AB=B.map((v,i)=>v-A[i]),CD=D.map((v,i)=>v-C[i]);
 assert.deepEqual(AB,CD);
 const midAD=A.map((v,i)=>(v+D[i])/2);
 const midBC=B.map((v,i)=>(v+C[i])/2);
 assert.deepEqual(midAD,[4,-1,2]);
 assert.deepEqual(midAD,midBC);
 assert.ok(close(Math.hypot(...AB),4*Math.sqrt(3)));
});
test("Stats 1–3 — stratification, variable-width histogram and independence",()=>{
 assert.deepEqual([180,120].map(n=>n/300*60),[36,24]);
 assert.deepEqual([12/10,18/5,10/10],[1.2,3.6,1]);
 const mean=(12*5+18*12.5+10*20)/40;
 assert.ok(close(mean,12.125));
 assert.ok(close(.4*.5,.2));
 assert.ok(close(.4+.5-.2,.7));
 assert.ok(close(1-(.4+.5-.2),.3));
});
test("Stats 4–5 — binomial point, complement and exact upper-tail hypothesis test",()=>{
 const p2=binomial(8,.25,2),any=1-binomial(8,.25,0);
 assert.ok(close(p2,.31146240234375));
 assert.ok(close(any,.8998870849609375));
 const p=binomial(12,.5,10)+binomial(12,.5,11)+binomial(12,.5,12);
 assert.ok(close(p,79/4096));
 assert.ok(p<.05);
});
test("Mechanics 6–8 — reversal distance, vertical SUVAT and variable acceleration",()=>{
 const v=t=>6-2*t;
 assert.ok(close(simpson(v,0,5),5));
 assert.ok(close(simpson(v,0,3),9));
 assert.ok(close(simpson(v,3,5),-4));
 assert.ok(close(simpson(t=>Math.abs(v(t)),0,3)+simpson(t=>Math.abs(v(t)),3,5),13));
 const u=14.7,g=9.8,tPeak=u/g;
 assert.ok(close(tPeak,1.5));
 assert.ok(close(u*u/(2*g),11.025));
 assert.ok(close(2*tPeak,3));
 const a=t=>6*t-12,V=t=>3*t*t-12*t+9,S=t=>t**3-6*t*t+9*t;
 for(const t of [.25,1.2,2,3.7]){
  assert.ok(close(deriv(V,t),a(t),1e-7));
  assert.ok(close(deriv(S,t),V(t),1e-7));
 }
 assert.ok(close(V(1),0)&&close(V(3),0));
 assert.ok(close(S(4)-S(0),4));
 assert.ok(close(Math.abs(S(1)-S(0))+Math.abs(S(3)-S(1))+Math.abs(S(4)-S(3)),12));
});
test("Mechanics 9–10 — force equilibrium, pulley tension and displacement",()=>{
 const g=9.8,m=5,F=18-8;
 assert.ok(close(m*g,49));
 assert.ok(close(F/m,2));
 const a=2*g/5,T=3*a;
 assert.ok(close(a,3.92)&&close(T,11.76));
 assert.ok(close(2*g-T,2*a));
 assert.ok(close(.5*a*1.5**2,4.41));
});
