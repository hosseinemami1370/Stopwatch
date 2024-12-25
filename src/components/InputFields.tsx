// Define the prop types for InputFields
type InputFieldsProps = {
  onStartTimeChange: (time: number) => void;
  onIntervalChange: (interval: number) => void;
  inputRefs: {
    timeInputRef: React.RefObject<HTMLInputElement>;
    intervalInputRef: React.RefObject<HTMLInputElement>;
  };
};

// Functional component for rendering input fields
const InputFields: React.FC<InputFieldsProps> = ({ onStartTimeChange, onIntervalChange, inputRefs }) => {
  // Destructure input references for better readability
  const { timeInputRef, intervalInputRef } = inputRefs;

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-8 w-[292px] sm:w-full">
      <div className="group relative w-[292px] sm:w-full">
        <label htmlFor="1" className="block pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Set Time (s)</label>
        <input id="1"
          ref={timeInputRef}
          type="number"
          defaultValue={0}
          placeholder="Set Time (s)"
          className="p-2 border rounded w-full peer bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          onChange={() => onStartTimeChange(Number(timeInputRef.current?.value || 0))}
        />
      </div>
      <div className="group relative w-[292px] sm:w-full">
        <label htmlFor="2" className="block  pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Set Interval (s)</label>
        <input
        id="2"
          ref={intervalInputRef}
          type="number"
          defaultValue={1}
          placeholder="Set Interval (s)"
          className="p-2 border rounded w-full peer bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          onChange={() => onIntervalChange(Number(intervalInputRef.current?.value || 1))}
        />
      </div>
    </div>
  );
};

export default InputFields;
