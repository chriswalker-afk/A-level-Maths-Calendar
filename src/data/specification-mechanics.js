import {makeTopic} from "./specification-core.js";

export const mechanicsTopics=[
  makeTopic("M",6,"Quantities and units in mechanics","Use consistent units, identify vector and scalar quantities, and state the assumptions behind a model.",[
    {ref:"6.1",year:1,skills:[
      ["I can identify length, mass and time as fundamental SI quantities.","Convert given measurements into consistent metres, kilograms and seconds."],
      ["I can recognise the units for speed, velocity, acceleration, force and weight.","Explain why a proposed numerical answer has the wrong physical units."],
      ["I can convert between common compound units.","Convert a speed given in kilometres per hour to metres per second."],
      ["I can distinguish scalars from vectors in a mechanical model.","Explain why two equal speeds can correspond to different velocities."],
      ["I can identify standard modelling assumptions used in particle mechanics.","Explain what is being ignored when an object is modelled as a particle."]
    ]},
    {ref:"6.1",year:2,skills:[
      ["I can use the unit of a moment and interpret what it measures.","Express the turning effect of a force in newton metres."]
    ]}
  ]),
  makeTopic("M",7,"Kinematics","Describe motion with graphs, equations, vectors and calculus, including projectiles in Year 2.",[
    {ref:"7.1",year:1,skills:[
      ["I can distinguish position, displacement, distance, speed, velocity and acceleration.","Explain why distance can increase when displacement returns to zero."],
      ["I can choose positive directions and interpret negative velocity or acceleration.","Describe a moving object's direction from the signs of its velocity and acceleration."]
    ]},
    {ref:"7.2",year:1,skills:[
      ["I can read position–time and velocity–time graphs correctly.","Find velocity from a displacement–time gradient."],
      ["I can use area under velocity–time graphs to calculate displacement.","Distinguish signed displacement from total distance travelled."],
      ["I can combine graphical motion information over several time intervals.","Sketch and interpret a piecewise velocity–time journey."]
    ]},
    {ref:"7.3",year:1,skills:[
      ["I can use and derive equations for constant acceleration in one dimension.","Choose a suitable SUVAT equation for a vehicle accelerating uniformly."],
      ["I can solve vertical motion problems with an appropriate gravity sign.","Find the greatest height and total time for an object thrown vertically."],
      ["I can link consecutive motion stages with consistent initial and final values.","Analyse an object which accelerates and then slows down."],
      ["I can use vector components to describe constant acceleration in two dimensions.","Solve a constant-acceleration problem using horizontal and vertical vector components."]
    ]},
    {ref:"7.4",year:1,skills:[
      ["I can use differentiation to obtain velocity and acceleration from displacement.","Find the times when a particle changes its direction of motion."],
      ["I can integrate acceleration to obtain velocity and displacement, using conditions.","Determine a position function from an acceleration function and initial values."],
      ["I can calculate total distance from a variable-velocity model.","Split the time interval where velocity changes sign before integrating."]
    ]},
    {ref:"7.4",year:2,skills:[
      ["I can differentiate and integrate vector position, velocity and acceleration functions.","Find the speed of a particle with time-dependent horizontal and vertical components."]
    ]},
    {ref:"7.5",year:2,skills:[
      ["I can model a projectile with independent horizontal and vertical motion.","Find the position and velocity of a projectile after a given time."],
      ["I can derive or use time of flight, range and maximum height.","Find the angle needed for a projectile to reach a target."],
      ["I can determine the Cartesian equation of a projectile's trajectory.","Eliminate time from horizontal and vertical position equations."],
      ["I can evaluate projectile assumptions, including neglected resistance.","Explain how air resistance would affect a prediction."]
    ]}
  ]),
  makeTopic("M",8,"Forces and Newton's laws","Draw force diagrams, apply Newton's laws, handle connected particles and extend to friction and 2D motion.",[
    {ref:"8.1",year:1,skills:[
      ["I can identify weight, normal reaction, tension, thrust and resistance on a force diagram.","Draw all external forces acting on a moving particle."],
      ["I can apply Newton's first law to equilibrium or constant-velocity motion.","Explain why a stationary body has zero resultant force."]
    ]},
    {ref:"8.2",year:1,skills:[
      ["I can apply Newton's second law with a consistent positive direction.","Solve a straight-line problem using the resultant force and mass."],
      ["I can resolve simple forces into two perpendicular directions.","Calculate acceleration when forces are provided in vector components."]
    ]},
    {ref:"8.3",year:1,skills:[
      ["I can use weight and the specified value of gravitational acceleration.","Find the force due to gravity on a particle of known mass."],
      ["I can choose appropriate gravitational modelling assumptions.","Explain why a constant gravitational acceleration can be used for a short vertical journey."]
    ]},
    {ref:"8.4",year:1,skills:[
      ["I can apply Newton's third law and identify action–reaction pairs.","Distinguish a particle's weight from the normal reaction of a surface."],
      ["I can solve connected-particle problems with light strings and smooth pulleys.","Find a shared acceleration and string tension in a two-particle system."],
      ["I can analyse a particle acted on by perpendicular forces.","Use components to find a reaction force or a resultant in equilibrium."]
    ]},
    {ref:"8.2",year:2,skills:[
      ["I can resolve forces on an inclined plane and apply Newton's second law.","Find acceleration when a particle travels up or down a slope."]
    ]},
    {ref:"8.4",year:2,skills:[
      ["I can solve connected-particle problems involving more demanding directions.","Analyse a pulley system when one particle moves on an inclined plane."],
      ["I can apply equilibrium conditions when several coplanar forces act.","Find an unknown force needed to keep a particle in static equilibrium."]
    ]},
    {ref:"8.5",year:2,skills:[
      ["I can combine several forces in a plane using vectors or components.","Find the size and direction of the resultant of non-parallel forces."],
      ["I can use a resultant force to model two-dimensional dynamics.","Calculate an acceleration vector and interpret its direction."]
    ]},
    {ref:"8.6",year:2,skills:[
      ["I can use the friction model with the coefficient of friction and normal reaction.","Find a friction force for a particle sliding on a rough plane."],
      ["I can distinguish moving friction from friction in equilibrium.","Use the correct inequality or equality for limiting friction."],
      ["I can solve equilibrium and motion problems involving rough surfaces.","Find a minimum applied force or a range for a coefficient of friction."]
    ]}
  ]),
  makeTopic("M",9,"Moments","Analyse the turning effect of forces and equilibrium of rigid bodies; this is Year 2 Applied content.",[
    {ref:"9.1",year:2,skills:[
      ["I can calculate a moment about a point using a perpendicular distance.","Find the turning effect of a force acting at an angle to a rod."],
      ["I can choose a sensible pivot and form a moment equation.","Take moments about a support to eliminate an unknown reaction."],
      ["I can use force and moment equilibrium together for a rigid body.","Find support reactions for a uniform beam holding a load."],
      ["I can identify a centre of mass in simple models and use it in moments.","Include the beam's own weight at the correct position."],
      ["I can solve simple tilting or toppling conditions.","Find when the contact reaction at one end becomes zero."],
      ["I can analyse rigid bodies acted on by non-parallel coplanar forces.","Solve an equilibrium problem involving a ladder or angled support."],
      ["I can discuss assumptions such as uniformity and negligible thickness.","Explain how a different mass distribution could change the moment model."]
    ]}
  ])
];
