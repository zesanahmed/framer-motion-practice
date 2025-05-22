import { motion, useCycle } from "motion/react";
const Lesson3 = () => {
  const boxAnimate = [
    { x: 0, y: 0, rotate: 0 },
    { x: 100, y: 100, rotate: 360 },
    { x: -100, y: -100, rotate: -360 },
    { x: 0, y: 0, rotate: 0 },
    { x: 200, y: 200, rotate: 720 },
    { x: -200, y: -200, rotate: -720 },
    { x: 0, y: 0, rotate: 0 },
  ];
  const [animate, cycle] = useCycle(...boxAnimate);
  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center">
      <motion.div
        className="size-60 bg-pink-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
        animate={animate}
        onTap={() => cycle()}
      ></motion.div>
    </div>
  );
};

export default Lesson3;
