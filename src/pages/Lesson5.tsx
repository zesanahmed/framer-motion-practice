import { useAnimate } from "motion/react";
import { useEffect } from "react";

const Lesson5 = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [scope.current, { opacity: 1, x: 0 }, { duration: 0.5 }],
      [scope.current, { opacity: 0, x: -500 }, { duration: 0.5, delay: 0.3 }],

      [scope.current, { opacity: 1, x: 0 }, { duration: 0.5 }],
    ]);
  }, []);
  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <div
        className="size-60 bg-pink-500 rounded-lg flex flex-wrap p-5 gap-5 justify-center items-center"
        ref={scope}
      ></div>
    </div>
  );
};

export default Lesson5;
