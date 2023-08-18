"use client";
import { Footer as DaisyFooter } from "react-daisyui";
import NextImage from "next/image";

export const Footer = () => {
  return (
    <DaisyFooter className="bg-blue-500 p-5">
      <div style={{ position: "relative", width: "100px", height: "50px" }}>
        <NextImage
          alt="PokExplore logo"
          src="/pokexplore-500x205-white.png"
          fill
          content="contain"
        />
      </div>
      <div>
        <DaisyFooter.Title>PokÉxplore App</DaisyFooter.Title>
        <Link href="mailto:ephraimjsmith@gmail.com">Feedback</Link>
        <Link href="https://github.com/ephcoding/pokexplore">GitHub Repo</Link>
      </div>
      <div>
        <DaisyFooter.Title>Ephraim Smith</DaisyFooter.Title>
        <Link href="https://ephraimsmith.dev/projects">ephraimsmith.dev</Link>
        <Link href="https://twitter.com/ephraimsmithdev">twitter</Link>
        <Link href="https://github.com/ephcoding">GitHub</Link>
        <Link href="https://linkedin.com/in/ephraimsmithdev">LinkedIn</Link>
        <Link href="https://instagram.com/ephraimsmithdev">Instagram</Link>
      </div>
    </DaisyFooter>
  );
};

const Link = ({ children, href }) => (
  <a target="_blank" className="link link-hover" href={href}>
    {children}
  </a>
);
