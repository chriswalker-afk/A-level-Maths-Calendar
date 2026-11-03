import test from "node:test";
import assert from "node:assert/strict";
const close=(a,b,eps=1e-7)=>Math.abs(a-b)<eps;
const derive=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
const integrate=(f,a,b,n=4000)=>{
 const h=(b-a)/n;let total=f(a)+f(b);
 for(let i=1;i<n;i++)total+=(i%2?4:2)*f(a+i*h);
 return total*h/3;
};
const choose=(n,k)=>{let r=1;for(let j=1;j<=k;j++)r=r*(n-j+1)/j;return r;};
const binomialTail=(n,p,k)=>{
 let t=0;for(let j=k;j<=n;j++)t+=choose(n,j)*p**j*(1-p)**(n-j);return t;
};

test("log equation obeys its full domain and rejects the extraneous root",()=>{
 const good=2*Math.sqrt(2),bad=-good;
 const f=x=>Math.log(x-2)+Math.log(x+4)-Math.log(2*x);
 assert.ok(good>2&&close(f(good),0));
 assert.ok(bad<2&&!Number.isFinite(f(bad)));
 assert.ok(close((good-2)*(good+4),2*good));
});
test("log–log power law fits all observations and checks the extrapolated boundary",()=>{
 const f=x=>6*x**1.5;
 for(const [x,y]of [[1,6],[4,48],[9,162],[16,384]])assert.ok(close(f(x),y));
 assert.ok(close(Math.log(48/6)/Math.log(4),1.5));
 const threshold=50**(2/3);
 assert.ok(close(f(threshold),300));
 assert.ok(threshold>9&&f(threshold-.1)<300&&f(threshold+.1)>300);
});
test("separable Pure ODE produces the correct positive branch, convexity and tangent",()=>{
 const y=x=>-1+Math.sqrt(2*x*x+4);
 const slope=x=>2*x/Math.sqrt(2*x*x+4);
 assert.ok(close(y(0),1));
 for(const x of [.1,.4,1,3])assert.ok(close(derive(y,x),2*x/(y(x)+1)));
 for(const x of [.2,1,2])assert.ok(close(derive(slope,x),8/(2*x*x+4)**1.5,1e-6));
 const root=Math.sqrt(2);
 assert.ok(close(slope(root),1));
 assert.ok(close(y(root),root+Math.sqrt(2)-1));
});
test("decay with background has a correct half-life, threshold and derivative",()=>{
 const k=Math.log(2)/3,C=t=>5+80*Math.exp(-k*t);
 assert.ok(close(C(0),85)&&close(C(3),45)&&close(C(6),25));
 assert.ok(close((C(6)-C(0))/6,-10));
 assert.ok(close(C(9),15)&&C(9.1)<15&&C(8.9)>15);
 assert.ok(close(derive(C,3),-40*k));
});
test("logistic growth and unrestricted model satisfy independent differential equations",()=>{
 const U=t=>20*Math.exp(.2*t),L=t=>100/(1+4*Math.exp(-.2*t));
 assert.ok(close(U(0),20)&&close(L(0),20));
 for(const t of [.1,1,3,7,12]){
  assert.ok(close(derive(U,t),.2*U(t)));
  assert.ok(close(derive(L,t),.2*L(t)*(1-L(t)/100),1e-6));
  assert.ok(L(t)<100);
 }
 const tU=5*Math.log(5/2),tL=5*Math.log(4);
 assert.ok(close(U(tU),50)&&close(L(tL),50));
 assert.ok(close(tU,4.5814536593707755));
 assert.ok(close(tL,6.931471805599453));
 assert.ok(close(U(10),147.781121978613));
 assert.ok(close(L(10),64.87856442839393));
});
test("Year 1 regression outlier and two regressions have exact slope/intercept",()=>{
 const data=[[2,6],[4,9],[6,12],[8,15],[10,30]];
 const xbar=data.reduce((s,[x])=>s+x,0)/data.length;
 const ybar=data.reduce((s,[,y])=>s+y,0)/data.length;
 const sxx=data.reduce((s,[x])=>s+(x-xbar)**2,0);
 const sxy=data.reduce((s,[x,y])=>s+(x-xbar)*(y-ybar),0);
 const b=sxy/sxx,a=ybar-b*xbar;
 assert.ok(close(b,2.7)&&close(a,-1.8));
 const selected=data.slice(0,4);
 for(const [x,y]of selected)assert.ok(close(y,1.5*x+3));
 assert.ok(close(1.5*7+3,13.5)&&close(a+b*7,17.1));
 assert.ok(close(1.5*14+3,24));
});
test("two-tailed fair binomial probabilities and adjacent boundaries are correct",()=>{
 const p20=2*binomialTail(20,.5,15);
 assert.ok(close(p20,43400/1048576));
 assert.ok(close(p20,.04138946533203125));
 assert.ok(p20<.05&&p20>.01);
 assert.ok(2*binomialTail(20,.5,14)>.05);
 const p18=2*binomialTail(18,.5,14);
 assert.ok(close(p18,8096/262144));
 assert.ok(close(p18,.0308837890625));
 assert.ok(p18<.05);
});
test("timed exponential product integral and power-law area independently agree",()=>{
 const f=x=>x*Math.exp(-x);
 assert.ok(close(derive(f,1),0));
 assert.ok(f(1)>f(.5)&&f(1)>f(2));
 assert.ok(close(integrate(f,0,2),1-3*Math.exp(-2)));
 const p=x=>24/Math.sqrt(x);
 assert.ok(close(p(1),24)&&close(p(9),8));
 assert.ok(close(integrate(p,1,9),96));
 assert.ok(close(p(16),6)&&p(17)<6);
});
test("A/A-star weighted exposure, limit and unique 75-percent threshold",()=>{
 const k=Math.log(2)/2;
 const excess=t=>40*Math.exp(-k*t);
 const E=t=>40/k**2*(1-(1+k*t)*Math.exp(-k*t));
 const total=40/k**2;
 for(const t of [0,.5,2,4,10]){
  assert.ok(close(E(t),integrate(x=>x*excess(x),0,t),1e-6));
  if(t>0)assert.ok(close(derive(E,t),t*excess(t),1e-5));
 }
 assert.ok(close(total,160/Math.log(2)**2));
 assert.ok(E(100)<total&&E(100)>total-1e-7);
 let lo=0,hi=30;for(let i=0;i<75;i++){
  const m=(lo+hi)/2;
  if(E(m)<.75*total)lo=m;else hi=m;
 }
 const root=(lo+hi)/2;
 assert.ok(close(root,7.7693009635111085,1e-8));
 assert.equal(root.toFixed(2),"7.77");
 assert.ok(E(7.765)<.75*total&&E(7.775)>.75*total);
});
