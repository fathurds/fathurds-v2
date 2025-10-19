import { Tag, Title } from "../atoms";
import { motion } from "motion/react";

const ExperienceList = [
  {
    id: "yakes",
    startYear: 2022,
    endYear: null,
    location: "Yakes Telkom",
    position: "Frontend Engineer",
    link: "https://yakestelkom.or.id/",
    description: () => (
      <p>
        I built user interfaces and dashboards that streamline{" "}
        <b>clinical workflows</b> helping doctors, nurses, and patients manage
        medical records, perform health-related tasks, and improve efficiency in
        daily operations at the clinic.
        <br />
        My focus was on creating responsive, and performance-driven interfaces
        that enhance the digital healthcare experience.
      </p>
    ),
    tags: [
      "Typescript",
      "Javascript",
      "ReactJS",
      "NextJS",
      "Redux Toolkit",
      "Zustand",
      "Tailwindcss",
      "Shadcn UI",
      "Ant Design",
      "Bootstrap",
      "SWR",
    ],
  },
  {
    id: "biofarma",
    startYear: 2023,
    endYear: 2024,
    location: "Bio Farma",
    position: "Frontend Developer",
    link: "https://www.biofarma.co.id/",
    description: () => (
      <p>
        I worked within{" "}
        <b>Q100 Bio Farma's internal supply chain management system</b>,
        developing and improving modules related to supplier audit and
        compliance.
        <br />I helped build systems that ensure supplier qualification, monitor
        material quality, manage vendor complaints efficiently, and maintain
        data integrity throughout the supply chain process.
      </p>
    ),
    tags: ["Javascript", "ReactJS", "Redux Toolkit", "Chakra UI"],
  },
  {
    id: "eduosmo",
    startYear: 2024,
    endYear: 2025,
    location: "Eduosmo",
    position: "IT/Programmer Instructor",
    link: "https://eduosmo.com/",
    description: () => (
      <p>
        I taught Information Technology and Programming, focusing on introducing
        students to the fundamentals of <b>JavaScript</b> and modern web
        development.
        <br />
        I guided students through hands-on projects that helped them understand
        programming logic, problem-solving, and best practices in writing clean,
        maintainable code.
        <br />
        Beyond technical skills, I encouraged creativity and curiosity inspiring
        students to explore how code can be used to build real-world solutions.
      </p>
    ),
    tags: ["Typescript", "Javascript", "ReactJS", "NextJS", "Tailwindcss"],
  },
  {
    id: "smkn5",
    startYear: 2018,
    endYear: 2022,
    location: "SMKN 5 Bandung",
    position: "IT Teacher",
    link: "https://www.smkn5bandung.sch.id/",
    description: () => (
      <p>
        As a Computer Teacher at a public vocational high school, I taught
        students the fundamentals of computer science and programming.
        <br />
        My classes focused on practical skills, computer literacy, and basic
        programming.
        <br />
        I designed lessons and projects that encouraged students to think
        logically, solve problems creatively, and understand how technology can
        be applied in real-world scenarios.
        <br />
        Beyond teaching technical skills, I aimed to inspire curiosity and
        confidence — helping students prepare for future careers in IT and
        software development.
      </p>
    ),
    tags: ["Javascript", "ReactJS"],
  },
];

function Experience() {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title>Experience</Title>
      </motion.div>
      <div className="grid gap-5">
        {ExperienceList.map((item) => {
          const Desc = item.description;

          return (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              key={item.id}
              className="grid grid-cols-4 gap-5 p-3 items-start border border-slate-800 hover:border-slate-200 rounded-md transition-colors hover:bg-slate-700"
            >
              <div>
                <p className="text-slate-500 text-sm mb-2">
                  {item.startYear} — {item.endYear || "Present"}
                </p>
              </div>
              <div className="col-span-3">
                <a href={item.link} target="_blank" className="text-white">
                  <b className="font-semibold">
                    {item.location} | {item.position}
                  </b>
                </a>
                <div className="text-sm flex flex-col gap-2">
                  <Desc />

                  <div className="flex gap-1 flex-wrap">
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
