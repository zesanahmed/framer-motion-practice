import { motion, transform } from "motion/react";
const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      transform: {
        duration: 0.5,
      },
    },
  },
  tap: {
    scale: 0.95,
    rotate: 90,
  },
};
const Lesson1 = () => {
  return (
    <div>
      <motion.div
        className="size-60 bg-pink-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
    </div>
  );
};

export default Lesson1;
