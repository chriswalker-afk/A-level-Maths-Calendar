import test from "node:test";
import assert from "node:assert/strict";
const close=(a,b,eps=1e-8)=>Math.abs(a-b)<eps;
const pi=Math.PI;
const derivative=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
const integrate=(f,a,b,n=2000)=>{
 const h=(b-a)/n;let sum=f(a)+f(b);
 for(let i=1;i<n;i++)sum+=(i%2?4:2)*f(a+i*h);
 return sum*h/3;
};
const choose=(n,k)=>{let result=1;for(let i=1;i<=k;i++)result=result*(n-i+1)/i;return result};
const binomialTail=(n,p,k)=>{
 let sum=0;for(let i=k;i<=n;i++)sum+=choose(n,i)*p**i*(1-p)**(n-i);return sum;
};
test("partial fractions with polynomial division and enclosed regions give exact areas",()=>{
 const f=x=>(x**3+3*x*x+5*x+5)/(x*x+3*x+2);
 for(const x of [0,.1,.5,1,2])assert.ok(close(f(x),x+2/(x+1)+1/(x+2)));
 const I=integrate(f,0,1);
 assert.ok(close(I,.5+Math.log(6)));
 const diff=x=>x**3-4*x;
 assert.ok(close(diff(-2),0)&&close(diff(0),0)&&close(diff(2),0));
 assert.ok(diff(-1)>0&&diff(1)<0);
 const area=integrate(diff,-2,0)-integrate(diff,0,2);
 assert.ok(close(area,8)&&close(integrate(diff,-2,2),0));
});
test("repeated integration by parts and extra x factor are independently integrated",()=>{
 const I=(2*Math.exp(pi)+1)/5,J=(Math.exp(pi)-2)/5;
 const K=((5*pi-3)*Math.exp(pi)-4)/25;
 assert.ok(close(integrate(x=>Math.exp(2*x)*Math.sin(x),0,pi/2),I));
 assert.ok(close(integrate(x=>Math.exp(2*x)*Math.cos(x),0,pi/2),J));
 assert.ok(close(integrate(x=>x*Math.exp(2*x)*Math.sin(x),0,pi/2),K));
 assert.ok(K>0);
});
test("flow accumulation, mean rate and above-average interval are exact",()=>{
 const rate=t=>12+6*t-t*t;
 const V=t=>80+12*t+3*t*t-t**3/3;
 assert.ok(close(V(0),80)&&close(V(6),188));
 assert.ok(close(derivative(V,3),rate(3)));
 assert.ok(close((V(6)-V(0))/6,18));
 assert.ok(close(rate(3-Math.sqrt(3)),18));
 assert.ok(close(rate(3+Math.sqrt(3)),18));
 assert.ok(rate(3)>18&&rate(0)<18&&rate(6)<18);
});
test("accumulated squared pulse has correct IBP result, constraints and quadratic sensitivity",()=>{
 const index=a=>integrate(t=>a*a*t*Math.exp(-t/2),0,4);
 const factor=4-12*Math.exp(-2);
 assert.ok(factor>0);
 for(const a of [.1,1,2,3,4])assert.ok(close(index(a),a*a*factor));
 assert.ok(close(derivative(index,2),4*factor,1e-6));
 assert.ok(index(3)<=9*factor+1e-8&&index(4)>9*factor);
 assert.ok(close(index(1.1)/index(1),1.21));
 const pulse=t=>2*Math.sqrt(t)*Math.exp(-t/4);
 assert.ok(close(derivative(pulse,2),0,1e-8));
 assert.ok(pulse(2)>pulse(1)&&pulse(2)>pulse(3));
});
test("binomial tails and one-tailed 5 percent hypothesis decision are numerically audited",()=>{
 const p3=choose(10,3)*.3**3*.7**7;
 const pLe2=1-binomialTail(10,.3,3);
 const pGe3=binomialTail(10,.3,3),pGt3=binomialTail(10,.3,4);
 assert.ok(close(p3,.266827932)&&close(pLe2,.3827827864));
 assert.ok(close(pGe3,.6172172136)&&close(pGt3,.3503892816));
 assert.ok(close(pGe3-pGt3,p3));
 const pTest=binomialTail(20,.25,9);
 assert.ok(close(pTest,.04092516770651855));
 assert.ok(pTest<.05&&binomialTail(20,.25,8)>.05);
});
test("trapezium estimate, parametric area and fraction check independently",()=>{
 const f=x=>x*Math.sqrt(1+x*x);
 const exact=(5*Math.sqrt(5)-1)/3;
 const approx=Math.sqrt(2)+Math.sqrt(5);
 assert.ok(close(integrate(f,0,2),exact));
 assert.ok(approx>exact);
 const param=x=>8*x*x-2*x**4;
 const area=integrate(param,0,2),stop=2/Math.sqrt(3);
 const first=integrate(param,0,stop);
 assert.ok(close(area,128/15));
 assert.ok(close(first,256*Math.sqrt(3)/135));
 assert.ok(close(first/area,2*Math.sqrt(3)/9));
});
test("fair coin two-sided p-value gives different decisions at 5 and 10 percent",()=>{
 const upper=binomialTail(18,.5,13);
 const two=2*upper;
 assert.ok(close(upper,1577/32768));
 assert.ok(close(two,1577/16384));
 assert.ok(two>.05&&two<.1);
 assert.ok(close(binomialTail(18,.5,13),1-binomialTail(18,.5,6)));
});
test("finite accumulation challenge has monotonic response and a unique 75 percent crossing",()=>{
 const A=a=>(1-Math.exp(-2*a)*(2*a*a+2*a+1))/4;
 assert.ok(close(A(0),0));
 assert.ok(close(A(1),integrate(t=>t*t*Math.exp(-2*t),0,1)));
 assert.ok(close(A(4),integrate(t=>t*t*Math.exp(-2*t),0,4)));
 assert.ok(close(derivative(A,1),Math.exp(-2)));
 const limit=.25;
 assert.ok(A(100)>limit-.000001&&A(100)<limit+1e-12);
 let lo=0,hi=10;
 for(let i=0;i<55;i++){
  const mid=(lo+hi)/2;
  if(A(mid)<.75*limit)lo=mid;else hi=mid;
 }
 const root=(lo+hi)/2;
 assert.ok(close(root,1.96020103014628,1e-7));
 assert.equal(root.toFixed(2),"1.96");
 assert.ok(A(root-.1)<.75*limit&&A(root+.1)>.75*limit);
});
