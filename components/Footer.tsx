"use client";
import { Footer as DaisyFooter } from "react-daisyui";
import NextImage from "next/image";

export const Footer = () => {
	return (
		<DaisyFooter className='bg-blue-500 p-5'>
			<div style={{ position: "relative", width: "100px", height: "50px" }}>
				<NextImage
					alt='PokExplore logo'
					src='/pokexplore-500x205-white.png'
					fill
					content='contain'
				/>
			</div>
			<div>
				<DaisyFooter.Title>PokÉxplore App</DaisyFooter.Title>
				<a className='link link-hover'>Feedback</a>
				<a className='link link-hover'>GitHub Repo</a>
			</div>
			<div>
				<DaisyFooter.Title>Ephraim Smith</DaisyFooter.Title>
				<a className='link link-hover'>ephraimsmith.dev</a>
				<a className='link link-hover'>twitter</a>
				<a className='link link-hover'>github</a>
				<a className='link link-hover'>linkedin</a>
				<a className='link link-hover'>instagram</a>
			</div>
		</DaisyFooter>
	);
};
