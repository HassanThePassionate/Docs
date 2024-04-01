import React from "react";
import Background from "./components/Background";
import ForeGround from "./components/ForeGround";

const App = () => {
  return (
    <div className=" bg-zinc-800 relative  h-screen w-full">
      <Background />
      <ForeGround />
    </div>
  );
};

export default App;
