import { motion } from "motion/react";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold text-white">Fathurrachman D Saputra</h1>
      <h2 className="text-lg font-medium mb-2 text-white">Frontend Engineer</h2>
      <p className="text-sm lg:max-w-96 mb-5">
        I'm a <b>Frontend Developer</b> who loves turning ideas into elegant,
        interactive, and high-performance web experiences.
      </p>

      <div className="flex justify-center lg:block lg:justify-start">
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative size-48"
        >
          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-30 blur-2xl"></div>
          <img
            src="/me.webp"
            alt="Profile"
            loading="lazy"
            width={192}
            height={192}
            className="relative rounded-full object-cover border border-blue-400 shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
