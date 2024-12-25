import React from "react";
import Stopwatch from "./components/Stopwatch";

// Main application component
const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 sm:gap-16 bg-[#191A24] scrollbar">
        <Stopwatch />
      </div>
    </>
  );
};

export default App;
