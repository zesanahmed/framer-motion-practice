import { motion, useAnimate } from "motion/react";
import { useState } from "react";

const Lesson2 = () => {
  const [scope, animate] = useAnimate();
  const [toggle, setToggle] = useState(false);
  const handleToggle = async () => {
    setToggle(!toggle);
    if (toggle) {
      await animate(scope.current, { x: 200 }, { duration: 0.5 });
    } else {
      await animate(scope.current, { x: -200 }, { duration: 0.5 });
    }
  };
  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center">
      <button
        onClick={handleToggle}
        className="bg-purple-500 mb-10 p-3 w-fit rounded-md"
      >
        Toggle
      </button>
      <motion.div
        ref={scope}
        className="size-60 bg-pink-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
      ></motion.div>
    </div>
  );
};

export default Lesson2;
