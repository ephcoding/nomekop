"use client";
import { Progress, ProgressProps } from "react-daisyui";

export const ProgressBar = ({ value, color }: any) => {
  return (
    <Progress
      className="w-2/4 m-auto bg-white"
      color={color}
      value={value / 100}
    />
  );
};
