import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P03",[
 {
  ao:"AO1",title:"Centre and radius from a circle equation",
  stem:"The circle \\(C\\) has equation \\(x^2+y^2-6x+4y-12=0\\).",
  parts:[
   ["Write its equation in completed-square form.",3,"P03-004"],
   ["State the coordinates of the centre and the radius.",2,"P03-004"]
  ],
  steps:[
   "Group terms: \\((x^2-6x)+(y^2+4y)=12\\). Complete the squares: \\((x-3)^2-9+(y+2)^2-4=12\\), so \\((x-3)^2+(y+2)^2=25\\). [3]",
   "Comparing with \\((x-a)^2+(y-b)^2=r^2\\) gives centre \\((3,-2)\\) and radius \\(5\\). [2]"
  ],
  hint:"Complete the square separately in \\(x\\) and in \\(y\\).",
  answer:"\\((x-3)^2+(y+2)^2=25\\), centre \\((3,-2)\\), radius \\(5\\).",
  misconception:"The sign of the centre's \\(y\\)-coordinate is opposite to the sign inside \\((y+2)^2\\).",
  reflection:"How can you verify the radius without drawing the circle?"
 },
 {
  ao:"AO2",title:"Two tangents of the same gradient",
  stem:"A circle has centre \\((2,1)\\) and radius \\(\\sqrt{10}\\). The line \\(3x+y=k\\) is tangent to the circle.",
  parts:[
   ["Form an equation using the perpendicular distance from the centre to the line.",3,"P03-007",["P03-001"]],
   ["Determine every possible value of \\(k\\).",3,"P03-007"],
   ["Explain geometrically why there are two answers.",1,"P03-006"]
  ],
  steps:[
   "For the line \\(3x+y-k=0\\), the perpendicular distance from \\((2,1)\\) is \\(\\dfrac{|3(2)+1-k|}{\\sqrt{3^2+1^2}}=\\dfrac{|7-k|}{\\sqrt{10}}\\). Tangency requires this to equal \\(\\sqrt{10}\\). [3]",
   "\\(|7-k|=10\\), so \\(7-k=10\\) or \\(7-k=-10\\), yielding \\(k=-3\\) or \\(k=17\\). [3]",
   "The family of parallel lines has one tangent on each side of the circle, each at a perpendicular distance equal to the radius. [1]"
  ],
  hint:"Tangency means the shortest distance from the centre to the line equals the radius.",
  answer:"\\(k=-3\\) or \\(k=17\\).",
  misconception:"Dropping the modulus in the point-to-line distance loses one of the parallel tangents.",
  reflection:"How would changing the radius affect the difference between the two values of \\(k\\)?"
 },
 {
  ao:"AO3",title:"A footpath through a circular garden",
  stem:"A straight footpath joins \\(A(0,0)\\) to \\(B(8,4)\\). A circular garden has centre \\((4,4)\\) and radius \\(\\sqrt5\\) metres. A designer must calculate how much of the path lies inside the garden.",
  parts:[
   ["Find the equation of the line containing the footpath.",2,"P03-001"],
   ["Find the two points where that line intersects the garden boundary, confirming that both lie on segment \\(AB\\).",5,"P03-007",["P03-004"]],
   ["Hence calculate the exact length of path inside the garden.",2,"P03-003",["P03-007"]]
  ],
  steps:[
   "The gradient is \\(4/8=1/2\\), and the line goes through the origin; therefore \\(y=x/2\\), with \\(0\\le x\\le8\\). [2]",
   "Substitute \\(y=x/2\\) into \\((x-4)^2+(y-4)^2=5\\). Multiplying by 4 gives \\(5x^2-48x+108=0\\), which factorises as \\((5x-18)(x-6)=0\\). Thus the intersection points are \\((18/5,9/5)\\) and \\((6,3)\\). Both \\(x\\)-coordinates lie between 0 and 8. [5]",
   "The distance between the points is \\(\\sqrt{(6-18/5)^2+(3-9/5)^2}=\\sqrt{(12/5)^2+(6/5)^2}=\\dfrac{6\\sqrt5}{5}\\text{ m}\\) (about \\(2.68\\text{ m}\\)). [2]"
  ],
  hint:"Use the path equation to eliminate \\(y\\) from the circle equation.",
  answer:"\\(\\dfrac{6\\sqrt5}{5}\\text{ m}\\approx2.68\\text{ m}\\).",
  misconception:"Line-circle intersection solutions must be checked against the finite path segment, not just the infinite line.",
  reflection:"Would moving the garden centre perpendicular to the footpath make the inside length greater or smaller?"
 }
]);
