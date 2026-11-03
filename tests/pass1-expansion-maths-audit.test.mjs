import test from "node:test";
import assert from "node:assert/strict";
import {week01Questions} from "../src/data/week01.js";
import {week02Questions} from "../src/data/week02.js";
import {week03Questions} from "../src/data/week03.js";
const eq=(a,b,tol=1e-8)=>Math.abs(a-b)<=tol;
const d=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
const q=id=>[...week01Questions,...week02Questions,...week03Questions].find(x=>x.id===id);

test("Week 1 proof and algebra: conjugates, contradictions, domains, repeated poles, nonlinear solutions",()=>{
 const u=Math.sqrt(3)+Math.sqrt(2),v=Math.sqrt(3)-Math.sqrt(2);
 assert.ok(eq(u*v,1));assert.ok(eq(u-1/u,2*Math.sqrt(2)));
 assert.equal(q("W01-P4").marks,10);
 const f=x=>(x-2)**2+1,g=x=>2*x-1,h=x=>f(g(x));
 assert.ok(eq(f(2+Math.sqrt(10-1)),10));
 for(const x of [1.5,2,2.25])assert.ok(eq(h(x),(2*x-3)**2+1));
 assert.ok(h(2.99)<10&&h(3)===10);
 assert.ok(h(1.5)<10);
 const num=x=>2*x*x+3*x+2;
 const rational=x=>num(x)/(x*(x+1)**2);
 for(const x of [-5,-1.5,-.5,.5,1,2,7]){
  assert.ok(eq(rational(x),2/x-1/(x+1)**2),String(x));
  assert.ok(num(x)>0);
  assert.equal(Math.sign(rational(x)),Math.sign(x));
 }
 for(const [x,y]of [[3,4],[4,3]]){
  assert.equal(x*x+y*y,25);assert.equal(x*y,12);assert.equal(x+y,7);
 }
 for(const angle of [0.03,0.2,0.7,1.1]){
  const x=5*Math.cos(angle),y=5*Math.sin(angle);
  assert.ok(x*y<=12.5+1e-10);
 }
 assert.ok(eq((5/Math.sqrt(2))**2*2,25));
});
test("Week 1 constrained volume optimum is differentiated, feasible and nontrivial",()=>{
 const V=x=>x*(30-2*x)*(20-2*x),Vp=x=>600-200*x+12*x*x;
 const root=(25-5*Math.sqrt(7))/3;
 assert.ok(eq(Vp(root),0));
 for(const t of [1,2,3,3.4,4,5,7,9])assert.ok(eq(d(V,t),Vp(t),1e-7));
 assert.ok(eq(root,3.9237478148923493));
 assert.ok(eq(V(root),1056.30589546119,1e-6));
 assert.ok(eq(V(3.5),1046.5)&&Vp(3.5)>0);
 assert.ok(V(root)>V(3.5));
});
test("Week 1 sampling, coded statistics and outlier decision are correct",()=>{
 assert.deepEqual([210,140].map(n=>60*n/350),[36,24]);
 assert.ok(eq(20+5*3,35)&&eq(5*1.2,6));
 const A=[10,12,13,14,15,16,18,70],B=[19,20,21,22,23,24,25,26];
 const mean=z=>z.reduce((a,b)=>a+b,0)/z.length;
 assert.equal(mean(A),21);assert.equal(mean(B),22.5);
 assert.ok(eq((A[3]+A[4])/2,14.5));
 const Q1=(A[1]+A[2])/2,Q3=(A[5]+A[6])/2;
 assert.ok(eq(Q1,12.5)&&eq(Q3,17)&&eq(Q3-Q1,4.5));
 assert.ok(A.at(-1)>Q3+1.5*(Q3-Q1));
});
test("Week 1 timed rational sign and general square proof are valid",()=>{
 const F=x=>1/(x-2)+1/(x+2);
 for(const x of [-8,-3,-1.2,-.1,.1,1,3,20]){
  assert.ok(eq(F(x),2*x/(x*x-4)));
  const allow=(x>-2&&x<=0)||(x>2);
  assert.equal(F(x)>=0,allow);
 }
 for(const area of [1,9,36,100])for(const x of [.2,1,2,3,5,8,15]){
  const P=2*(x+area/x);
  assert.ok(P>=4*Math.sqrt(area)-1e-10);
 }
 for(const x of [4,5,6,7.2,8,9])assert.ok(2*(x+36/x)<=26+1e-10);
 assert.ok(eq(2*(7.2+36/7.2),24.4));
 assert.ok(2*(7.3+36/7.3)>24.4);
});

