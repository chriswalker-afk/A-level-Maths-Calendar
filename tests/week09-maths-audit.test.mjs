import test from "node:test";
import assert from "node:assert/strict";
const close=(a,b,tol=1e-8)=>Math.abs(a-b)<tol;
const derivative=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
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
const choose=(n,k)=>{let v=1;for(let i=1;i<=k;i++)v=v*(n-i+1)/i;return Math.round(v);};
const upperBinomial=(n,p,k)=>Array.from({length:n-k+1},(_,i)=>{
 const j=k+i;return choose(n,j)*p**j*(1-p)**(n-j);
}).reduce((a,b)=>a+b,0);
const newton=(f,fp,x)=>x-f(x)/fp(x);

test("retrieval checks: factor theorem, exact trig, series, binomial and Newton steps",()=>{
 const f=x=>x**3-4*x*x+x+6;
 for(const x of [-1,2,3])assert.ok(close(f(x),0));
 assert.equal((3-3)**2+(4+2)**2,36);
 assert.ok(close(Math.sin(2*Math.PI/6),Math.sqrt(3)/2));
 assert.ok(close(Math.sin(2*Math.PI/3),Math.sqrt(3)/2));
 assert.ok(close(6/(1-1/3),9));
 assert.ok(close(choose(5,3)*.4**3*.6**2,.2304));
 assert.equal(70/100*20,14);
 assert.ok(close(newton(x=>x**3-2,x=>3*x*x,1.5),35/27));
 for(const t of [1,3])assert.ok(close(t*t-4*t+3,0));
});
test("Pure P1 line–circle intersections, cosine rule and convergent strip length",()=>{
 const A=[3,4],B=[-4,-3];
 for(const [x,y]of [A,B]){
  assert.ok(close(y,x+1));assert.ok(close(x*x+y*y,25));
 }
 const distance=Math.hypot(A[0]-B[0],A[1]-B[1]);
 assert.ok(close(distance,7*Math.sqrt(2)));
 const cos=(25+25-distance**2)/50;
 assert.ok(close(cos,-24/25));
 const terms=Array.from({length:35},(_,i)=>distance*.5**i);
 const sum=terms.reduce((a,b)=>a+b,0);
 assert.ok(close(sum,14*Math.sqrt(2),1e-9));
});
test("Pure P2 logarithmic curve has one maximum, two target crossings and exact area",()=>{
 const y=x=>Math.log(x)/x;
 const yp=x=>(1-Math.log(x))/x**2;
 for(const x of [1.2,2,Math.E,4,12]){
  assert.ok(close(derivative(y,x),yp(x),1e-9));
 }
 assert.ok(close(yp(Math.E),0));
 assert.ok(yp(2)>0&&yp(4)<0);
 assert.ok(close(y(Math.E),1/Math.E));
 assert.ok(close(simpson(y,1,Math.E**2),2,1e-8));
 const g=x=>y(x)-.2;
 assert.ok(g(1.2)<0&&g(1.3)>0);
 assert.ok(g(12)>0&&g(13)<0);
 let x=12;const out=[];
 for(let i=0;i<3;i++){x=newton(g,yp,x);out.push(x);}
 assert.ok(close(out[0],12.686157475018021));
 assert.ok(close(out[1],12.71316789013962));
 assert.ok(close(out[2],12.71320678878719,1e-8));
 assert.equal(out[2].toFixed(4),"12.7132");
});
test("Pure P3 parametric derivative, tangent and area match independent quadrature",()=>{
 const x=t=>t+Math.sin(t),y=t=>1-Math.cos(t);
 const dx=t=>1+Math.cos(t),dy=t=>Math.sin(t);
 for(const t of [.2,.8,1.5,2.5]){
  assert.ok(close(derivative(x,t),dx(t)));
  assert.ok(close(derivative(y,t),dy(t)));
  assert.ok(close(dy(t)/dx(t),Math.tan(t/2)));
 }
 const t=Math.PI/2;
 assert.ok(close(x(t),t+1)&&close(y(t),1));
 assert.ok(close((dy(t)/dx(t)),1));
 const area=simpson(t=>y(t)*dx(t),0,Math.PI);
 assert.ok(close(area,Math.PI/2,1e-10));
 assert.ok(close(x(Math.PI),Math.PI)&&close(y(Math.PI),2));
 assert.ok(Math.tan((Math.PI-.001)/2)>1000);
});
test("M1 solar calibration, unique energy threshold and Newton iterations",()=>{
 const P=t=>20*t*(6-t),E=t=>60*t*t-20*t**3/3;
 const dE=t=>P(t);
 assert.ok(close(P(2),160)&&close(P(3),180)&&close(P(0),0));
 assert.ok(close(E(6),720));
 assert.ok(close(simpson(P,0,6),720,1e-8));
 for(const t of [.5,1,2,4,5])assert.ok(close(derivative(E,t),dE(t),1e-7));
 assert.ok(E(3)<480&&E(4)>480);
 let t=3.5;const F=t=>E(t)-480;
 t=newton(F,dE,t);assert.ok(close(t,3.6761904761904765));
 t=newton(F,dE,t);assert.ok(close(t,3.678220814643137));
 t=newton(F,dE,t);assert.ok(close(t,3.678221141367616));
 assert.equal(t.toFixed(2),"3.68");
});
test("M2 differentiates the script correctly and uses an upper binomial tail not a point",()=>{
 const N=t=>120*t*Math.exp(-t/2);
 const deriv=t=>120*Math.exp(-t/2)*(1-t/2);
 assert.ok(close(N(0),0)&&close(derivative(N,1),deriv(1),1e-8));
 assert.ok(close(deriv(2),0)&&deriv(1)>0&&deriv(3)<0);
 assert.ok(close(N(2),240/Math.E));
 const point=choose(12,8)*.4**8*.6**4;
 const upper=upperBinomial(12,.4,8);
 assert.ok(close(point,.04204265472));
 assert.ok(close(upper,.05730992128));
 assert.ok(point<.05&&upper>.05,"The erroneous point decision differs from correct tail decision");
});
test("Year 1 Applied stratification, pulley equations and regression are numerically consistent",()=>{
 const allocations=[120,80,50].map(n=>n/250*50);
 assert.deepEqual(allocations,[24,16,10]);
 const a=(2*9.8-4)/5,T=3*a+4;
 assert.ok(close(a,3.12)&&close(T,13.36));
 assert.ok(close(2*9.8-T,2*a));
 assert.ok(close(a*2,6.24)&&close(.5*a*2**2,6.24));
 const predicted=x=>14+1.5*x;
 assert.ok(close(predicted(6),23)&&predicted(20)>40);
 const p2=2*upperBinomial(16,.5,13);
 assert.ok(close(p2,1394/65536));
 assert.ok(close(p2,.021270751953125));
 assert.ok(p2<.05&&p2>.01);
});
test("timed binomial threshold, derivative, exact integral and Newton estimate",()=>{
 const F=x=>1/Math.sqrt(1-2*x);
 const approx=x=>1+x+1.5*x*x;
 assert.ok(close(approx(.1),1.115));
 assert.ok(Math.abs(approx(.01)-F(.01))<3e-6);
 const threshold=11/72;
 assert.ok(close(F(threshold),1.2));
 assert.ok(F(.2)>1.2&&F(.1)<1.2);
 const y=x=>x*x*Math.exp(-x),I=2-17*Math.exp(-3);
 assert.ok(close(derivative(y,2),0));
 assert.ok(close(y(2),4/Math.E**2));
 assert.ok(close(simpson(y,0,3),I,1e-8));
 const T=trapezia(y,0,3,3);
 assert.ok(close(T,1.133262381773281));
 assert.ok(close(I,1.153619837746313));
 assert.ok(close(T-I,-.020357455973031957));
});
test("timed SUVAT stages and one-tailed exact binomial significance",()=>{
 const u=0,a=1.5,t=6;
 const v=u+a*t,first=u*t+.5*a*t*t;
 const brakeTime=v/2,brakeDistance=v*v/(2*2);
 assert.ok(close(v,9)&&close(first,27));
 assert.ok(close(brakeTime,4.5)&&close(brakeDistance,20.25));
 assert.ok(close(first+brakeDistance,47.25));
 assert.ok(close(t+brakeTime,10.5));
 const p=upperBinomial(10,.2,5);
 assert.ok(close(p,.0327934976));
 assert.ok(p<.05);
});
test("extension geometric identity, integral remainder and alternating logarithm bounds",()=>{
 const S=n=>Array.from({length:n},(_,k)=>(-1)**k/(k+1)).reduce((a,b)=>a+b,0);
 const R=n=>simpson(x=>x**n/(1+x),0,1);
 for(const n of [1,2,3,4,10,20]){
  for(const x of [.1,.2,.6,.9]){
   const sum=Array.from({length:n},(_,k)=>(-x)**k).reduce((a,b)=>a+b,0);
   assert.ok(close(1/(1+x),sum+(-x)**n/(1+x)));
  }
  assert.ok(close(Math.log(2),S(n)+(-1)**n*R(n),1e-8));
  assert.ok(R(n)>1/(2*(n+1))&&R(n)<1/(n+1));
 }
 assert.ok(close(S(4),7/12));
 assert.ok(close(S(5),47/60));
 assert.ok(close(S(300),.6914832916556253,1e-12));
 assert.ok(close(S(301),.6948055507918379,1e-12));
 assert.ok(S(300)<Math.log(2)&&Math.log(2)<S(301));
 assert.ok(S(300)>.685&&S(301)<.695);
 assert.equal(Math.log(2).toFixed(2),"0.69");
});
