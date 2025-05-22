import { motion, transform } from "motion/react";
import { useRef } from "react";
const parent = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: {
    x: [0, 300, -300, 0],
    y: [0, 300, -300, 0],
    rotate: [0, 360, 0],
    opacity: 1,
    transition: {
      ease: "linear",
      repeat: Infinity,
      duration: 5,
      opacity: {
        duration: 1,
      },
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
      className="border border-red-500 size-[500px] flex justify-center items-center"
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