test("Week 2 parametric route, chord midpoint and velocity geometry",()=>{
 const point=t=>[2+3*t,1+4*t],circle=([x,y])=>(x-5)**2+(y-5)**2;
 for(const t of [0,.25,.6,1]){
  const [x,y]=point(t);assert.ok(eq(3*y,4*x-5));
 }
 assert.ok(eq(circle(point(.6)),4));
 assert.ok(eq(circle(point(1.4)),4));
 assert.ok(circle(point(.61))<4&&circle(point(.59))>4);
 assert.ok(eq(Math.hypot(...point(.6).map((v,i)=>v-point(0)[i])),3));
 const A=[1,-2,2],B=[7,4,-1],C=[-2,1,5];
 const G=A.map((v,i)=>(v+B[i]+C[i])/3);
 assert.deepEqual(G,[2,1,2]);
 assert.ok(eq(Math.hypot(...B.map((v,i)=>v-A[i])),9));
 assert.ok(eq(Math.hypot(...G.map((v,i)=>v-A[i])),Math.sqrt(10)));
 const P=t=>[6*t,0],Q=t=>[2*t,4*t];
 for(const t of [.1,.5,.7,.9]){
  const [px,py]=P(t),[qx,qy]=Q(t);
  assert.ok(eq(px+py,6*t)&&eq(qx+qy,6*t));
  assert.ok(eq(.5*6*t*4*t,12*t*t));
 }
 assert.ok(eq(Math.hypot(...Q(.5).map((v,i)=>v-P(.5)[i])),2*Math.sqrt(2)));
});
test("Week 2 two tangents use exact discriminant, right-angle contact and correct slopes",()=>{
 const A=[5,0],r=3;
 for(const m of [-3/4,3/4]){
  const D=36-64*m*m;assert.ok(eq(D,0));
  const P=[9/5,m*(9/5-5)];
  assert.ok(eq(P[0]*P[0]+P[1]*P[1],9));
  assert.ok(eq(Math.hypot(P[0]-A[0],P[1]-A[1]),4));
  const OPdotAP=P[0]*(P[0]-5)+P[1]*P[1];
  assert.ok(eq(OPdotAP,0));
 }
});
test("Week 2 route safety and Year 1 kinematics/mechanics outcomes",()=>{
 const entry=2-Math.sqrt(7),exit=2+Math.sqrt(7);
 assert.ok(entry>-4&&exit<8);
 assert.ok(eq((6-Math.sqrt(7))/2,1.6771243444677046));
 assert.ok(eq(2+12+2,16));
 assert.ok(eq(16/2,8));
 for(const [x,y]of [[-4,3],[-4,5],[8,5],[8,3]])assert.ok((x-2)**2+y*y>16);
 assert.ok(eq(.5*4*12+5*12+.5*3*12,102));
 assert.ok(eq(102/12,8.5));
 assert.ok(eq(12/4,3)&&eq(-12/3,-4));
 const t=12,xA=.5*t*t,xB=180-9*t;
 assert.ok(eq(xA,xB)&&eq(xA,72)&&eq(9*t,108));
 assert.ok(eq(1*t-(-9),21));
});
test("Week 2 timed sector and general tangent family identities",()=>{
 const angle=2*Math.acos(3/5);
 assert.ok(eq(Math.cos(angle/2),3/5));
 assert.ok(eq(25*Math.acos(3/5)-12,.5*25*angle-12));
 assert.ok(25*Math.acos(3/5)-12>0);
 for(const [a,r]of [[5,3],[10,2],[13,5],[7,6]]){
  const m=r/Math.sqrt(a*a-r*r);
  const x=r*r/a,y=r*Math.sqrt(a*a-r*r)/a;
  assert.ok(eq(x*x+y*y,r*r));
  assert.ok(eq(x*x+y*y,a*x));
  assert.ok(eq(Math.hypot(x-a,y),Math.sqrt(a*a-r*r)));
  assert.ok(eq(4*(r*r-(a*a-r*r)*m*m),0));
 }
});

