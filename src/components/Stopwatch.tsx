import React, { useRef, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import ControlButtons from "./ControlButtons";
import InputFields from "./InputFields";
import LapList from "./LapList";

// Functional component for the Stopwatch
const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [interval, setIntervalValue] = useState(1);
  const intervalRef = useRef<number | null>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);
  const intervalInputRef = useRef<HTMLInputElement>(null);

  const startTimer = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      setTime((prev) => prev + interval);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
    setLaps([]);
    resetInputs();
  };

  const resetInputs = () => {
    if (timeInputRef.current) timeInputRef.current.value = "0";
    if (intervalInputRef.current) intervalInputRef.current.value = "1";
    setTime(0);
    setIntervalValue(1);
  };

  const addLap = () => {
    setLaps((prev) => [...prev, time]);
  };

  return (
    <div className="flex flex-col items-center p-6 mx-auto space-y-5">
      <h1 className="text-2xl font-bold text-blue-600">Precision Stopwatch: Customize Intervals, Track Laps</h1>
      <p className="max-w-lg text-[#8486A9] text-xs text-justify capitalize">
        Boost your productivity and performance with this versatile stopwatch. Set custom intervals, track lap times, and measure progress. 
        Ideal for athletes, students, and anyone seeking precision. Set your target time and how often you want to break it down. 
        Start the timer. Record your progress with "Lap". Reset to start over.
      </p>

      <TimerDisplay time={time} />

      <InputFields
        onStartTimeChange={setTime} 
        onIntervalChange={setIntervalValue} 
        inputRefs={{ timeInputRef, intervalInputRef }} 
      />

      <ControlButtons
       onStart={startTimer}
       onStop={stopTimer}
       onReset={resetTimer}
       onLap={addLap}
      />

      <LapList laps={laps} />
    </div>
  );
};

export default Stopwatch;
