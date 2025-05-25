import { motion, useMotionValue, useTransform } from "motion/react";

const Lesson7 = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-500, 0, 500], [1, 0.5, 0]);
  const scale = useTransform(x, [-500, 0, 500], [1.5, 1, 0.5]);
  const rotate = useTransform(x, [-500, 0, 500], [-180, 0, 180]);
  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center">
      <motion.div
        style={{ x, opacity, scale, rotate }}
        drag="x"
        className="size-60 bg-pink-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
      ></motion.div>
    </div>
  );
};

export default Lesson7;
