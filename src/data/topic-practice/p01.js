import {originalTopicQuestions as topic} from "./authoring.js";
export default topic("P01",[
 {
  ao:"AO1",title:"An even product",
  stem:"Let \\(n\\) be any integer. Prove that \\(n(n+1)\\) is even.",
  parts:[
   ["Explain the two possibilities for the parity of \\(n\\).",2,"P01-001"],
   ["Use both cases to complete a deductive proof.",3,"P01-001"]
  ],
  steps:[
   "Every integer is either even, \\(n=2k\\), or odd, \\(n=2k+1\\), for an integer \\(k\\). [2]",
   "If \\(n=2k\\), then \\(n(n+1)=2k(2k+1)\\), which is divisible by 2. If \\(n=2k+1\\), then \\(n(n+1)=(2k+1)(2k+2)=2(2k+1)(k+1)\\), also divisible by 2. These exhaust all integers. [3]"
  ],
  hint:"Write \\(n=2k\\) in the even case and \\(n=2k+1\\) in the odd case.",
  answer:"\\(n(n+1)\\) is even for every integer \\(n\\).",
  misconception:"Checking several consecutive integers does not prove a statement for all integers.",
  reflection:"Can you give a shorter proof without algebraic cases?"
 },
 {
  ao:"AO2",title:"The missing solution",
  stem:"A student solves \\((x-2)(x+3)=(x-2)(2x-1)\\) by cancelling \\(x-2\\), obtaining \\(x=4\\).",
  parts:[
   ["Identify the precise logical error in the student's reasoning.",2,"P01-005"],
   ["Solve the original equation without losing any solutions.",3,"P01-005",["P02-014"]],
   ["Explain when cancelling \\(x-2\\) would be valid.",2,"P01-001"]
  ],
  steps:[
   "The factor \\(x-2\\) can be zero. Dividing both sides by it assumes \\(x\\ne2\\), so the student may discard a genuine solution. [2]",
   "Bring both sides to one side: \\((x-2)[(x+3)-(2x-1)]=0\\), hence \\((x-2)(4-x)=0\\). Therefore \\(x=2\\) or \\(x=4\\). Both satisfy the original equation. [3]",
   "Cancellation is valid only after stating \\(x\\ne2\\). The case \\(x=2\\) must be checked separately before concluding that the solution set is complete. [2]"
  ],
  hint:"Move everything to one side and keep the common factor.",
  answer:"\\(x=2\\) or \\(x=4\\); cancelling \\(x-2\\) omits \\(x=2\\).",
  misconception:"An apparently reversible algebraic step may not be reversible when a cancelled factor is zero.",
  reflection:"How would you spot the omitted root before doing any algebra?"
 },
 {
  ao:"AO3",title:"A divisibility rule and its limits",
  stem:"A number theorist asserts that \\(n^3-n\\) is a multiple of 6 for every integer \\(n\\). A second person claims that replacing the minus sign by a plus sign preserves this property.",
  parts:[
   ["Factorise \\(n^3-n\\) completely.",2,"P01-001",["P02-014"]],
   ["Prove the first assertion for every integer \\(n\\).",4,"P01-001"],
   ["Determine whether the second assertion is true, with a logically sufficient argument.",3,"P01-003"]
  ],
  steps:[
   "\\(n^3-n=n(n^2-1)=n(n-1)(n+1)\\), the product of three consecutive integers. [2]",
   "Among any three consecutive integers, one is divisible by 3. At least one of them is even. Thus the product has a factor of both 2 and 3, and since these are coprime it is divisible by 6. The reasoning holds for negative integers and zero too. [4]",
   "The second claim is false: at \\(n=1\\), \\(n^3+n=2\\), which is not a multiple of 6. One counterexample disproves a universal assertion. [3]"
  ],
  hint:"Look for a factorisation giving three consecutive integers.",
  answer:"\\(6\\mid(n^3-n)\\) for all integer \\(n\\), but \\(6\\nmid(n^3+n)\\) when \\(n=1\\).",
  misconception:"A pattern supported by many examples is not a proof; one valid counterexample is enough to refute it.",
  reflection:"Would the first proof still work if the divisor were 12?"
 }
]);
