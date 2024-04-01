import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] h-screen w-full">
      <div className="absolute top-[5%] flex items-center justify-center py-10 w-full text-zinc-600 text-xl font-semibold">
        Document
      </div>
      <h1 className=" absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] font-semibold text-[13vw] leading-none tracking-tighter text-zinc-900">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
