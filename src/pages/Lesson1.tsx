import { motion } from "motion/react";
const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const child = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const Lesson1 = () => {
  return (
    <div>
      <motion.div
        className="size-60 bg-pink-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delayChildren: 0.5,
          staggerChildren: 0.5,
        }}
      >
        <motion.div
          className="size-20 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson1;
