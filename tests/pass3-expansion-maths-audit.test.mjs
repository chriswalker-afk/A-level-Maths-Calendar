import test from "node:test";
import assert from "node:assert/strict";
import {week07Questions} from "../src/data/week07.js";
import {week08Questions} from "../src/data/week08.js";
import {week09Questions} from "../src/data/week09.js";

const close=(actual,expected,tol=1e-8)=>assert.ok(
 Math.abs(actual-expected)<=tol,"Expected "+actual+" to be within "+tol+" of "+expected);
const choose=(n,k)=>{let v=1;for(let j=1;j<=k;j++)v=v*(n-j+1)/j;return v;};
const bin=(n,p,k)=>choose(n,k)*p**k*(1-p)**(n-k);
const tail=(n,p,k)=>Array.from({length:n-k+1},(_,i)=>bin(n,p,k+i)).reduce((s,v)=>s+v,0);
const integrate=(f,a,b,n=4000)=>{
 const h=(b-a)/n;let sum=f(a)+f(b);
 for(let i=1;i<n;i++)sum+=(i%2?4:2)*f(a+i*h);
 return sum*h/3;
};
const newton=(f,df,start,n=3)=>{
 const points=[start];let x=start;
 for(let i=0;i<n;i++){x-=f(x)/df(x);points.push(x);}
 return points;
};
const question=(week,id)=>{
 const q=week.find(q=>q.id===id);
 assert.ok(q,"Missing question "+id);
 return q;
};

test("Week 7: logarithmic branches, flat inflection, and integer-constrained power maximum",()=>{
 const f=x=>Math.log(x)-2+2/x,df=x=>(x-2)/x**2;
 const xs=newton(f,df,5,3);
 close(xs[1],4.921350729715831);
 close(xs[2],4.921553633248259);
 close(xs[3],4.921553634567505);
 close(f(xs[3]),0);
 const curve=x=>(x*x+1)*Math.exp(-x);
 const deriv=x=>-(x-1)**2*Math.exp(-x);
 close(deriv(1),0);
 assert.ok(deriv(.5)<0&&deriv(1.5)<0);
 close(integrate(curve,0,2),3-11*Math.exp(-2));
 const E=x=>Math.exp(Math.log(x)/x);
 close(E(Math.E),Math.exp(1/Math.E));
 assert.ok(E(3)>E(2)&&E(3)>E(4)&&E(3)>E(10));
 assert.ok(Math.log(2)>2/3&&Math.log(2)<1/Math.sqrt(2));
 close(integrate(x=>Math.log(1+x)-x/(1+x),0,1),3*Math.log(2)-2);
 assert.equal(question(week07Questions,"W07-P4").marks,10);
});

test("Week 7: two competing growth models, regression influence, critical-tail boundaries",()=>{
 const A=t=>10*Math.exp(.3*t),B=t=>100-90*Math.exp(-.2*t);
 const f=t=>A(t)-B(t),df=t=>3*Math.exp(.3*t)-18*Math.exp(-.2*t);
 const values=newton(f,df,7,3);
 assert.ok(f(6)<0&&f(7)>0);
 close(values[1],6.807803032673358);
 close(values[2],6.799712488103174);
 close(values[3],6.799698553527329);
 assert.ok(A(10)>100&&B(10)<100);
 const pts=[[2,5],[4,9],[6,11],[8,15]];
 const fit=coords=>{
  const xm=coords.reduce((s,p)=>s+p[0],0)/coords.length;
  const ym=coords.reduce((s,p)=>s+p[1],0)/coords.length;
  const sxx=coords.reduce((s,p)=>s+(p[0]-xm)**2,0);
  const sxy=coords.reduce((s,p)=>s+(p[0]-xm)*(p[1]-ym),0);
  const slope=sxy/sxx;return [slope,ym-slope*xm];
 };
 assert.deepEqual(fit(pts),[1.6,2]);
 const allFive=fit([...pts,[10,30]]);
 close(allFive[0],2.8);close(allFive[1],-2.8);
 close(tail(12,.5,10),79/4096);
 assert.ok(tail(12,.5,10)<.05&&tail(12,.5,9)>.05);
 assert.ok(tail(12,.5,10)>.01&&tail(12,.5,11)<.01);
 close(integrate(x=>(2*x+1)*Math.exp(-x),0,1),3-5/Math.E);
});

test("Week 7: sharp inequality lower/upper bounds reverse on (0,1)",()=>{
 const L=x=>2*(x-1)/(x+1),U=x=>(x-1)/Math.sqrt(x);
 for(const x of [1.01,1.5,2,4,16])assert.ok(L(x)<Math.log(x)&&Math.log(x)<U(x));
 for(const x of [.03,.25,.75,.99])assert.ok(U(x)<Math.log(x)&&Math.log(x)<L(x));
 close(L(1),0);close(U(1),0);
 close(integrate(x=>Math.log(x),1,2),2*Math.log(2)-1);
 assert.ok(1/3<2*Math.log(2)-1&&2*Math.log(2)-1<Math.sqrt(2)-1);
});

