import React from "react";
import CanvasWithImage from "./CanvasWithImage.js";

const feedbackData = {
  Marks: 5,
  Feedback: [
    {
      Category: "Content Depth",
      Comment:
        "The answer addresses the significance and criticisms of the Anti-Defection Law but misses details on key reforms proposed by committees like the Law Commission.",
      Reference: {
        Page: 1,
        Coordinates: [
          [130, 230],
          [135, 460],
        ],
      },
    },
    {
      Category: "Conclusion",
      Comment:
        "The concluding sentence is vague; it could be sharper, focusing on specific reforms like improving the impartiality of the Speaker.",
      Reference: {
        Page: 2,
        Coordinates: [
          [112, 490],
          [188, 670],
        ],
      },
    },
    // {
    //   "Category": "Structure",
    //   "Comment": "The answer is well-organized into distinct sections (significance, criticisms, reforms), but transitions between sections could be smoother.",
    //   "Reference": {
    //     "Page": 1,
    //     "Coordinates": [
    //       [150, 200],
    //       [300, 250]
    //     ]
    //   }
    // },
    {
      Category: "Innovation",
      Comment:
        "Could have benefited from data/statistics or recent examples of defection cases to strengthen the argument.",
      Reference: {
        Page: 2,
        Coordinates: [
          [148, 580],
          [220, 660],
        ],
      },
    },
    {
      Category: "Language",
      Comment:
        "Mostly clear, but some minor grammatical errors (e.g., 'topping of' should be 'toppling of') affect readability.",
      Reference: {
        Page: 1,
        Coordinates: [
          [150, 540],
          [155, 700],
        ],
      },
    },
  ],
};

const App = () => {
  return (
    <div>
      <h1>Feedback Canvas</h1>
      <CanvasWithImage
        feedbackData={feedbackData}
        imageUrl={require("../src/Unevaluated_Q1_part1.jpg")}
      />
    </div>
  );
};

export default App;
