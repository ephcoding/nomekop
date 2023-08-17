"use client";
import { Progress } from "react-daisyui";

export const ProgressBar = ({ value }: { value: number }) => {
	return <Progress className='w-2/4 m-auto' value={value / 100} />;
};
