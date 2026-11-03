import {makeTopic} from "./specification-core.js";

export const statisticsTopics=[
  makeTopic("S",1,"Statistical sampling","Choose a sample wisely and understand how the sampling process affects the conclusions.",[
    {ref:"1.1",year:1,skills:[
      ["I can distinguish a population, sample, parameter and statistic.","Identify the population and sampling frame for a student travel survey."],
      ["I can compare a census with a sample and explain the trade-offs.","Recommend a census or sample given time, cost and reliability constraints."],
      ["I can explain and carry out simple random sampling.","Choose numbered individuals randomly, ignoring repeated selections."],
      ["I can calculate proportional allocations in stratified sampling.","Select numbers from two year groups in proportion to their sizes."],
      ["I can describe systematic, quota and opportunity sampling.","Recommend a method and explain how the participants would be selected."],
      ["I can compare methods and identify sampling bias or limitations.","Explain why a volunteer sample might not represent an entire school."],
      ["I can use a sample to make a cautious inference about a population.","Explain why two equally valid random samples might give different estimates."]
    ]}
  ]),
  makeTopic("S",2,"Data presentation and interpretation","Read, calculate and critique statistical displays, summary measures and data-based conclusions.",[
    {ref:"2.1",year:1,skills:[
      ["I can read frequency polygons, box plots and cumulative frequency diagrams.","Compare centre and spread between two groups using a provided diagram."],
      ["I can calculate and interpret histogram frequency density.","Find the number of observations in a class when its width and histogram height are known."],
      ["I can use grouped frequency information to estimate cumulative quantities.","Estimate a median or percentile from a grouped distribution."]
    ]},
    {ref:"2.2",year:1,skills:[
      ["I can interpret correlation on a scatter diagram without claiming causation.","Describe the direction and strength of association between two variables."],
      ["I can recognise explanatory and response variables.","Choose the relevant axis for a prediction from a regression line."],
      ["I can interpret a regression line and discuss interpolation versus extrapolation.","Explain why a prediction far outside the observed range is unreliable."],
      ["I can identify possible clusters or subgroups in bivariate data.","Explain why fitting one line to two distinct subpopulations may mislead."]
    ]},
    {ref:"2.3",year:1,skills:[
      ["I can calculate and interpret mean, median, mode and other measures of location.","Choose an appropriate average when a distribution contains outliers."],
      ["I can calculate range, interquartile range, variance and standard deviation.","Compare consistency of two samples using measures of spread."],
      ["I can calculate a standard deviation using summary statistics.","Use sums of values and squared values to calculate spread."],
      ["I can interpret the effect of coding and linear transformations on data.","Explain how adding a constant affects the mean and standard deviation."],
      ["I can estimate quartiles and percentiles using linear interpolation.","Estimate a grouped-data median, explaining the within-class assumption."]
    ]},
    {ref:"2.4",year:1,skills:[
      ["I can identify possible outliers using a supplied rule.","Use an interquartile-range rule to identify values that may be outliers."],
      ["I can recognise missing or erroneous data and suggest appropriate cleaning.","Identify why an impossible measurement should be checked before analysis."],
      ["I can choose or critique a data display in context.","Decide whether a histogram or box plot better supports a comparison."],
      ["I can draw careful conclusions from summary measures and diagrams.","Explain what the sample suggests, without overclaiming about the population."]
    ]}
  ]),
  makeTopic("S",3,"Probability","Combine events, use diagrams and conditional information, and check assumptions in probability models.",[
    {ref:"3.1",year:1,skills:[
      ["I can recognise mutually exclusive events and use the addition rule.","Calculate the chance of either of two disjoint events occurring."],
      ["I can test whether events are independent.","Check if the probability of two events together is the product of their individual probabilities."],
      ["I can use probability trees and Venn diagrams to represent events.","Find the probability of an overlap or union from a tree or Venn diagram."],
      ["I can interpret probability in discrete and continuous situations.","Explain why the area beneath a continuous probability curve represents probability."]
    ]},
    {ref:"3.2",year:2,skills:[
      ["I can calculate and interpret conditional probabilities.","Find the probability of an event given information about another event."],
      ["I can use Venn diagrams, two-way tables or trees for conditional events.","Find a missing conditional probability from a two-way table."],
      ["I can apply the conditional-probability formula and multiplication rule.","Use intersection and conditional information to determine an unknown probability."]
    ]},
    {ref:"3.3",year:2,skills:[
      ["I can evaluate assumptions such as fairness and independence in probability models.","Explain how a biased coin would change the probabilities in a proposed model."],
      ["I can refine a probability model when its assumptions do not fit the context.","Suggest what additional evidence would justify an independence assumption."]
    ]}
  ]),
  makeTopic("S",4,"Statistical distributions","Select a suitable probability distribution, calculate probabilities and interpret a model.",[
    {ref:"4.1",year:1,skills:[
      ["I can identify a simple discrete distribution and check that probabilities sum to one.","Find an unknown probability in a short distribution table."],
      ["I can recognise and model a discrete uniform distribution.","Explain why all outcomes of a fair die have equal probability."],
      ["I can decide when a binomial distribution is appropriate.","Check fixed trials, two outcomes, constant probability and independence."],
      ["I can calculate individual binomial probabilities using a calculator.","Find the probability of exactly k successes in n trials."],
      ["I can calculate cumulative and tail binomial probabilities.","Find the probability of at least k successes with the correct tail."]
    ]},
    {ref:"4.2",year:2,skills:[
      ["I can recognise the Normal distribution and interpret its parameters.","Identify the centre and spread of a symmetric bell-shaped model."],
      ["I can calculate Normal probabilities using standardisation or a calculator.","Find the probability of a value exceeding a specified threshold."],
      ["I can find an unknown Normal parameter from a probability statement.","Solve for the mean or standard deviation given quantile information."],
      ["I can use a Normal model to approximate a binomial model where appropriate.","Check whether a Normal approximation is reasonable."],
      ["I can apply a continuity correction when approximating discrete probabilities.","Translate an integer-valued binomial event into Normal boundaries."]
    ]},
    {ref:"4.3",year:2,skills:[
      ["I can compare binomial and Normal models and choose one with reasons.","Decide which distribution best describes the process described."],
      ["I can evaluate whether a chosen distribution is an appropriate model.","Explain why dependent trials or skewed data undermine a proposed distribution."]
    ]}
  ]),
  makeTopic("S",5,"Statistical hypothesis testing","Understand hypothesis tests and reach cautious conclusions from binomial, Normal and correlation evidence.",[
    {ref:"5.1",year:1,skills:[
      ["I can state null and alternative hypotheses for a binomial proportion.","Write hypotheses using a population probability, not a sample result."],
      ["I can interpret significance level, critical region, test statistic and p-value.","Explain what a 5% significance level means in a test."],
      ["I can choose a one-tailed or two-tailed test and justify its direction.","Set up a test for evidence that a population probability has changed."],
      ["I can describe the meaning of rejecting or not rejecting a null hypothesis.","Give a conclusion that correctly reflects limited statistical evidence."]
    ]},
    {ref:"5.2",year:1,skills:[
      ["I can carry out a one-tailed binomial hypothesis test.","Find a p-value or critical region and decide whether results are significant."],
      ["I can carry out a two-tailed binomial hypothesis test.","Check both tails using appropriate critical values."],
      ["I can interpret the statistical decision in the original context.","Explain what evidence a sample gives about a claimed population proportion."]
    ]},
    {ref:"5.1",year:2,skills:[
      ["I can interpret product moment correlation coefficients and their limitations.","Explain the direction and strength of a calculated correlation coefficient."],
      ["I can test a claim about population correlation using supplied critical information.","Use a given critical value or p-value to assess evidence that correlation is nonzero."]
    ]},
    {ref:"5.3",year:2,skills:[
      ["I can state hypotheses about the mean of a Normal population.","Set up a claim about an unknown population mean."],
      ["I can carry out a hypothesis test for a Normal mean with known or assumed variance.","Standardise a sample mean and calculate the relevant tail probability."],
      ["I can interpret a Normal-mean test and its assumptions in context.","Explain whether there is sufficient evidence to challenge a manufacturer's claim."]
    ]}
  ])
];
