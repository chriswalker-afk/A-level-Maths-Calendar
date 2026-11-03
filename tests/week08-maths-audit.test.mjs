import test from "node:test";
import assert from "node:assert/strict";

const close=(a,b,tol=1e-8)=>Math.abs(a-b)<tol;
const derivative=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
const simpson=(f,a,b,n=4000)=>{
 const h=(b-a)/n;let total=f(a)+f(b);
 for(let i=1;i<n;i++)total+=(i%2?4:2)*f(a+i*h);
 return total*h/3;
};
const trapezia=(f,a,b,n)=>{
 const h=(b-a)/n;let total=(f(a)+f(b))/2;
 for(let i=1;i<n;i++)total+=f(a+i*h);
 return h*total;
};
const newton=(f,df,x)=>x-f(x)/df(x);

test("root bracket, discontinuity and the short numerical retrievals are internally consistent",()=>{
 const f=x=>x**3-x-1;
 assert.ok(f(1.3)<0&&f(1.4)>0);
 assert.ok(close(f(1.3),-.103)&&close(f(1.4),.344));
 assert.ok(1/(1-2)<0&&1/(3-2)>0&&!Number.isFinite(1/(2-2)));
 const c1=Math.cos(.5),c2=Math.cos(c1);
 assert.ok(close(c1,.8775825618903728)&&close(c2,.6390124941652592));
 assert.ok(close(3-2/2,2));
 assert.ok(Math.abs(-.5)<1&&Math.abs(-1.5)>1);
 assert.ok(close(newton(x=>x*x-5,x=>2*x,2),2.25));
 assert.ok(close(3*1**2-3,0));
});
test("bracketed Newton cubics match high-accuracy independent root calculations",()=>{
 for(const [f,df,initial,expected]of [
  [x=>x**3-x-1,x=>3*x*x-1,1.3,1.324717957244746],
  [x=>x**3-2*x-2,x=>3*x*x-2,1.8,1.7692923542386314]
 ]){
  let x=initial;
  for(let i=0;i<5;i++){
   assert.ok(Math.abs(df(x))>.01,"The reviewed starting value is not near a stationary point");
   x=newton(f,df,x);
  }
  assert.ok(close(x,expected,1e-10));
  assert.ok(close(f(x),0,1e-10));
 }
});
test("trapezia are overestimates for e^x and underestimates for log(1+x)",()=>{
 const e=x=>Math.exp(x);
 const te=trapezia(e,0,1,4),ie=Math.E-1;
 assert.ok(close(te,1.7272219045575166));
 assert.ok(close(ie,1.718281828459045));
 assert.ok(close(te-ie,.008940076098471472));
 assert.ok(te>ie&&trapezia(e,0,1,8)<te);
 const log=x=>Math.log(1+x);
 const tl=trapezia(log,0,2,4),il=3*Math.log(3)-2;
 assert.ok(close(tl,1.2821045824381598)&&close(il,1.2958368660043291));
 assert.ok(close(tl-il,-.01373228356616929));
 assert.ok(tl<il&&trapezia(log,0,2,8)>tl);
 assert.ok(close(il,simpson(log,0,2),1e-9));
});
test("alternative fixed point rearrangements have opposite local stability",()=>{
 const a=(Math.sqrt(13)-1)/2,g=x=>Math.sqrt(3-x),h=x=>3-x*x;
 assert.ok(close(a*a+a-3,0));
 let x=1.5;const expected=[1.224744871391589,1.3323870040676662,1.2913609084730473];
 for(const e of expected){x=g(x);assert.ok(close(x,e,1e-10));}
 assert.ok(close(-1/(2*a),-.38379593962199915));
 assert.ok(Math.abs(-1/(2*a))<1);
 assert.ok(Math.abs(-2*a)>1);
 assert.ok(close(h(1.5),.75)&&close(h(h(1.5)),2.4375));
});
test("a cost-minimising numerical root is unique and matches independently computed derivatives",()=>{
 const C=t=>20*Math.exp(-t)+t*t+5*t;
 const d=t=>-20*Math.exp(-t)+2*t+5;
 const dd=t=>20*Math.exp(-t)+2;
 assert.ok(d(1)<0&&d(1.1)>0);
 for(const x of [0,.5,1,1.5,3]){
  assert.ok(close(derivative(C,x),d(x),1e-7));
  assert.ok(dd(x)>0);
 }
 let t=1;for(let i=0;i<4;i++)t=newton(d,dd,t);
 assert.ok(close(t,1.038797977802932));
 assert.ok(close(C(t),13.350687083307983));
 assert.ok(C(t)<C(.9)&&C(t)<C(1.2)&&C(t)<C(0));
});
test("exposure model comparison has the correct units, quadrature error and threshold time",()=>{
 const C=t=>10+90*Math.exp(-.3*t),excess=t=>C(t)-10;
 assert.ok(close(C(0),100)&&close(C(5),30.081714413358682));
 assert.ok(close(derivative(C,2),-.3*(C(2)-10),1e-7));
 const exact=300*(1-Math.exp(-1.5)),numeric=trapezia(excess,0,5,5);
 assert.ok(close(simpson(excess,0,5),exact,1e-8));
 assert.ok(close(exact,233.06095195547107));
 assert.ok(close(numeric,234.80629276524846));
 assert.ok(close(numeric-exact,1.7453408097773888));
 assert.ok(numeric>exact&&trapezia(excess,0,5,10)<numeric);
 let t=3.5;const f=t=>C(t)-40,fp=t=>-27*Math.exp(-.3*t);
 t=newton(f,fp,t);assert.ok(close(t,3.658165424374262));
 t=newton(f,fp,t);assert.ok(close(t,3.6620387101308784));
 assert.ok(close(Math.log(3)/.3,3.662040962227033));
});
test("connected particles use the combined mass, consistent tension and two-stage timing",()=>{
 const g=9.8;
 const a2=(1.5*g)/(4+1.5),T2=4*a2;
 assert.ok(close(a2,2.6727272727272724));
 assert.ok(close(T2,10.69090909090909));
 assert.ok(close(1.5*g-T2,1.5*a2));
 assert.ok(close(.5*a2*2**2,5.345454545454545));
 const a3=(3*g)/(2+3),T3=2*a3;
 const t1=Math.sqrt(2*1.2/a3),v=Math.sqrt(2*a3*1.2),t2=.8/v;
 assert.ok(close(a3,5.88)&&close(T3,11.76));
 assert.ok(close(3*g-T3,3*a3));
 assert.ok(close(t1,.6388765649999398));
 assert.ok(close(v,3.756594202199647));
 assert.ok(close(t2,.21295885499997996));
 assert.ok(close(t1+t2,.8518354199999199));
 assert.ok(close(v*t2,.8),"After slack, horizontal velocity is constant");
});
test("a smooth variable-acceleration motion model agrees with both quadrature and Newton threshold",()=>{
 const s=t=>8*t-3*(1-Math.exp(-2*t));
 const v=t=>8-6*Math.exp(-2*t);
 const a=t=>12*Math.exp(-2*t);
 for(const t of [0,.5,1,1.5,2]){
  assert.ok(close(derivative(s,t),v(t),1e-8));
  assert.ok(close(derivative(v,t),a(t),1e-7));
  assert.ok(v(t)>0);
 }
 const exact=s(2),num=trapezia(v,0,2,4);
 assert.ok(close(exact,13.054946916666204));
 assert.ok(close(num,12.813521163339141));
 assert.ok(close(num-exact,-.2414257533270625));
 assert.ok(close(simpson(v,0,2),exact,1e-8));
 let t=1.8;t=newton(t=>s(t)-12,v,t);
 assert.ok(close(t,1.866108348710986));t=newton(t=>s(t)-12,v,t);
 assert.ok(close(t,1.8660210412065548));
 assert.equal(t.toFixed(2),"1.87");
});
test("the A-star rational Newton scheme gives provable lower and upper bounds on sqrt(2)",()=>{
 const alpha=Math.sqrt(2);
 const values=[2,3/2,17/12,577/408,665857/470832];
 for(let i=0;i<values.length-1;i++){
  assert.ok(close(values[i+1],(values[i]+2/values[i])/2,1e-14));
  assert.ok(values[i]>=alpha&&values[i+1]<values[i]);
  const e=values[i]-alpha,next=values[i+1]-alpha;
  assert.ok(close(next,e*e/(2*values[i]),1e-14));
 }
 const x4=values[4],lower=941664/665857;
 assert.ok(close(lower,2/x4,1e-14));
 assert.ok(lower<alpha&&alpha<x4);
 assert.ok(1.414205<lower&&x4<1.414215);
 assert.equal(alpha.toFixed(5),"1.41421");
});
