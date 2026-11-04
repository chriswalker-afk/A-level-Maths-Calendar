import test from "node:test";
import assert from "node:assert/strict";
import {week04Questions} from "../src/data/week04.js";
import {week05Questions} from "../src/data/week05.js";
import {week06Questions} from "../src/data/week06.js";

// The calculations below are independent of the worked-solution strings:
// newtonian force balance, recurrence evaluation, probability formulae,
// exact antiderivatives checked via numerical quadrature and polynomial identities.
const close=(a,b,tol=1e-9)=>assert.ok(Math.abs(a-b)<tol, "Expected "+a+" to equal "+b+" (tol "+tol+")");
const choose=(n,k)=>{let v=1;for(let j=1;j<=k;j++)v=v*(n-j+1)/j;return v;};
const bin=(n,p,k)=>choose(n,k)*(p**k)*((1-p)**(n-k));
const tail=(n,p,k)=>Array.from({length:n-k+1},(_,i)=>bin(n,p,k+i)).reduce((a,b)=>a+b,0);
const simpson=(f,a,b,n=6000)=>{
 const h=(b-a)/n;let total=f(a)+f(b);
 for(let i=1;i<n;i++)total+=(i%2?4:2)*f(a+i*h);
 return total*h/3;
};
const item=(week,id)=>{
 const q=week.find(q=>q.id===id);
 assert.ok(q,id+" must exist in the released week");
 return q;
};

test("Week 4: independent differentiation, tangent uniqueness and related rates",()=>{
 const quartic=x=>x*x*(x-2)**2;
 const second=x=>12*(x-1)**2-4;
 for(const [x,y] of [[0,0],[1,1],[2,0]])close(quartic(x),y);
 for(const x of [1-1/Math.sqrt(3),1+1/Math.sqrt(3)]){
  close(second(x),0);
  close(quartic(x),4/9);
 }
 close(-6*.6/8,-.45);
 close((8*.6+6*(-.45))/2,1.05);
 // The purported tangent to x²+xy+y²=7 at (1,2) must be a repeated root.
 for(const x of [-2,0,1,2,5]){
  const y=(14-4*x)/5;
  close(x*x+x*y+y*y-7,21*(x-1)**2/25);
 }
 close((4*Math.exp(-2)),-Math.exp(-2)*2+6*Math.exp(-2));
 assert.equal(item(week04Questions,"W04-P7").marks,10);
});

test("Week 4: conical accumulation, vector dynamics and lift constraints",()=>{
 const V=t=>Math.PI*(2/3+6*t-t*t/4);
 const full=12-4*Math.sqrt(14/3);
 assert.ok(full>3&&full<4);
 close(V(full),18*Math.PI);
 close(V(0),2*Math.PI/3);
 close(V(2),35*Math.PI/3);
 const h=Math.cbrt(140);
 close((6*Math.PI*(1-2/12))/(Math.PI*h*h/4),20/(140**(2/3)));
 close(8-6,2);close(8-4,4);
 close(1+2*3+.5*1*9,11.5);
 close(-2+1*3+.5*2*9,10);
 close(500*(9.8+1.2),5500);
 close(500*(9.8-.8),4500);
 close(15+6*7.5/2,37.5);
 assert.ok(5500>5200);
 assert.equal(item(week04Questions,"W04-M3").parts.reduce((s,p)=>s+p[1],0),14);
});

test("Week 5: exact trigonometric, rational, area and differential-equation answers",()=>{
 const a=simpson(x=>Math.sin(x)**2*Math.cos(x)**2,0,Math.PI/2);
 const b=simpson(x=>Math.sin(x)**4,0,Math.PI/2);
 close(a,Math.PI/16);close(b,3*Math.PI/16);
 for(const x of [1,1.25,1.5,2]){
  const rational=(x*x+3*x-1)/(x*(x+1)**2);
  close(rational,-1/x+2/(x+1)+3/(x+1)**2);
 }
 close(simpson(x=>(x*x+3*x-1)/(x*(x+1)**2),1,2),.5+Math.log(9/8));
 const y=x=>2*Math.exp(x*x/2)-1;
 const dy=x=>2*x*Math.exp(x*x/2);
 close(y(0),1);
 close(y(Math.sqrt(2*Math.log(2))),3);
 for(const x of [.25,.7,1.2])close(dy(x),x*(1+y(x)));
 close(.5-(Math.log(2)/2),(1-Math.log(2))/2);
 const area=x=>.5*(x*x-Math.log(1+x*x));
 for(const x of [.25,1,2])close((area(x+1e-5)-area(x-1e-5))/(2e-5),x*x*x/(1+x*x),1e-8);
 const reservoir=t=>12*(1-Math.exp(-t*t/4));
 close(reservoir(2*Math.sqrt(Math.log(10))),10.8);
 close(reservoir(100),12);
 assert.ok(item(week05Questions,"W05-P6").topics.includes("separable differential equations"));
});

