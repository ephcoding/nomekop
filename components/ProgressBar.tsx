"use client";
import { Progress } from "react-daisyui";

export const ProgressBar = ({
  value,
  color,
}: {
  value: number;
  color: string;
}) => {
  return (
    <Progress
      className="w-2/4 m-auto bg-white"
      color={color}
      value={value / 100}
    />
  );
};
