import { ExternalLink } from "lucide-react";
import { Tag, Title } from "../atoms";
import { motion } from "motion/react";

const EducationList = [
  {
    id: "bachelor",
    startYear: 2013,
    endYear: 2020,
    location: "Universitas Pendidikan Indonesia",
    title: "Bachelor of Computer Science Education",
    description: () => (
      <p>
        The reason I chose to study <b>Computer Science Education</b> at{" "}
        <b>UPI</b> was my deep interest in computer logic. After entering this
        major, I discovered a real passion for programming and enjoyed learning
        how to become a developer.
        <br />
        During my studies, I gained valuable experience in various areas such as{" "}
        <b>C programming</b>, <b>web design</b>, <b>internet programming</b>,
        and the <b>CodeIgniter framework</b>, among others.
        <br />
        Although I could have graduated earlier, I decided to start working in
        2018 to gain real-world experience alongside my studies.
      </p>
    ),
    link: "https://www.upi.edu/",
  },
];

const TrainingList = [
  {
    id: "bootcamp",
    startYear: 2022,
    endYear: null,
    location: "Alterra Academy",
    title: "Frontend Engineer",
    description: () => (
      <p>
        I attended the <b>Immersive Program at Alterra Academy</b>, a bootcamp
        lasting over two months, where I gained extensive hands-on experience in{" "}
        <b>HTML</b>,<b>CSS</b>, <b>JavaScript</b>, and <b>Bootstrap</b>, with a
        strong focus on <b>React.js</b> and <b>Next.js</b>.
        <br />
        Throughout the program, I regularly worked on <b>
          logic challenges
        </b>{" "}
        and <b>HackerRank assignments</b> to strengthen my problem-solving
        skills. I also collaborated closely with both <b>frontend</b> and{" "}
        <b>backend</b> teams, learning how to develop and integrate features
        effectively within a real project workflow.
        <br />
        In addition to deepening my programming knowledge, I learned valuable
        teamwork and collaboration skills, including version control and
        workflow management using <b>GitHub</b>.
      </p>
    ),
    tags: ["Javascript", "ReactJS", "NextJS", "Bootstrap", "Redux Toolkit"],
    link: "https://drive.google.com/file/d/1fydI6NepDGmiv_CQQHOkSe6d6LOBYCOI/view?usp=sharing",
  },
  {
    id: "mern",
    startYear: 2022,
    endYear: null,
    location: "BuildWithAngga",
    title: "MERN Stack Web Development",
    description: () => (
      <p>
        I completed a <b>MERN Stack training program at BuildWithAngga</b>,
        where I learned how to develop full-stack web applications using{" "}
        <b>MongoDB</b>, <b>Express.js</b>, <b>React.js</b>, and <b>Node.js</b>.
        <br />
        Throughout the course, I gained hands-on experience in building RESTful
        APIs, managing databases, and integrating backend and frontend
        components into a cohesive system.
        <br />
        This training also strengthened my understanding of modern web
        architecture, deployment processes, and real-world best practices for
        developing scalable and maintainable applications.
      </p>
    ),
    tags: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "Tailwindcss",
      "ExpressJS",
      "MongoDB",
    ],
    link: "https://drive.google.com/file/d/13FreZ6pDOmJeucDfGgOnOtv4rJ_N0O8j/view?usp=sharing",
  },
];

function Education() {
  return (
    <>
      <section id="education">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>Education</Title>
        </motion.div>
        <div className="grid gap-5">
          {EducationList.map((item) => {
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
                    {item.startYear} {item.endYear ? "— " + item.endYear : ""}
                  </p>
                </div>
                <div className="col-span-3">
                  <a href={item.link} target="_blank" className="text-white">
                    <b className="font-bold text-lg">{item.location}</b>
                  </a>
                  <p className="font-semibold">{item.title}</p>
                  <div className="mt-3 text-sm">
                    <Desc />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="training">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title>Training and Certification</Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-5"
        >
          {TrainingList.map((item) => {
            const Desc = item.description;

            return (
              <div
                key={item.id}
                className="grid grid-cols-4 gap-5 p-3 items-start border border-slate-800 hover:border-slate-200 rounded-md transition-colors hover:bg-slate-700"
              >
                <div>
                  <p className="text-slate-500 text-sm mb-2">
                    {item.startYear} {item.endYear ? "— " + item.endYear : ""}
                  </p>
                </div>
                <div className="col-span-3">
                  <a href={item.link} target="_blank" className="text-white">
                    <b className="font-semibold flex gap-2 items-center">
                      {item.title} <ExternalLink size={15} />
                    </b>
                  </a>
                  <p className="font-semibold">{item.location}</p>
                  <div className="mt-3 text-sm">
                    <Desc />

                    <div className="flex gap-1 flex-wrap">
                      {item.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}

export default Education;
