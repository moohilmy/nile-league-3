"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const HistorySection = () => {
  return (
    <div className="bg-warmGray  flex justify-center items-center gap-7 relative max-md:flex-col-reverse ">

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm  max-lg:w-[70%]  leading-6  md:w-[50%] w-full p-4"
        >
          The Egyptian Premier League is the oldest and most prestigious
          football competition in Egypt, with its first edition launching on
          October 22, 1948. The idea of establishing the league was conceived by
          journalist Mahmoud Badr El-Din, who drew inspiration from the English
          league and saw the need for a similar competition in Egypt, uniting
          clubs in a single tournament based on a points system. The Egyptian
          Football Association approved the idea, leading to the official launch
          of the league’s first edition.
        </motion.p>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className=" relative md:w-[550px] w-full p-1 bg-softIvory"
      >
        <Image
          src="/first-goal.jpg"
          height={450}
          width={800}
          alt="founder of the league"
          style={{ objectFit: "cover" }}
        />
        <p className="text-center font-medium sm:text-sm text-xs text-warmGray uppercase py-1">
          Mahmoud Badr El-Din - <span  className="text-secondColor"> founder of league</span>
        </p>
      </motion.div>
    </div>
  );
};

export default HistorySection;
