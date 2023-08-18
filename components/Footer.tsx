"use client";
import { Footer as DaisyFooter } from "react-daisyui";
import NextImage from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <DaisyFooter className="bg-blue-500 p-5">
      <div
        style={{ position: "relative", width: "200px", height: "100px" }}
        className="place-self-center"
      >
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
        <div className="flex items-center gap-3">
          <div style={{ position: "relative", width: "28px", height: "28px" }}>
            <Link href="https://ephraimsmith.dev/projects">
              <NextImage
                src="/ephcoding-150x150-white.png"
                fill
                objectFit="contain"
                priority
              />
            </Link>
          </div>
          <Link href="https://github.com/ephcoding">
            <FaGithub size={30} />
          </Link>
          <Link href="https://twitter.com/ephraimsmithdev">
            <FaTwitter size={30} />
          </Link>
          <Link href="https://instagram.com/ephraimsmithdev">
            <FaInstagram size={30} />
          </Link>
          <Link href="https://linkedin.com/in/ephraimsmithdev">
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>
    </DaisyFooter>
  );
};

const Link = ({ children, href }) => (
  <a target="_blank" className="link link-hover" href={href}>
    {children}
  </a>
);
