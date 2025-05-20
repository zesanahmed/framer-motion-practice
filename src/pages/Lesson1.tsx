import { motion } from "motion/react";
const Lesson1 = () => {
  const initial = { rotate: 0 };
  const animate = { rotate: 360 };
  return (
    <div>
      <motion.div
        className="size-60 bg-pink-500 rounded-lg"
        initial={initial}
        animate={animate}
        transition={{ type: "spring", duration: 2 }}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