test("Week 8: bracketed exponential root, double root, trapezium error and sine crossing",()=>{
 const f=x=>Math.exp(x)-3*x,df=x=>Math.exp(x)-3;
 const xs=newton(f,df,1.5,3);
 close(xs[2],1.512134625427124);
 close(xs[3],1.5121345516578504);
 const T=.75*(3+2*Math.sqrt(5/2)),I=14/3;
 close(T,4.621708245126285);
 close(integrate(x=>Math.sqrt(1+x),0,3),I);
 assert.ok(T<I);
 const polynomial=x=>(x-2)**2*(x+1);
 close(polynomial(1),2);close(polynomial(3),4);close(polynomial(2),0);
 const step=newton(polynomial,x=>3*x*(x-2),3,2);
 close(step[1],23/9);
 close(step[2],1427/621);
 const sine=x=>Math.sin(x)-x/2;
 const sineRoot=newton(sine,x=>Math.cos(x)-.5,2,3);
 close(sineRoot[3],1.8954942672087132);
 close(integrate(sine,0,sineRoot[3]),1-Math.cos(sineRoot[3])-sineRoot[3]**2/4);
});

test("Week 8: signed velocity changes, misleading exact trapezium sum and Year 1 vertical motion",()=>{
 const v=t=>3*t*t-12*t+9;
 const s=t=>t**3-6*t*t+9*t;
 assert.deepEqual([s(0),s(1),s(3),s(4)],[0,4,0,4]);
 const exact=4+4+4;
 close(exact,12);
 const speeds=[0,1,2,3,4].map(t=>Math.abs(v(t)));
 assert.deepEqual(speeds,[9,0,3,0,9]);
 const trap=(speeds[0]+2*(speeds[1]+speeds[2]+speeds[3])+speeds[4])/2;
 close(trap,exact);
 assert.deepEqual([4.5-4,1.5-2,1.5-2,4.5-4],[.5,-.5,-.5,.5]);
 const height=t=>19.6+14.7*t-4.9*t*t,velocity=t=>14.7-9.8*t;
 close(height(1.5),30.625);
 close(height(4),0);
 close(velocity(4),-24.5);
 close((height(1.5)-height(0))+height(1.5),41.65);
});

test("Week 8: binomial batch acceptance and exact two-logarithm-root area",()=>{
 const accept=p=>(1-p)**4+4*p*(1-p)**3;
 close(accept(.2),.8192);
 close(1-accept(.2)**5,.6310651185258087);
 assert.ok(accept(.09)>.95&&accept(.10)<.95);
 const f=x=>Math.log(x)-x/4,df=x=>1/x-.25;
 const left=newton(f,df,1.5,3),right=newton(f,df,9,3);
 close(left[3],1.4296118247166327);
 close(right[3],8.613169456441678);
 const a=left[3],b=right[3];
 const area=(b*b/8-b)-(a*a/8-a);
 close(area,1.8343046327816444,1e-6);
 close(integrate(x=>Math.log(x)-x/4,a,b),area,1e-7);
 assert.ok(question(week08Questions,"W08-X2").steps.some(s=>s.includes("Newton")||s.includes("1.426")));
});

test("Week 9: rational inverse, trigonometric lobes, and parametric absolute area",()=>{
 const f=x=>(2*x+1)/(x-3),inv=x=>(3*x+1)/(x-2);
 for(const x of [-4,-1,0,2,4,6,9])close(inv(f(x)),x);
 const rMinus=(5-Math.sqrt(29))/2,rPlus=(5+Math.sqrt(29))/2;
 close(f(rMinus),rMinus);close(f(rPlus),rPlus);
 const y=x=>Math.sin(2*x)+Math.cos(x);
 close(integrate(y,0,Math.PI/2),2);
 close(integrate(y,0,Math.PI),0,1e-7);
 const rational=x=>(x*x+1)/(x*(x+1));
 const min=1+Math.sqrt(2);
 close(rational(min),2*Math.sqrt(2)-2);
 close(integrate(rational,1,2),1+Math.log(8/9));
 const s=t=>.4*t**5-2*t**3;
 close(s(2),-16/5);
 close(s(Math.sqrt(3)),-12*Math.sqrt(3)/5);
 close((24*Math.sqrt(3)-16)/5,5.113843876330611);
});

test("Week 9: operational speed, stratified tail and force/velocity reversal",()=>{
 const cost=v=>1200/v+.01*v*v;
 const vOpt=Math.cbrt(60000);
 close(vOpt,39.14867641168863);
 close(cost(vOpt),45.97856594361319);
 close(cost(40),46);close(cost(60),56);
 close(Math.cbrt(30000),31.07232505953859);
 assert.deepEqual([20*120/600,20*180/600,20*300/600],[4,6,10]);
 close(tail(20,.5,15),21700/1048576);
 assert.ok(tail(20,.5,15)<.05&&tail(20,.5,14)>.05);
 const f=t=>8-4*t,acc=t=>f(t)/2,velocity=t=>4*t-t*t;
 const position=t=>2*t*t-t**3/3;
 close(acc(2),0);close(velocity(4),0);
 close(position(4),32/3);
 close(position(5),25/3);
 close(2*position(4)-position(5),13);
});

test("Week 9: logarithmic antisymmetry and cubic parameter transition",()=>{
 const log=x=>Math.log(2-x)-Math.log(x);
 close(log(2/3),Math.log(2));
 close(log(1.5),-log(.5));
 close(integrate(log,.5,1.5),0);
 const cubic=(a,x)=>x**3-3*a*x+2;
 assert.ok(cubic(.5,Math.sqrt(.5))>0);
 close(cubic(1,1),0);
 assert.ok(cubic(2,Math.sqrt(2))<0);
 const root=newton(x=>cubic(2,x),x=>3*x*x-6,2.5,4);
 close(root[1],2.2941176470588234);
 close(root[3],2.261802632588049);
 close(root[4],2.2618022452600806);
 close(integrate(x=>cubic(1,x),0,1),.75);
 assert.equal(question(week09Questions,"W09-X2").marks,16);
});
