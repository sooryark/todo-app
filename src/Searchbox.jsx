const SearchBox = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        className="border-none  w-[550px] 
       p-2 my-2 outline-none rounded-md bg-white"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter your Task Here..."
      />
      <button
        onClick={() => addTask()}
        className="bg-green-700 text-white px-2 py-2 rounded-md"
      >
        Add
      </button>
    </div>
  );
};

export default SearchBox;
