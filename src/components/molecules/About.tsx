import { Title } from "../atoms";
import { motion } from "motion/react";

function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title>About</Title>
        <p className="text-justify">
          Ever since I wrote my first lines of <b>Javascript</b>, I've been
          fascinated by how code can shape digital experiences.
          <br />
          <br />
          Today, I focus on creating modern, high-performance web applications
          using technologies like <b>TypeScript</b>, <b>Next.js</b>, and{" "}
          <b>React</b>. I have hands-on experience with state management
          libraries such as <b>Zustand</b>, <b>Redux Toolkit</b>, and
          data-fetching tools like <b>SWR</b> and <b>TanStack Query/Table</b>.
          <br />
          <br />
          For styling and UI, I enjoy working with <b>Tailwind CSS</b>,{" "}
          <b>Shadcn UI</b>, <b>Chakra UI</b>, <b>Ant Design</b>, and{" "}
          <b>Bootstrap</b> choosing the right design system to match each
          project's needs.
          <br />
          <br />
          I enjoy every step of the process from building component systems and
          crafting layouts, to fine-tuning micro-interactions that make a
          website feel alive.
          <br />
          <br />
          Outside of coding, I love experimenting with web animations, interface
          design, and exploring new frontend technologies that push the web
          forward.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
