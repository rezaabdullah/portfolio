import Image from "next/image";
import Section from "./ui/Section";
import Tag from "./ui/Tag";

const About = () => {
  // list of capabilities
  let capability = [
    "Management Consulting",
    "Product Management",
    "Operational Planning",
    "Leadership",
    "Agile Project Management",
    "Human Centered Design",
    "Energy",
    "Advertising",
    "Agriculture",
    "Product Design",
    "Team Development",
    "AI/ML",
  ];

  return (
    <div id="about">
      <Section>
        <h2 className="tracking-wide text-2xl md:text-3xl lg:text-4xl underline underline-offset-4 decoration-sky-600 font-semibold">
          About Me
        </h2>
        <h3 className="text-xl font-medium pt-3 md:text-2xl md:pt-4 tracking-wide">
          Product Leader | Change Agent | PMP
        </h3>
        <div className="pt-6 md:pt-8">
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 md:space-x-8 lg:space-x-10">
            <div className="basis-1/2 sm:basis-2/3">
              <p className="text-base leading-loose md:text-lg md:leading-loose">
                7+ years of experience in architecting{" "}
                <span className="font-bold">patented</span> AI products and
                building digital platform in logistics and e-commerce;
                contributed to generating revenue over{" "}
                <span className="font-bold">$1MM.</span> Excels at bridging
                cross-functional requirements, strategizing essential
                transformations, promoting collaboration, and advocating
                innovation for business growth and team development.
              </p>
              <div className="flex gap-4 pt-4 flex-wrap">
                {capability.sort().map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
            <div className="relative basis-1/2 rounded-lg sm:basis-1/3">
              <Image
                src="/abdullah_reza.jpg"
                alt="Builder, Thinker, Doer"
                // fill
                sizes="w-max"
                width={400}
                height={300}
                // className="rounded-lg object-cover"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "0.5rem",
                }}
                className="shadow-xl hover:scale-105 ease-in-out duration-300"
              ></Image>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
