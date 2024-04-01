import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
const Cards = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      className="w-60 h-72 flex-shrink-0 relative rounded-[40px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-5 text-sm leading-tight font-semibold">{data.desc}</p>
      <div className="absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.filesize}</h5>

          <span className="h-7 w-7 rounded-full bg-zinc-600 flex items-center justify-center">
            {data.close ? (
              <IoClose size=".7em" color="#fff" />
            ) : (
              <MdOutlineFileDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } w-full h-10 py-4 flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Cards;
