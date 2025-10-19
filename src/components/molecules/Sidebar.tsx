import { motion } from "motion/react";

const menus = [
  {
    id: "about",
    label: "ABOUT",
    link: "#about",
  },
  {
    id: "experience",
    label: "EXPERIENCE",
    link: "#experience",
  },
  {
    id: "education",
    label: "EDUCATION",
    link: "#education",
  },
  {
    id: "training",
    label: "TRAINING & CERTIFICATION",
    link: "#training",
  },
  // {
  //   id: "project",
  //   label: "PROJECTS",
  //   link: "#project",
  // },
];

function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex lg:flex-col lg:gap-3 text-xs my-10"
    >
      {menus.map((menu) => (
        <a
          key={menu.id}
          href={menu.link}
          className="transition-colors font-bold flex items-center gap-3 text-slate-400 hover:[&>hr]:w-10 hover:text-white"
        >
          <hr className="w-5 transition-all" />
          {menu.label}
        </a>
      ))}
    </motion.div>
  );
}

export default Sidebar;
