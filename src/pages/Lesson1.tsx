import { motion, transform } from "motion/react";
import { useRef } from "react";
const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.5,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  hover: {
    opacity: 1,
  },
  tap: { scale: 1.2, boxShadow: "0px 5px 10px rgba(0,0,0,0.5)" },
};
const Lesson1 = () => {
  const parentRef = useRef(null);
  return (
    <div
      ref={parentRef}
      className="border border-red-500 size-[200px] flex justify-center items-center"
    >
      <motion.div
        className="size-60 bg-pink-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        drag
        dragElastic={0.5}
        dragConstraints={parentRef}
        whileDrag="tap"
      ></motion.div>
    </div>
  );
};

export default Lesson1;
