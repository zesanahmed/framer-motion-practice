import { motion, useInView } from "motion/react";
import { useRef } from "react";
const Lesson4 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <motion.div
        className="size-60 bg-pink-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
        ref={ref}
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { delay: 0.3 } }
            : { opacity: 0, x: -500 }
        }
      ></motion.div>
    </div>
  );
};

export default Lesson4;