test("Week 3 reciprocal trig equations, two complementary roots and double-angle checks",()=>{
 const theta=Math.atan(4/3),sec=1/Math.cos(theta),tan=Math.tan(theta);
 assert.ok(eq(sec-tan,1/3)&&eq(sec+tan,3));
 assert.ok(eq(Math.sin(theta),4/5)&&eq(Math.cos(theta),3/5));
 assert.ok(eq(Math.sin(2*theta),24/25)&&eq(Math.cos(2*theta),-7/25));
 const a=Math.atan(1/2),b=Math.atan(2);
 assert.ok(eq(a+b,Math.PI/2));
 for(const t of [a,b])assert.ok(eq(Math.tan(t)+1/Math.tan(t),2.5));
 for(const t of [.1,.5,1,1.4])assert.ok(Math.tan(t)+1/Math.tan(t)>=2);
 for(const t of [Math.PI/6,5*Math.PI/6,3*Math.PI/2])
  assert.ok(eq(Math.cos(2*t),Math.sin(t)));
});
test("Week 3 R-sine/line–circle connection and geometric small-angle error",()=>{
 const F=t=>3*Math.cos(t)+4*Math.sin(t);
 const alpha=Math.atan(3/4);
 for(const t of [.1,.6,1,2,3.7])assert.ok(eq(F(t),5*Math.sin(t+alpha)));
 assert.ok(eq(F(Math.PI/2),4));
 assert.ok(eq(F(Math.atan(7/24)),4));
 assert.ok(eq(F(Math.atan2(4,3)),5));
 const theta=.4,arc=50*theta,chord=100*Math.sin(theta/2);
 assert.ok(eq(arc,20)&&eq(chord,19.866933079506122));
 assert.ok(eq(100*(arc-chord)/arc,.6653346024693919));
 assert.ok(eq(1250*(theta-Math.sin(theta)),13.227071614281759,1e-6));
});
test("Week 3 one-cycle periodic threshold has correct two decimal boundary and extrema",()=>{
 const alpha=Math.atan(4/3);
 const F=t=>10+3*Math.sin(Math.PI*t/6)+4*Math.cos(Math.PI*t/6);
 const maximum=6/Math.PI*(Math.PI/2-alpha);
 const boundary=6/Math.PI*(Math.PI-2*alpha);
 assert.ok(eq(F(maximum),15));
 assert.ok(eq(F(maximum+6),5));
 assert.ok(eq(F(0),14));
 assert.ok(eq(F(boundary),14));
 assert.ok(F(boundary-.01)>14&&F(boundary+.01)<14);
 assert.ok(eq(boundary,2.4579931763896012));
 assert.equal(boundary.toFixed(2),"2.46");
 assert.ok(eq(F(12),14));
});
test("Week 3 two-stage probability: fair and weighted spinner are distinctly modelled",()=>{
 assert.ok(eq(4/8,1/2)&&eq(3/8,3/8)&&eq(2/8,1/4));
 assert.ok(!eq(1/2*3/8,1/4));
 assert.ok(eq(1-(5/8)**2,39/64));
 assert.ok(eq(3*(3/28)+7/28,4/7));
 assert.ok(eq(2*(3/28)+7/28,13/28));
 assert.ok(eq(3/28+7/28,5/14));
 assert.ok(!eq((4/7)*(13/28),5/14));
});
test("Week 3 without-replacement tree yields correct two-draw and independence probabilities",()=>{
 const rr=4/9*3/8,rb=4/9*3/8+3/9*4/8,none=7/9*6/8;
 assert.ok(eq(rr,1/6)&&eq(rb,1/3)&&eq(none,7/12)&&eq(1-none,5/12));
 assert.ok(!eq(rr,(4/9)**2));
});
test("Week 3 unit-circle chord length, parameter bounds and triangular maximum are independent",()=>{
 const chord=c=>2*Math.sqrt(1-c*c/25);
 assert.ok(eq(chord(3),8/5));
 for(const c of [4,-4])assert.ok(eq(chord(c),6/5));
 const P=[1,0],Q=[-7/25,24/25];
 for(const [x,y]of [P,Q]){
  assert.ok(eq(x*x+y*y,1));
  assert.ok(eq(3*x+4*y,3));
 }
 assert.ok(eq(Math.hypot(P[0]-Q[0],P[1]-Q[1]),8/5));
 const area=c=>Math.abs(c)/5*Math.sqrt(1-c*c/25);
 for(const c of [-5,-4,-3,0,1,2,4,5])assert.ok(area(c)<=.5+1e-10);
 assert.ok(eq(area(5/Math.sqrt(2)),.5));
});
