

const TopicBtn = ({ value }) => {
  return (
    <button
      className="border hover:bg-slate-300 leading-5  min-w-fit 
      duration-300 ease-in-out border-green-400 px-2 py-1 rounded-lg"
    >
      {value}
    </button>
  );
};
export default TopicBtn;

