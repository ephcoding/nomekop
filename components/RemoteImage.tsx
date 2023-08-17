"use client";

import NextImage from "next/image";

type RemoteImageProps = {
	imageUrl: string;
	alt: string;
};

export const RemoteImage = ({ imageUrl, alt }: RemoteImageProps) => {
	return (
		<div
			className='m-4'
			style={{ position: "relative", width: "300px", height: "300px" }}
		>
			<NextImage
				alt={alt}
				src={imageUrl}
				priority
				fill
				style={{ objectFit: "contain" }}
			/>
		</div>
	);
};
