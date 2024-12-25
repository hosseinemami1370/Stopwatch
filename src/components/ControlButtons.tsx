// Define the prop types for ControlButtons
type ControlButtonsProps = {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onLap: () => void;
};

// Functional component for rendering control buttons
const ControlButtons: React.FC<ControlButtonsProps> = ({ onStart, onStop, onReset, onLap }) => {
  return (
    <div className="flex justify-center gap-3 sm:gap-8">
      <button onClick={onStart} className="px-4 py-2 bg-emerald-800 text-gray-200 rounded shadow hover:bg-emerald-700 w-16 sm:w-32 lg:w-40">
        Start
      </button>
      <button onClick={onStop} className="px-4 py-2 bg-rose-800 text-gray-200 rounded shadow hover:bg-rose-700 w-16 sm:w-32 lg:w-40">
        Stop
      </button>
      <button onClick={onReset} className="px-4 py-2 bg-cyan-800 text-gray-200 rounded shadow hover:bg-cyan-700 w-16 sm:w-32 lg:w-40">
        Reset
      </button>
      <button onClick={onLap} className="px-4 py-2 bg-indigo-800 text-gray-200 rounded shadow hover:bg-indigo-700 w-16 sm:w-32 lg:w-40">
        Lap
      </button>
    </div>

  );
};

export default ControlButtons;
