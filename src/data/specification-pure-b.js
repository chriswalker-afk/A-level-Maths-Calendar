import {makeTopic} from "./specification-core.js";

export const pureTopicsB=[
  makeTopic("P",6,"Exponentials and logarithms","Use powers and logarithms to solve equations, fit data, and evaluate models of growth and decay.",[
    {ref:"6.1",skills:[
      ["I can sketch and interpret exponential graphs for different bases.","Compare growth and decay curves, including a translated exponential."],
      ["I can identify the intercepts, domain, range and asymptotes of an exponential model.","Explain why a model approaches a limiting value but does not reach it."]
    ]},
    {ref:"6.2",skills:[
      ["I can differentiate an exponential expression and recognise proportional growth.","Show why the rate of change of an exponential model is proportional to the amount present."]
    ]},
    {ref:"6.3",skills:[
      ["I can use logarithms as inverse functions of exponentials.","Solve an exponential equation using a natural logarithm."],
      ["I can sketch logarithmic curves and state valid inputs.","Identify a logarithm's vertical asymptote and explain the restriction on its argument."]
    ]},
    {ref:"6.4",skills:[
      ["I can combine and expand logarithmic expressions using log laws.","Rearrange an equation involving sums and differences of logs."],
      ["I can solve logarithmic equations while rejecting invalid roots.","Check a solution does not make a log argument zero or negative."]
    ]},
    {ref:"6.5",skills:[
      ["I can solve equations with exponential expressions on both sides.","Find a time when a growth process reaches a stated amount."],
      ["I can use change of base when logs are given in different bases.","Rearrange an equation before evaluating a logarithm numerically."]
    ]},
    {ref:"6.6",skills:[
      ["I can linearise a power-law model using logarithms.","Use a log–log graph to estimate both coefficients of a power relationship."],
      ["I can linearise an exponential model and interpret its gradient and intercept.","Use a semi-log graph to predict a parameter in an exponential relationship."]
    ]},
    {ref:"6.7",skills:[
      ["I can construct and solve exponential growth or decay models.","Find the half-life or doubling time from a model."],
      ["I can interpret parameters, initial conditions and long-term behaviour.","Find the initial amount and assess whether a long-term prediction is realistic."],
      ["I can explain and evaluate limitations of an exponential model.","Discuss why constant-percentage growth may not hold for a real population."]
    ]}
  ]),
  makeTopic("P",7,"Differentiation","Differentiate complex functions, analyse curve behaviour and translate rates of change into conclusions.",[
    {ref:"7.1",skills:[
      ["I can explain a derivative as a gradient and a rate of change.","Interpret a derivative in the context of changing distance, price or volume."],
      ["I can use first principles to differentiate powers and basic trigonometric functions.","Derive the gradient function of a quadratic or demonstrate a first-principles argument for sine or cosine."],
      ["I can connect the graph of a function with the graph of its derivative.","Sketch a derivative using stationary points and signs of gradient."],
      ["I can use a second derivative to discuss curvature and inflection.","Identify concave/convex intervals and explain a possible inflection point."]
    ]},
    {ref:"7.2",skills:[
      ["I can differentiate powers with rational, positive or negative indices.","Differentiate a reciprocal square root by rewriting it as a power."],
      ["I can differentiate exponential functions, including those with a linear argument.","Differentiate a growth model such as an exponential with a constant multiplier."],
      ["I can differentiate logarithmic and trigonometric functions.","Find a derivative involving the natural logarithm, tangent or sine."]
    ]},
    {ref:"7.3",skills:[
      ["I can find the equation of a tangent or normal at a given point.","Find a parameter so a tangent has a specified gradient."],
      ["I can solve stationary-point equations and classify the resulting points.","Use a first- or second-derivative test to justify a maximum or minimum."],
      ["I can find intervals where a curve is increasing or decreasing.","Solve a derivative inequality and explain what it means for the graph."],
      ["I can use differentiation to optimise a quantity under constraints.","Maximise area or profit, checking endpoints or domain restrictions."]
    ]},
    {ref:"7.4",skills:[
      ["I can apply the chain rule to functions inside other functions.","Differentiate a power of a quadratic expression."],
      ["I can apply the product rule to a product of different function types.","Differentiate a product of a polynomial and an exponential."],
      ["I can apply the quotient rule when a function appears in a denominator.","Differentiate a rational expression and simplify the result."],
      ["I can combine chain, product and quotient rules in one calculation.","Find stationary points of a function combining two differentiation rules."],
      ["I can use connected rates of change in models.","Relate the rate of change of a volume to the rate of change of a length."]
    ]},
    {ref:"7.5",skills:[
      ["I can differentiate implicitly and find tangents to an implicit curve.","Find the tangent at a point on a relation not written as y = f(x)."],
      ["I can differentiate parametric curves using the chain rule.","Use derivatives with respect to the parameter to calculate a gradient."]
    ]},
    {ref:"7.6",skills:[
      ["I can construct a differential equation from a proportional rate statement.","Write a differential equation when growth is proportional to the current amount."],
      ["I can interpret what a differential equation says about a model.","Explain the meaning of a positive rate and a changing parameter."]
    ]}
  ]),
  makeTopic("P",8,"Integration","Recover functions, find areas and volumes, and model change by selecting the right integration technique.",[
    {ref:"8.1",skills:[
      ["I can explain integration as the reverse of differentiation.","Recover a function from its derivative, including a constant of integration."],
      ["I can use the fundamental theorem to evaluate a definite integral.","Evaluate a definite integral using a valid antiderivative and limits."]
    ]},
    {ref:"8.2",skills:[
      ["I can integrate powers of x, including fractional and negative powers where valid.","Integrate an expression after expanding or writing it in index form."],
      ["I can integrate standard exponential, logarithmic-related and trigonometric forms.","Integrate expressions involving sine, cosine, tangent or an exponential."],
      ["I can find a particular function using a condition on its graph.","Use a gradient function and a known point to find a curve equation."],
      ["I can use trigonometric identities to turn an integrand into an integrable form.","Rewrite a squared sine or tangent function before integrating."]
    ]},
    {ref:"8.3",skills:[
      ["I can calculate a signed definite integral and distinguish it from geometric area.","Find the total area between a curve and the axis when it crosses the axis."],
      ["I can find the area between two curves using their intersections.","Determine which curve is above the other and set the correct limits."],
      ["I can find an area under a parametric curve.","Rewrite a parametric area integral in terms of the parameter."]
    ]},
    {ref:"8.4",skills:[
      ["I can interpret a definite integral as a limit of sums of narrow strips.","Explain why the sum of narrow rectangle areas approaches an exact integral as the width tends to zero."]
    ]},
    {ref:"8.5",skills:[
      ["I can recognise an integrand requiring reverse chain rule or substitution.","Choose a substitution that turns a complicated integral into a standard form."],
      ["I can carry out integration by substitution for indefinite and definite integrals.","Change the limits properly when a definite integral is transformed."],
      ["I can use integration by parts and decide which factor to differentiate.","Integrate a product involving a polynomial and an exponential."],
      ["I can repeat integration by parts when the original integral returns.","Solve an equation for an integral involving an exponential and sine."]
    ]},
    {ref:"8.6",skills:[
      ["I can integrate rational functions after decomposing into partial fractions.","Integrate a proper rational expression with linear denominator factors."],
      ["I can select partial fractions as part of a longer integration problem.","Convert an improper rational function by division before integrating."]
    ]},
    {ref:"8.7",skills:[
      ["I can solve a first-order differential equation by separating variables.","Integrate both sides and find the general solution."],
      ["I can determine a particular solution using an initial condition.","Find a constant from an initial amount and state a valid domain."]
    ]},
    {ref:"8.8",skills:[
      ["I can interpret and evaluate the behaviour of a differential-equation model.","Explain the long-term prediction and its physical limitations."],
      ["I can connect a differential equation with kinematics or growth models.","Link the mathematical solution to position, speed or a changing population."]
    ]}
  ]),
  makeTopic("P",9,"Numerical methods","Use approximation deliberately and understand when a numerical method succeeds or fails.",[
    {ref:"9.1",skills:[
      ["I can locate a root by finding a sign change over an interval.","Show a continuous function has a root between two supplied decimal values."],
      ["I can explain why a sign-change check can miss or misidentify a root.","Discuss an interval containing an even number of roots or a discontinuity."]
    ]},
    {ref:"9.2",skills:[
      ["I can generate values from a fixed-point iteration.","Apply a recurrence to approximate the solution of an equation."],
      ["I can sketch cobweb or staircase diagrams to interpret convergence.","Explain graphically whether successive iterates approach a fixed point."]
    ]},
    {ref:"9.3",skills:[
      ["I can carry out Newton–Raphson iteration with the correct derivative.","Use a starting value to find a root to a required accuracy."],
      ["I can compare numerical iterations and their possible failure modes.","Explain why a small derivative or poor starting value may give unreliable steps."]
    ]},
    {ref:"9.4",skills:[
      ["I can use the trapezium rule to approximate a definite integral.","Estimate area from equally spaced ordinates or a table of values."],
      ["I can assess whether a numerical integration estimate is an overestimate or underestimate.","Use the shape of a curve to justify the likely direction of the error."],
      ["I can use two numerical estimates to give bounds on a required area.","Determine reasonable upper and lower limits for an area from numerical strips."]
    ]},
    {ref:"9.5",skills:[
      ["I can select a numerical method to answer an equation arising in context.","Explain why a numerical iteration is appropriate when an analytic solution is unavailable."],
      ["I can interpret the accuracy and limitations of a numerical answer in a model.","State a suitably rounded solution with units and assess how much confidence to place in it."]
    ]}
  ]),
  makeTopic("P",10,"Vectors","Represent magnitude and direction accurately, and use vector reasoning to prove geometry and solve problems.",[
    {ref:"10.1",skills:[
      ["I can distinguish a vector from a scalar and use correct vector notation.","Identify displacement as a vector and distance as a scalar."],
      ["I can represent 2D and 3D vectors in component form.","Describe a vector using horizontal, vertical and third-dimensional components."]
    ]},
    {ref:"10.2",skills:[
      ["I can calculate a vector's magnitude and direction.","Find the length and angle of a vector given its components."],
      ["I can find a unit vector and convert between representations.","Produce a vector of length one in a specified direction."]
    ]},
    {ref:"10.3",skills:[
      ["I can add and subtract vectors and multiply by scalars.","Find a resultant displacement from several journeys."],
      ["I can explain parallelism and simple vector relationships.","Show two line segments are parallel using scalar multiples."]
    ]},
    {ref:"10.4",skills:[
      ["I can use position vectors to find displacements between points.","Express the vector from A to B using their position vectors."],
      ["I can find the distance between points represented by 2D or 3D vectors.","Determine the length of a line segment in three dimensions."]
    ]},
    {ref:"10.5",skills:[
      ["I can construct vector proofs involving points, ratios and geometric shapes.","Find the position of a fourth vertex and justify a parallelogram property."],
      ["I can use vectors to model physical quantities such as force or velocity.","Combine vector magnitudes and directions to determine a resultant."]
    ]}
  ])
];
