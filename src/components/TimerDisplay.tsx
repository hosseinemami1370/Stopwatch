// Define the prop types for TimerDisplay
type TimerDisplayProps = {
  time: number; // Total time in seconds to display
};

// Functional component for rendering the timer display
const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {

  const days = Math.floor(time / 86400);
  const hours = Math.floor((time % 86400) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="flex justify-center gap-3 sm:gap-8">
      {/* Days Display */}
      <div className="flex flex-col gap-5 relative">
        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
            {String(days).padStart(2, '0')}
          </span>
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          Days
        </span>
      </div>

      {/* Hours Display */}
      <div className="flex flex-col gap-5 relative">
        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
            {String(hours).padStart(2, '0')} 
          </span>
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
          Hours
        </span>
      </div>

      {/* Minutes Display */}
      <div className="flex flex-col gap-5 relative">
        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
            {String(minutes).padStart(2, '0')}
          </span>
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          Minutes
        </span>
      </div>

      {/* Seconds Display */}
      <div className="flex flex-col gap-5 relative">
        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
            {String(seconds).padStart(2, '0')}
          </span>
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          Seconds
        </span>
      </div>
    </div>
  );
};

export default TimerDisplay;
