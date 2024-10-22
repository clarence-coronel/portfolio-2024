"use client";

import LogoIcon from "@/components/icons/logo-icon";
import ScrollIcon from "@/components/icons/scroll-icon";
import Section from "@/components/section/section";
import HighlightText from "@/components/ui/highlight-text";
import useScroll from "@/hooks/useScroll";

import EducationCard from "@/components/education-card/education-card";

import { about } from "@/data/about";
import Timeline from "@/components/ui/timeline";
import RichText from "@/components/ui/rich-text";
import ExperienceCard from "@/components/experience-card/experience-card";

import { experience } from "@/data/experience";
import Skills from "@/components/skills/skills";

export default function Home() {
  const scrolled = useScroll();

  return (
    <div>
      <div>
        <div
          className={`${
            scrolled ? "landing-page-text-exit" : "landing-page-text-intro"
          } gap-10 relative pb-28 max-md:pb-48 flex flex-col justify-between items-center h-screen py-[30vh]`}
        >
          <div className="max-lg:gap-8 max-md:gap-5 max-sm:gap-3 flex flex-col justify-center items-center gap-10 ">
            <h2 className="max-md:text-xl max-xl:text-2xl font-semibold text-3xl tracking-[0.25em] text-center">
              <HighlightText>C</HighlightText>LARENCE{" "}
              <HighlightText>C</HighlightText>ORONEL
            </h2>
            <h1 className="tracking-tighter max-md:text-3xl max-xl:text-5xl font-bold text-6xl max-md:max-w-[500px] max-w-[700px] text-balance text-center">
              {`<Full-stack Developer `}
              <HighlightText>experience=&quot;Junior&quot;</HighlightText>{" "}
              <HighlightText>
                passionate={`{`}true{`}`}
              </HighlightText>{" "}
              {" />"}
            </h1>
          </div>
          <div className="max-md:hidden">
            <ScrollIcon size={70} innerColor="var(--foreground)" />
          </div>
          <div className="md:hidden">
            <ScrollIcon size={40} innerColor="var(--foreground)" />
          </div>
        </div>
        <div
          className={`${
            scrolled ? "landing-page-bg-exit" : "landing-page-bg-intro"
          } fixed left-0 top-0 max-md:hidden -z-10`}
        >
          <LogoIcon innerColor="var(--primary)" type="bg1" />
        </div>
      </div>
      <div
        className={`${
          scrolled && "opacity-100"
        } duration-1000 opacity-0 z-40 relative max-sm:px-5 max-md:px-16 px-40 flex flex-col gap-40 max-md:gap-24`}
      >
        <Section name="About" id="about">
          <div className="flex flex-col gap-10 max-md:gap-5">
            <RichText data={about.academic} />
            <Timeline>
              <EducationCard
                img="/bsu-logo.png"
                school="Bulacan State University"
                start="2020"
                end="July 18, 2024"
                course="Bachelor of Science in Information Technology"
                others={[
                  "Major in Web and Mobile Development",
                  "Magna Cum Laude",
                ]}
              />
              <EducationCard
                img="/yanga-logo.png"
                school="Dr. Yanga's Colleges Inc."
                start="2018"
                end="2020"
                course="TVL - Information and Communication Technology"
                others={["Graduated with Honors"]}
              />
            </Timeline>
            <RichText data={about.hobby} />
          </div>
        </Section>

        <Section name="Experience" id="experience">
          <Timeline>
            {experience.map((e, index) => (
              <ExperienceCard
                key={index}
                img={e.img}
                company={e.company}
                role={e.role}
                start={e.start}
                end={e.end}
                tech={e.tech}
              />
            ))}
          </Timeline>
        </Section>
        <Section name="Skills" id="skills">
          <Skills />
        </Section>
      </div>
    </div>
  );
}
