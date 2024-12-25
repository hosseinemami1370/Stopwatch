// Define the prop types for LapList
type LapListProps = {
  laps: number[];
};

// Functional component for rendering the list of lap times
const LapList: React.FC<LapListProps> = ({ laps }) => {
  const formatTime = (time: number) => {
    const days = Math.floor(time / 86400);
    const hours = Math.floor(time / 3600); 
    const minutes = Math.floor((time % 3600) / 60); 
    const seconds = time % 60; 
    
    return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="mt-4 text-center w-full">
      <h2 className="text-lg font-semibold text-[#8486A9] capitalize">Lap Times</h2>

      <ul className="list-none text-[#8486A9] w-4/5 h-[10rem] overflow-auto mx-auto">
        {laps.map((lap, index) => (
          <li key={index} className="py-1 flex justify-between mx-2">
            <span>Lap {index + 1}</span> 
            <span>{formatTime(lap)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LapList;
