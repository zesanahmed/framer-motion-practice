import { motion, useDragControls } from "motion/react";

const Lesson6 = () => {
  const controls = useDragControls();
  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center">
      <div
        onPointerDown={(e) => controls.start(e)}
        className="w-64 h-10 bg-neutral-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
      ></div>
      <motion.div
        className="size-60 bg-pink-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
        drag="x"
        dragControls={controls}
      ></motion.div>
    </div>
  );
};

export default Lesson6;
