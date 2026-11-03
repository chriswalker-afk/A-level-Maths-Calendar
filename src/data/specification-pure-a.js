import {makeTopic} from "./specification-core.js";

export const pureTopicsA=[
  makeTopic("P",1,"Proof","Build convincing mathematical arguments and recognise what makes a statement true or false.",[
    {ref:"1.1",skills:[
      ["I can build a proof by deduction, explaining each logical step.","Show that an expression is positive for every real number by completing the square.","A checked example is not proof for every case."],
      ["I can prove a statement by checking every case in a small, clearly defined set.","Prove a claim about prime numbers from a finite list using exhaustion."],
      ["I can disprove a general claim with a valid counterexample.","Find one permitted integer that makes a claimed identity false."],
      ["I can write a proof by contradiction with a clear assumption and contradiction.","Suppose a number is rational and show the assumption leads to an impossibility."],
      ["I can explain why a proof is valid or identify a gap in someone else's reasoning.","Critique a purported proof that divides by an expression that might be zero."]
    ]}
  ]),
  makeTopic("P",2,"Algebra and functions","Manipulate expressions, analyse functions and restrictions, and connect algebra to graphs and models.",[
    {ref:"2.1",skills:[
      ["I can simplify expressions involving negative and rational indices.","Simplify a product of powers and give a result with positive indices."],
      ["I can rewrite radical expressions as fractional powers and back again.","Use an index law to solve an equation involving a fractional power."]
    ]},
    {ref:"2.2",skills:[
      ["I can simplify, add and multiply surd expressions.","Write a radical in simplest form and simplify an expression containing surds."],
      ["I can rationalise a denominator using an appropriate conjugate.","Make the denominator rational in a fraction containing two surds."]
    ]},
    {ref:"2.3",skills:[
      ["I can solve quadratics by factorisation, completing the square or the quadratic formula.","Find exact roots and explain why your chosen method is suitable."],
      ["I can use a quadratic's discriminant to determine its number and type of real roots.","Find a parameter for which a line just touches a parabola."],
      ["I can complete the square to find the turning point and range of a quadratic.","Prove a quadratic has a minimum or maximum over a stated domain."],
      ["I can recognise and solve equations that are quadratic in another expression.","Solve an equation that is quadratic in an exponential, sine or power of x."]
    ]},
    {ref:"2.4",skills:[
      ["I can solve simultaneous equations involving a line and a quadratic curve.","Find their coordinates of intersection, including any restrictions."],
      ["I can use substitution or elimination to solve simultaneous nonlinear equations.","Handle equations containing squared terms in both variables."]
    ]},
    {ref:"2.5",skills:[
      ["I can solve linear and quadratic inequalities and express their solution sets precisely.","State where a quadratic lies below a line, using the right endpoints and 'and/or'."],
      ["I can solve inequalities containing rational expressions after checking excluded values.","Find where a rational expression is positive using a sign diagram."],
      ["I can represent inequalities graphically with correct dotted and solid boundaries.","Sketch the region satisfying a linear and a quadratic inequality together."]
    ]},
    {ref:"2.6",skills:[
      ["I can expand and factorise polynomials, including cubic expressions.","Factorise a cubic after finding one linear factor."],
      ["I can divide polynomials by a linear expression and apply the factor theorem.","Find an unknown coefficient when a polynomial has a given factor."],
      ["I can simplify rational expressions while preserving excluded values.","Cancel common factors but still state holes in the original function's domain."]
    ]},
    {ref:"2.7",skills:[
      ["I can sketch polynomials and reciprocal-type graphs using roots and shape.","Sketch a cubic or quartic given its factorisation, multiplicities and intercepts."],
      ["I can sketch and solve problems with a modulus function.","Sketch the graph of the modulus of a linear expression and identify its vertex."],
      ["I can recognise direct and inverse proportion and create equations from data.","Determine a constant of proportionality and use the resulting model."]
    ]},
    {ref:"2.8",skills:[
      ["I can state and use a function's domain and range.","Restrict a quadratic's domain so its inverse is a function."],
      ["I can form, evaluate and solve equations with composite functions.","Find a value of x where a composite function takes a given value."],
      ["I can find an inverse function and its domain and range.","Form an inverse and explain why the appropriate square-root branch is needed."]
    ]},
    {ref:"2.9",skills:[
      ["I can apply translations, reflections and stretches to graphs of functions.","Sketch a transformed logarithmic or trigonometric function from a given graph."],
      ["I can combine transformations and explain the order of their effects.","Identify a function described by a horizontal reflection followed by a translation."]
    ]},
    {ref:"2.10",skills:[
      ["I can decompose proper rational expressions into partial fractions.","Resolve a fraction whose denominator has two or three distinct linear factors."],
      ["I can handle repeated linear factors or a linear numerator in a partial fraction decomposition.","Find constants when one linear factor is squared."],
      ["I can use algebraic division before partial fractions where needed.","Rewrite an improper fraction as a polynomial plus proper fractions."]
    ]},
    {ref:"2.11",skills:[
      ["I can construct and use an appropriate algebraic function to model a context.","Express profit from a price-demand function, then find acceptable prices."],
      ["I can test the domain and assumptions of an algebraic model.","Explain why extrapolating a model beyond the allowed range would be unreliable."]
    ]}
  ]),
  makeTopic("P",3,"Coordinate geometry","Connect straight lines, circles and parametric curves; use geometry to justify algebraic results.",[
    {ref:"3.1",skills:[
      ["I can find equations of lines from points, gradients and conditions.","Write the equation of the line through two given points."],
      ["I can use the conditions for parallel and perpendicular lines.","Find a normal to a line and calculate their point of intersection."],
      ["I can use line equations in geometrical arguments.","Prove that the perpendicular bisectors of two sides meet at a given point."]
    ]},
    {ref:"3.2",skills:[
      ["I can find a circle's centre and radius from its equation.","Complete the square in the equation of a circle."],
      ["I can construct the equation of a circle from geometrical information.","Find a circle through points or with a given diameter."],
      ["I can use properties of chords, semicircles and perpendicular radii.","Find the equation of the tangent at a point on a circle."],
      ["I can solve line–circle intersections and interpret a zero discriminant.","Find a line parameter that makes it tangent to a circle."]
    ]},
    {ref:"3.3",skills:[
      ["I can convert between parametric and Cartesian forms of a curve.","Eliminate a parameter and state any restriction on the resulting curve."],
      ["I can interpret the range of a parameter and the corresponding section of a curve.","Identify which part of a parabola is described by a parametric equation."]
    ]},
    {ref:"3.4",skills:[
      ["I can set up and interpret parametric equations for a geometric or motion context.","Model the position of a moving point in terms of a parameter."],
      ["I can evaluate the limits of a parametric model.","Explain when a parameter-based curve does not represent every possible position."]
    ]}
  ]),
  makeTopic("P",4,"Sequences and series","Understand discrete patterns, summation, binomial expansion and models for repeated change.",[
    {ref:"4.1",skills:[
      ["I can expand a positive integer power using binomial coefficients.","Find a particular term of a binomial expansion without writing all terms."],
      ["I can expand expressions with rational or negative powers and state validity conditions.","Find the first three terms of a non-integer binomial expansion and its valid interval."],
      ["I can use a binomial expansion to approximate a numerical value.","Use a suitable expansion to estimate a root or reciprocal near a convenient value."]
    ]},
    {ref:"4.2",skills:[
      ["I can find and use the nth term of a sequence.","Generate terms and identify a suitable formula from a given pattern."],
      ["I can work with a recurrence relation and interpret its behaviour.","Calculate later terms from a starting value and a recurrence rule."],
      ["I can judge whether a simple sequence is increasing, decreasing or periodic.","Explain how its terms change and whether a proposed limit is plausible."]
    ]},
    {ref:"4.3",skills:[
      ["I can translate between sigma notation and a finite sum.","Write a pattern in summation notation with correct limits."],
      ["I can use standard sum formulae to evaluate finite series.","Evaluate a sum involving powers of the summation index."]
    ]},
    {ref:"4.4",skills:[
      ["I can find the nth term and sum of an arithmetic progression.","Find how many payments are needed to reach a savings target."],
      ["I can use information about an arithmetic series to find missing parameters.","Determine the first term and common difference from two conditions."],
      ["I can prove the sum formula for an arithmetic progression.","Pair the terms from opposite ends to justify the formula for the first n terms."]
    ]},
    {ref:"4.5",skills:[
      ["I can find terms and finite sums of a geometric progression.","Find a geometric ratio and a specified partial sum."],
      ["I can identify when an infinite geometric sum exists and calculate it.","Explain why a proposed infinite sum is invalid if the ratio is too large."],
      ["I can prove the sum formula for a finite geometric progression.","Subtract the original sum from the sum multiplied by the common ratio."]
    ]},
    {ref:"4.6",skills:[
      ["I can model repeated additions or repeated proportional changes with a series.","Compare a fixed annual payment model with one that grows by a percentage."],
      ["I can evaluate how realistic a sequence or series model is.","Explain whether its long-term prediction is sensible in context."]
    ]}
  ]),
  makeTopic("P",5,"Trigonometry","Move between graphs, identities, geometry and periodic models; give complete, correctly restricted solutions.",[
    {ref:"5.1",skills:[
      ["I can use sine, cosine and tangent with angles beyond a right-angled triangle.","Identify sign and exact trigonometric values using the unit circle."],
      ["I can use the sine rule, cosine rule and triangle area formula.","Solve an ambiguous sine-rule problem and justify any second solution."],
      ["I can convert between degrees and radians.","Find an angle in radians before using an arc-length formula."],
      ["I can calculate arc length and sector area using radians.","Find the perimeter and area of a shape involving a circular sector."]
    ]},
    {ref:"5.2",skills:[
      ["I can use standard small-angle approximations correctly in radians.","Approximate a trigonometric expression when the angle tends to zero."],
      ["I can explain when a small-angle approximation is appropriate.","Judge whether a quoted approximation should be trusted for a given angle."]
    ]},
    {ref:"5.3",skills:[
      ["I can sketch sine, cosine and tangent graphs with their symmetries and periods.","Find the amplitude, period and phase shift of a trig graph."],
      ["I can recall exact trigonometric values and use them in equations.","Solve an equation in a stated interval without rounding exact solutions."],
      ["I can find all valid solutions of a trigonometric equation in a specified interval.","Avoid omitting solutions when a trig function repeats."]
    ]},
    {ref:"5.4",skills:[
      ["I can use secant, cosecant and cotangent and their graphs.","Rewrite an expression involving reciprocal trigonometric functions."],
      ["I can find and interpret principal values of inverse trigonometric functions.","Solve a trig equation while respecting the inverse function's principal range."]
    ]},
    {ref:"5.5",skills:[
      ["I can simplify trigonometric expressions using fundamental identities.","Rewrite an expression in terms of one trig function before solving."],
      ["I can use secant and cosecant identities to prove or solve equations.","Verify an identity and state where denominators are defined."]
    ]},
    {ref:"5.6",skills:[
      ["I can use compound-angle formulae to expand and simplify expressions.","Find an exact value of the sine or cosine of a sum of angles."],
      ["I can explain a geometrical proof of a compound-angle formula.","Construct an argument relating projections in a diagram to the sine or cosine addition formula."],
      ["I can apply double-angle identities in algebraic and trigonometric problems.","Rewrite a squared trig expression using a double angle."],
      ["I can rewrite a linear combination of sine and cosine as a single shifted function.","Express a sine-plus-cosine model in the form \\(R\\sin(\\theta+\\alpha)\\)."]
    ]},
    {ref:"5.7",skills:[
      ["I can solve equations involving compound or multiple angles.","Find every solution to a double-angle equation in a stated interval."],
      ["I can handle equations reducible to a quadratic in a trigonometric expression.","Solve for sine first, then identify all possible angles."]
    ]},
    {ref:"5.8",skills:[
      ["I can construct a clear proof of a trigonometric identity.","Start from one side and transform it without assuming the result."]
    ]},
    {ref:"5.9",skills:[
      ["I can fit and interpret a periodic model in a real context.","Find when a tide or daylight model exceeds a safety threshold."],
      ["I can connect trigonometry with geometry, mechanics or calculus.","Use a periodic position model to find velocity or another rate of change."]
    ]}
  ])
];
