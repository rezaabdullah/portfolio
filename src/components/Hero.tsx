import Image from "next/image";
import Button from "./ui/Button";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    // <div className="relative h-[calc(100vh-64px)] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
    // <div className="relative h-[calc(100vh-64px)]" id="#">
    <div className="relative h-dvh">
      {/* background image */}
      <Image
        src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="abdullah reza hero image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="max-w-7xl m-auto px-4 md:px-6 xl:px-8 flex flex-col justify-center items-center uppercase">
          <p className="text-base font-bold text-center xl:text-xl 2xl:text-3xl">
            Let&apos;s build great products,{" "}
            <span className="text-sky-600 underline underline-offset-2">
              together!
            </span>
          </p>
          <h1 className="py-4 text-3xl font-semibold leading-relaxed xs:text-center xs:leading-loose sm:text-4xl sm:leading-relaxed lg:text-5xl lg:leading-relaxed xl:text-6xl xl:leading-loose 2xl:text-8xl 2xl:leading-loose">
            Product Leader
            <br />
            Project Manager
            <br />
            AI/ML Specialist
          </h1>
          {/* CTA & icons */}
          <div className="py-4 flex gap-8 xl:gap-16">
            <Button label="contact me" path="contact"/>
            <div className="flex gap-4 items-center xl:gap-8">
              <Link href={"https://www.linkedin.com/in/airreza"}>
                <FaLinkedin className="text-3xl xs:text-4xl xl:text-6xl text-slate-700 hover:text-sky-600 hover:ease-in-out duration-300" />
              </Link>
              <Link href={"https://github.com/rezaabdullah"}>
                <FaGithubSquare className="text-3xl xs:text-4xl xl:text-6xl text-slate-700 hover:text-sky-600 hover:ease-in-out duration-300" />
              </Link>
              <Link href={"https://medium.com/@abdullahreza"}>
                <FaMedium className="text-3xl xs:text-4xl xl:text-6xl text-slate-700 hover:text-sky-600 hover:ease-in-out duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
