import React, { useRef } from "react";
import Cards from "./Cards";

const ForeGround = () => {
  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  const ref = useRef(null);
  return (
    <>
      <div
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap px-5 "
        ref={ref}
      >
        {data.map((item, index) => {
          return <Cards data={item} key={index} reference={ref} />;
        })}
      </div>
    </>
  );
};

export default ForeGround;
