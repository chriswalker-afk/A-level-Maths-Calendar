import test from "node:test";
import assert from "node:assert/strict";

const close=(a,b,tol=1e-9)=>Math.abs(a-b)<tol;
const pi=Math.PI,radians=deg=>deg*pi/180;

test("ambiguous sine-rule data generates exactly the two stated triangle solutions",()=>{
 const sC=10*Math.sin(radians(30))/(5*Math.SQRT2);
 assert.ok(close(sC,1/Math.SQRT2));
 for(const [C,A,BC]of [[45,105,5*(Math.sqrt(3)+1)],[135,15,5*(Math.sqrt(3)-1)]]){
  assert.equal(A+C+30,180);
  assert.ok(close(Math.sin(radians(C)),sC));
  assert.ok(close(BC/Math.sin(radians(A)),10*Math.SQRT2));
  const area=.5*10*BC*Math.sin(radians(30));
  assert.ok(close(area,12.5*(Math.sqrt(3)+(A===105?1:-1))));
 }
});
test("periodic ferry model has two exact four-hour windows",()=>{
 const h=t=>3+2*Math.cos(pi*(t-3)/6);
 assert.ok(close(h(3),5)&&close(h(9),1));
 assert.ok(close(h(15),5)&&close(h(21),1));
 for(const t of [1,5,13,17])assert.ok(close(h(t),4));
 for(const t of [0,6,10,12,18,24])assert.ok(h(t)<4);
 assert.ok(h(2)>4&&h(14)>4);
});
test("periodic signal has a stationary inflection and correctly quantified approximation error",()=>{
 const f=t=>2*Math.sin(t)+Math.sin(2*t);
 const df=t=>2*Math.cos(t)+2*Math.cos(2*t);
 for(const t of [pi/3,pi,5*pi/3])assert.ok(close(df(t),0));
 assert.ok(close(f(pi/3),3*Math.sqrt(3)/2));
 assert.ok(close(f(pi),0));
 assert.ok(close(f(5*pi/3),-3*Math.sqrt(3)/2));
 assert.ok(df(pi-.01)<0&&df(pi+.01)<0);
 const exact=f(.5);
 assert.ok(close(Math.round(exact*1000)/1000,1.8));
 const over=(2-exact)/exact*100;
 assert.ok(close(Math.round(over*10)/10,11.1));
});
test("probability trees and Venn arithmetic independently sum correctly",()=>{
 assert.ok(close(3/5*2/4+2/5*3/4,3/5));
 assert.ok(close(1-2/5*1/4,9/10));
 assert.ok(close(2*3/5*2/5,12/25));
 const bothClubs=70+55-(120-25);
 assert.equal(bothClubs,30);
 assert.equal(70-bothClubs+55-bothClubs,65);
 assert.ok(!close(bothClubs/120,(70/120)*(55/120)));
 assert.ok(close(25/120*24/119,5/119));
 const bothPass=.9*.8*.8+.1*.3*.3;
 const onePass=.9*2*.8*.2+.1*2*.3*.7;
 const anyPass=1-(.9*.2*.2+.1*.7*.7);
 assert.ok(close(bothPass,.585));
 assert.ok(close(onePass,.33));
 assert.ok(close(anyPass,.915));
 assert.ok(!close(bothPass,(.9*.8+.1*.3)**2));
});
test("the timed double-angle inequality excludes each actual equality point",()=>{
 const F=x=>2*Math.cos(2*x)+3*Math.sin(x),phi=Math.asin(.25);
 for(const t of [pi/2,pi+phi,2*pi-phi])assert.ok(close(F(t),1),"equality "+t);
 assert.ok(F(0)>1&&F(pi/2-.1)>1&&F(pi/2+.1)>1);
 assert.ok(F(pi+phi-.1)>1&&F(pi+phi+.1)<1);
 assert.ok(F(2*pi-phi-.1)<1&&F(2*pi-phi+.1)>1);
 assert.ok(close(41/16,2-4*(3/8)**2+3*(3/8)));
});
test("extension threshold tangency and time-above-threshold are exact",()=>{
 const fk=(k,x)=>Math.sin(x)+k*Math.cos(x);
 assert.ok(close(fk(Math.sqrt(3),pi/6),2));
 assert.ok(close(Math.cos(pi/6)-Math.sqrt(3)*Math.sin(pi/6),0));
 assert.ok(close(fk(Math.sqrt(3),pi/2),1));
 assert.ok(close(fk(Math.sqrt(3),11*pi/6),1));
 assert.ok(fk(Math.sqrt(3),.15)>1);
 assert.ok(fk(Math.sqrt(3),pi)<1);
 assert.ok(close((pi/2+pi/6)/(2*pi),1/3));
});
