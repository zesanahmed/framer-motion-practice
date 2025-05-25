import { motion, useScroll } from "motion/react";

const Lesson8 = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="h-2 w-full fixed top-0 bg-gray-600"
    ></motion.div>
  );
};

export default Lesson8;
