import React from "react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { MdManageAccounts, MdOutlineLibraryAddCheck } from "react-icons/md";
import Image from "next/image";

const Skills = () => {
  // list of skills
  let skills = [
    "AWS",
    "Github",
    "Mongo DB",
    "Firebase",
    "NextJS",
    "Javascript",
    "NodeJS",
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Django",
    "Flask",
    "Python",
    "scikit-learn",
    "Apache Spark",
    "Tensorflow",
  ];

  return (
    <div id="skills">
      <Section className="bg-slate-200">
        <h2 className="tracking-wide text-2xl md:text-3xl lg:text-4xl underline underline-offset-4 decoration-sky-600 font-semibold">
          Core Competencies
        </h2>
        <h3 className="text-xl font-medium pt-3 md:text-2xl md:pt-4 tracking-wide">
          Design | Build | Iterate | Lead
        </h3>
        {/* competency */}
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-8">
          <div className="p-4 bg-slate-100 shadow-xl rounded-lg hover:scale-105 ease-in-out duration-300">
            <h4 className="text-xl font-semibold">Product Management</h4>
            <p className="mt-4">
              Proven in end-to-end product development, architecting AI
              solutions, driving global adoption, executing successful
              strategies, and enhancing user engagement.
            </p>
          </div>
          <div className="p-4 bg-slate-100 shadow-xl rounded-lg hover:scale-105 ease-in-out duration-300">
            <h4 className="text-xl font-semibold">Data Science</h4>
            <p className="mt-4">
              Specialized in AI/ML models, led digital transformations,
              leveraged data insights, and boosted revenue through
              industry-specific frameworks.
            </p>
          </div>
          <div className="p-4 bg-slate-100 shadow-xl rounded-lg hover:scale-105 ease-in-out duration-300">
            <h4 className="text-xl font-semibold">Strategy & Leadership</h4>
            <p className="mt-4">
              Led diverse teams, implemented agile methods, fostered
              collaboration, guided professionals, optimized outcomes, and
              promoted conflict management for teamwork.
            </p>
          </div>
        </div>
        {/* technical skills */}
        <div className="relative mt-8 grid grid-cols-[repeat(auto-fit,minmax(64px,1fr))] gap-8">
          <Image
            src="/skills/aws.png"
            alt="aws"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/css.png"
            alt="css"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/django.png"
            alt="django"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/firebase.png"
            alt="firebase"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/flask.png"
            alt="flask"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/github.png"
            alt="github"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/html.png"
            alt="html"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/javascript.png"
            alt="javascript"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/mongo.png"
            alt="mongo"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/nextjs.png"
            alt="nextjs"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/node.png"
            alt="nodejs"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/python.png"
            alt="python"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/react.png"
            alt="react"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/scikit_learn.png"
            alt="scikit learn"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/spark.png"
            alt="apache spark"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/tailwind.png"
            alt="tailwind css"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
          <Image
            src="/skills/tensorflow.png"
            alt="tensorflow"
            width={64}
            height={64}
            className="p-2 rounded-lg shadow-xl bg-slate-100 items-center self-center grayscale hover:grayscale-0 hover:scale-105 ease-in-out duration-300"
          />
        </div>
      </Section>
    </div>
  );
};

export default Skills;