test("Week 5: binomial probabilities and one-sided critical region remain 9MA0 Year 1",()=>{
 const p0=bin(8,.3,0),p1=bin(8,.3,1),p2=bin(8,.3,2);
 close(p0,.05764801);
 close(p0+p1,.25529833);
 close(p2,.29647548);
 close(1-p0-p1,.74470167);
 close(tail(10,.2,5),.0327934976);
 close(tail(10,.2,4),.1208738816);
 assert.ok(tail(10,.2,5)<.05&&tail(10,.2,4)>.05);
 const q=item(week05Questions,"W05-A4");
 const text=[q.stem,q.answer,...q.parts.map(p=>p[0]),...q.steps].join(" ");
 assert.doesNotMatch(text,/variance of returned|expected number|E\(X\)=np|Var\(X\)/i,"Mean/variance calculation is excluded from 9MA0 discrete distributions");
});

test("Week 6: arithmetic/geometric comparisons, binomial accuracy and limiting recurrence",()=>{
 for(let n=3;n<=35;n++)assert.ok(2**n-1>n*(n+1)/2);
 const cubic=x=>1-x+1.5*x*x-2.5*x*x*x;
 close(cubic(.1),.9125);
 assert.ok(Math.abs(1/Math.sqrt(1.2)-cubic(.1))<35/8*(.1**4));
 let u=3;for(let i=0;i<12;i++){assert.ok(u>=Math.sqrt(6));const next=(u+6/u)/2;assert.ok(next<=u);u=next;}
 close(u,Math.sqrt(6));
 const arith=n=>n*(195+5*n)/2,geom=n=>2000*(1.05**n-1);
 close(arith(6),675);close(geom(6),680.19128125);
 assert.ok(100*1.05**3<=120&&100*1.05**4>120);
 assert.ok(100+5*(5-1)<=120&&100+5*(6-1)>120);
});

test("Week 6: pollutant threshold, grouped data, and connected particle stages",()=>{
 const mass=n=>300*(1-.8**n);
 close(mass(1),60);close(mass(2),108);close(mass(3),146.4);
 assert.ok(mass(8)<250&&mass(9)>=250);
 close(mass(1000),300);
 assert.deepEqual([8/10,12/10,20/20,10/10],[.8,1.2,1,1]);
 const N=50;
 const median=20+(N/2-20)/(20/20);
 const q3=20+(.75*N-20)/(20/20);
 close(median,25);close(q3,37.5);
 close((.5*20+10)/50,.4);
 close(2*9.8/(3+2),3.92);
 close(3*3.92,11.76);
 close(Math.sqrt(2*1.96/3.92),1);
 close(2*3.92,7.84);
});

test("Week 6: nontrivial binomial coefficient and weighted-square identities",()=>{
 for(let n=2;n<=12;n++){
  let s0=0,s1=0,s2=0,square=0,conv=0;
  for(let k=0;k<=n;k++){
   const c=choose(n,k);
   s0+=c;s1+=k*c;s2+=k*k*c;
   square+=(2*k-n)**2*c;conv+=c*c;
  }
  close(s0,2**n);close(s1,n*2**(n-1));
  close(s2,n*(n+1)*2**(n-2));
  close(square,n*2**n);
  close(conv,choose(2*n,n));
 }
 const q=item(week06Questions,"W06-X2");
 assert.doesNotMatch(q.parts.map(p=>p[0]).join(" "),/Var\(X\)|E\(X\)|mean and variance/i);
});
