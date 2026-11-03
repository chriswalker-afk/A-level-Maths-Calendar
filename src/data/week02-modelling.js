export const week02Modelling = [
  {
    "id": "W02-M1",
    "section": "M",
    "title": "A route around a protected circle",
    "marks": 12,
    "minutes": 32,
    "ao": {
    "AO2": 2,
    "AO3": 10
  },
    "topics": [
      "circles",
      "lines",
      "modelling",
      "distance",
      "constraints"
    ],
    "stem": "A nature reserve occupies the interior of the circle \\(x^2+y^2=9\\) on a coordinate map measured in kilometres. A road is proposed from \\(A(-8,0)\\) to \\(B(8,0)\\), via one point \\(T(0,h)\\), where \\(h>0\\). The road consists of the straight segments \\(AT\\) and \\(TB\\). Travelling exactly along the circle's boundary is permitted, but entering its interior is forbidden.",
    "parts": [
      [
        "Show that the total length of the proposed route is \\(L(h)=2\\sqrt{64+h^2}\\) kilometres.",
        2
      ],
      [
        "Show that the perpendicular distance from the origin to the line \\(AT\\) is \\(d=\\dfrac{8h}{\\sqrt{64+h^2}}\\).",
        3
      ],
      [
        "Find the smallest possible value of \\(h\\) for which both road segments avoid the reserve's interior. Give your answer exactly.",
        4
      ],
      [
        "Find the minimum possible length of this two-segment route, and hence the extra distance compared with the direct \\(AB\\) route. Give both to 2 decimal places.",
        3
      ]
    ],
    "hint": "The forbidden region has radius \\(3\\). To obtain the perpendicular distance to \\(AT\\), calculate the area of triangle \\(OAT\\) in two ways. The shortest admissible route touches the circle.",
    "steps": [
      "\\(AT=\\sqrt{(0+8)^2+(h-0)^2}=\\sqrt{64+h^2}\\). By symmetry \\(TB=AT\\), so \\(L(h)=2\\sqrt{64+h^2}\\). [2]",
      "Triangle \\(OAT\\) has area \\(\\tfrac12(8)h=4h\\) using base \\(OA\\). Taking \\(AT\\) as the base instead gives \\(\\tfrac12\\sqrt{64+h^2}\\,d=4h\\), hence \\(d=\\dfrac{8h}{\\sqrt{64+h^2}}\\). The foot of this perpendicular lies on \\(AT\\) for \\(h>0\\). [3]",
      "The line segment is feasible when \\(d\\ge3\\) (and likewise by symmetry for \\(TB\\)). Thus \\(\\dfrac{8h}{\\sqrt{64+h^2}}\\ge3\\). Squaring positive quantities gives \\(64h^2\\ge9(64+h^2)\\) or \\(55h^2\\ge576\\). Because \\(h>0\\), \\(h\\ge\\dfrac{24}{\\sqrt{55}}\\). Equality gives a route tangent to the boundary. [4]",
      "Since \\(L(h)\\) increases for \\(h>0\\), the minimum occurs at \\(h=\\dfrac{24}{\\sqrt{55}}\\). \\(L_{\\min}=2\\sqrt{64+\\frac{576}{55}}=\\dfrac{128}{\\sqrt{55}}\\approx17.26\\) km. The straight route is \\(AB=16\\) km, so the extra distance is \\(\\dfrac{128}{\\sqrt{55}}-16\\approx1.26\\) km. [3]"
    ],
    "answer": "\\(h_{\\min}=\\dfrac{24}{\\sqrt{55}}\\approx3.24\\) km; shortest admissible route \\(\\dfrac{128}{\\sqrt{55}}\\approx17.26\\) km, which is \\(1.26\\) km longer than the direct route.",
    "misconception": "A waypoint outside the protected circle does not guarantee that both connecting road segments miss the interior. Check the closest approach of each segment.",
    "reflection": "What changes if road construction must remain at least 500 m outside the boundary?"
  },
  {
    "id": "W02-M2",
    "section": "M",
    "title": "A rectangular garden inside a circular site",
    "marks": 14,
    "minutes": 36,
    "ao": {
    "AO2": 2,
    "AO3": 12
  },
    "topics": [
      "circles",
      "differentiation",
      "geometry",
      "optimization",
      "constraints"
    ],
    "stem": "A landscape architect designs an axis-aligned rectangular garden centred at the origin. Its four corners lie on the circular boundary \\(x^2+y^2=25\\), with dimensions measured in metres. The top-right corner is \\(P(x,y)\\), where \\(x>0\\) and \\(y>0\\); hence the full width is \\(2x\\) and the full height is \\(2y\\). A service entrance requires the full width to be at least \\(8\\) m. At the final design, a straight access path must be tangent to the circle at \\(P\\) and extended until it meets the positive \\(x\\)-axis.",
    "parts": [
      [
        "Write \\(y\\) in terms of \\(x\\) and hence show that the garden's area is \\(A(x)=4x\\sqrt{25-x^2}\\).",
        2
      ],
      [
        "State the permitted interval for \\(x\\) under the width constraint, explaining why the upper endpoint is excluded.",
        3
      ],
      [
        "Find the dimensions that would maximise area if there were no minimum-width restriction, and find that area.",
        4
      ],
      [
        "Determine the largest possible area with the width restriction. Compare this area with the unrestricted maximum as a percentage.",
        3
      ],
      [
        "Find the equation of the access-path tangent at the optimal permitted corner \\(P\\), and where it meets the positive \\(x\\)-axis.",
        2
      ]
    ],
    "hint": "The corner lies on the circle, so \\(y=\\sqrt{25-x^2}\\). Differentiate \\(4x\\sqrt{25-x^2}\\). Check whether the unrestricted stationary point satisfies \\(x\\ge4\\).",
    "steps": [
      "Since \\(x^2+y^2=25\\) and \\(y>0\\), \\(y=\\sqrt{25-x^2}\\). Area = width times height \\(A=(2x)(2y)=4x\\sqrt{25-x^2}\\). [2]",
      "Width \\(2x\\ge8\\) gives \\(x\\ge4\\). The rectangle must have positive height, so \\(25-x^2>0\\), giving \\(x<5\\). Thus \\(4\\le x<5\\) for a feasible design. [3]",
      "Differentiate: \\(A'(x)=4\\sqrt{25-x^2}-\\dfrac{4x^2}{\\sqrt{25-x^2}}=\\dfrac{4(25-2x^2)}{\\sqrt{25-x^2}}\\). The unrestricted positive stationary point is \\(x=\\frac5{\\sqrt2}\\), with \\(y=\\frac5{\\sqrt2}\\). The square has width and height \\(5\\sqrt2\\) m and area \\(A=50\\) m²; the area tends to zero at both non-degenerate boundary limits. [4]",
      "Because \\(\\tfrac5{\\sqrt2}<4\\), the unrestricted optimum violates the required width. For \\(4\\le x<5\\), \\(25-2x^2<0\\) so \\(A'(x)<0\\). The permitted maximum is at \\(x=4\\), \\(y=3\\): area \\(A=4(4)(3)=48\\) m². Loss \\(\\frac{50-48}{50}\\times100\\%=4\\%\\). [3]",
      "The corner is \\(P(4,3)\\). The radius \\(OP\\) has gradient \\(\\tfrac34\\), so the tangent gradient is \\(-\\tfrac43\\). Hence \\(y-3=-\\tfrac43(x-4)\\) or \\(4x+3y=25\\); at \\(y=0\\) it meets the axis at \\((\\tfrac{25}{4},0)\\). [2]"
    ],
    "answer": "Maximum permitted garden area \\(48\\) m² with dimensions \\(8\\) m by \\(6\\) m, \\(4\\%\\) below the unrestricted \\(50\\) m². Tangent \\(4x+3y=25\\), intercept \\((\\tfrac{25}{4},0)\\).",
    "misconception": "An unrestricted stationary point is not automatically the best feasible design. Check every domain and physical restriction before stating a maximum.",
    "reflection": "Would the optimal permitted area change if the entrance had to be at least 9 m wide? Explain using your derivative."
  }
];
