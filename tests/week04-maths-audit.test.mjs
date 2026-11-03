import test from "node:test";
import assert from "node:assert/strict";

const close=(a,b,eps=1e-8)=>Math.abs(a-b)<eps;
const derivative=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
const second=(f,x,h=2e-4)=>(f(x+h)-2*f(x)+f(x-h))/(h*h);

test("parameterised cubic stationary points and axis-touching parameters",()=>{
 const f=(x,a)=>x**3-3*a*x*x+3*(a*a-1)*x;
 const df=(x,a)=>3*((x-a)**2-1);
 const ddf=(x,a)=>6*(x-a);
 for(const a of [-3,-2,-.7,0,1,2,3.8]){
  assert.ok(close(derivative(x=>f(x,a),a-1),0));
  assert.ok(close(df(a+1,a),0));
  assert.ok(ddf(a-1,a)<0&&ddf(a+1,a)>0);
  assert.ok(close(f(a-1,a),a**3-3*a+2));
  assert.ok(close(f(a+1,a),a**3-3*a-2));
 }
 for(const a of [-2,1])assert.ok(close(f(a-1,a),0));
});
test("the implicit curve is tangent at the given point and has the exact enclosed area",()=>{
 const F=(x,y)=>x*x+2*x*y+3*y*y;
 assert.ok(close(F(3,1),18));
 const tangentY=x=>(9-2*x)/3;
 assert.ok(close(tangentY(3),1));
 assert.ok(close((tangentY(3+1e-5)-tangentY(3-1e-5))/(2e-5),-2/3));
 assert.ok(close(F(3,1),18));
 for(const x of [2,3,4])assert.ok(close(9*(x-3)**2,9*(F(x,tangentY(x))-18)));
 assert.ok(close(.5*(9/2)*3,27/4));
});
test("the parametric curve has two horizontal tangents, a vertical one, and expected curvature",()=>{
 const x=t=>t*t+t,y=t=>t**3-3*t;
 const dx=t=>2*t+1,dy=t=>3*t*t-3;
 assert.ok(close(dx(-1),-1)&&close(dy(-1),0)&&close(x(-1),0)&&close(y(-1),2));
 assert.ok(close(dx(1),3)&&close(dy(1),0)&&close(x(1),2)&&close(y(1),-2));
 const yxx=t=>6*(t*t+t+1)/(2*t+1)**3;
 assert.ok(yxx(-1)<0&&yxx(1)>0);
 assert.ok(close(dx(-.5),0));
 assert.ok(!close(dy(-.5),0));
 assert.ok(close(x(-.5),-.25)&&close(y(-.5),11/8));
});
test("packaging optimum respects the machine's radius limit",()=>{
 const S=r=>2*Math.PI*r*r+1000*Math.PI/r;
 const optimum=5*Math.cbrt(2),height=500/(optimum**2);
 assert.ok(optimum>6&&optimum<6.5);
 assert.ok(close(height,2*optimum));
 assert.ok(close(derivative(S,optimum),0,1e-6));
 assert.ok(second(S,optimum)>0);
 assert.ok(derivative(S,6)<0);
 assert.ok(close(S(6),716*Math.PI/3));
 assert.ok(close(500/(6*6),125/9));
 assert.equal(Math.round(S(6)),750);
});
test("both change models have equal initial gradients but differ for t > 0",()=>{
 const A=t=>10+20*Math.exp(-t/4),B=t=>10+20/(1+t/4);
 const dA=t=>-5*Math.exp(-t/4),dB=t=>-5/(1+t/4)**2;
 const ddA=t=>5/4*Math.exp(-t/4),ddB=t=>5/2/(1+t/4)**3;
 assert.ok(close(A(0),30)&&close(B(0),30));
 assert.ok(close(dA(0),-5)&&close(dB(0),-5));
 assert.ok(close(ddA(0),1.25)&&close(ddB(0),2.5));
 for(const t of [.01,1,4,8,24,100]){
  assert.ok(A(t)<B(t),"Exponential model must be below rational model at t = "+t);
  assert.ok(close(derivative(A,t),dA(t)));
  assert.ok(close(derivative(B,t),dB(t)));
 }
 const g=u=>Math.exp(u)-1-u;
 assert.ok(close(g(0),0)&&g(.1)>0&&g(5)>0);
});
test("Newton's laws give correct connected-particle motion after the string goes slack",()=>{
 const g=9.8,acceleration=(2*g-3)/5,T=3*acceleration+3;
 assert.ok(close(acceleration,3.32));
 assert.ok(close(T,12.96));
 assert.ok(close(2*g-T,2*acceleration));
 const v2=2*acceleration*1.2;
 assert.ok(close(v2,7.968));
 assert.ok(close(Math.sqrt(v2),2.8227646,1e-5));
 const extra=v2/(2*(3/3));
 assert.ok(close(extra,3.984));
});
test("resolved plane forces, rational inequalities and stationary points check independently",()=>{
 const resultant=[10*Math.sqrt(3)-12,2],acceleration=resultant.map(x=>x/2);
 assert.ok(close(acceleration[0],5*Math.sqrt(3)-6));
 assert.ok(close(acceleration[1],1));
 assert.ok(close(acceleration[0]**2+acceleration[1]**2,112-60*Math.sqrt(3)));
 assert.equal(Math.round(Math.atan2(acceleration[1],acceleration[0])*180/Math.PI),21);
 const h=x=>(x*x+1)/(x+1),stationary=Math.SQRT2-1;
 assert.ok(close(derivative(h,stationary),0,1e-6));
 assert.ok(close(h(stationary),2*Math.SQRT2-2));
 for(const x of [1-Math.SQRT2,1+Math.SQRT2])assert.ok(close(h(x),2));
 assert.ok(h(0)<2&&h(3)>2);
});
test("the A-star parametric curve has a genuine node with two different tangents",()=>{
 const X=t=>t*t-1,Y=t=>t*t*t-3*t;
 for(const t of [-2,-Math.sqrt(3),-1,0,1,Math.sqrt(3),2]){
  assert.ok(close(Y(t)**2,(X(t)+1)*(X(t)-2)**2));
 }
 for(const t of [-Math.sqrt(3),Math.sqrt(3)]){
  assert.ok(close(X(t),2)&&close(Y(t),0));
  const gradient=3*(t*t-1)/(2*t);
  assert.ok(close(gradient,Math.sign(t)*Math.sqrt(3)));
 }
 assert.ok(close(X(0),-1)&&close(Y(0),0));
 assert.ok(close(X(-1),0)&&close(Y(-1),2));
 assert.ok(close(X(1),0)&&close(Y(1),-2));
 const secondDX=t=>3*(t*t+1)/(4*t**3);
 assert.ok(secondDX(-1)<0&&secondDX(1)>0);
});
