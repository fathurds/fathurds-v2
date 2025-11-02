import Image from "rc-image";
import { PreviewImageGroup, Tag, Title } from "../atoms";
import { useState } from "react";
import { motion } from "motion/react";

const listProject = [
  {
    src: "/project-1a.png",
    title: <b>General Examination Page</b>,
    desc: (
      <p>
        Designed and developed <b>patient examination modules</b> covering
        complaints, anamnesis, diagnoses, and prescriptions.
      </p>
    ),
    tags: [
      "Javascript",
      "ReactJS",
      "NextJS",
      "Redux Toolkit",
      "Bootstrap",
      "Ant Design",
    ],
  },
  {
    src: "/project-2a.png",
    title: <b>Dental Examination Page</b>,
    desc: (
      <p>
        Designed and implemented a <b>dental examination interface</b> featuring
        an interactive FDI-based tooth chart, dynamic form handling for
        diagnoses and prescriptions, and responsive UI components.
      </p>
    ),
    tags: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "Zustand",
      "Tailwindcss",
      "Shadcn UI",
      "SWR",
    ],
  },
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <section id="projects">
      <Title>Projects</Title>

      <h4 className="text-xl mt-2">
        <b>Patient Examination System</b>
      </h4>
      <p>
        Includes modules for <b>General Examination</b> and{" "}
        <b>Dental Examination</b>, allowing doctors to record complaints,
        anamnesis, diagnoses, and prescriptions through an intuitive,
        interactive interface.
      </p>

      <PreviewImageGroup
        preview={{
          visible: open,
          onVisibleChange: setOpen,
          current,
          onChange: setCurrent,
        }}
      >
        <div className="grid gap-5 my-3">
          {listProject.map((item, i) => (
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              key={item.src}
              className="flex flex-col md:flex-row gap-6 bg-white/5 p-5 rounded-2xl shadow-md hover:bg-white/10 text-start"
              onClick={() => {
                setCurrent(i);
                setOpen(true);
              }}
            >
              <Image
                src={item.src}
                width={64 * 4}
                height={36 * 4}
                className="object-cover rounded-lg"
                alt={item.src}
              />

              <div className="flex-1">
                <h5 className="text-lg">{item.title}</h5>
                {item.desc}

                <div className="flex gap-1 flex-wrap mt-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </PreviewImageGroup>
    </section>
  );
}

export default Projects;
