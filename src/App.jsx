import SearchBox from "./Searchbox";
import Tasks from "./Tasks";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState([]);

  //addTask fun

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }
    const id = Math.floor(Math.random() * 100);
    setTask([...task, { id, newTask }]);
    setNewTask("");
  };

  //delete Task fun

  const deleteTask = (id) => {
    const deleteEle = task.filter((item) => item.id !== id);
    setTask(deleteEle);
  };

  //update Task fun

  const updateTaskFn = (id, val) => {
    const ele = task.map((item) =>
      item.id === id ? { ...task, newTask: val } : item
    );
    setTask(ele);
  };

  return (
    <div className="bg-[#818cf8] w-full h-screen flex flex-col items-center pt-32 justify-start">
      <p className="font-bold text-3xl py-2] text-white">To-do </p>
      <SearchBox addTask={addTask} newTask={newTask} setNewTask={setNewTask} />
      <Tasks task={task} deleteTask={deleteTask} updateTaskFn={updateTaskFn} />
    </div>
  );
}

export default App;
