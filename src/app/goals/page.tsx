"use client";
import React from "react";

interface Goal {
  title: string;
  selected: boolean;
}

const goals: Goal[] = [
  { title: "Weight Loss", selected: false },
  { title: "Muscle Gain", selected: false },
  { title: "Flexibility and Mobility", selected: false },
  { title: "General Fitness", selected: false },
  { title: "Event-specific training", selected: false },
  { title: "Mindfulness and Mental Health", selected: false },
];

function Goals() {
  const [selectedGoals, setSelectedGoals] = React.useState<string[]>([]);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold text-center mb-6">
        What are your goals?
      </h1>

      <div className="p-10 flex-col flex gap-5">
        {goals.map((goal, idx) => {
          return (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-md p-3 h-15 flex justify-between"
            >
              <h1>{goal.title}</h1>
              <input type="checkbox" name="" id="" />
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-primary bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-8"
      >
        Confirm
      </button>
    </div>
  );
}

export default Goals;
