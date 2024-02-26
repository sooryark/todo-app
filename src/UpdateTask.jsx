import { useState } from "react";

const UpdateTask = ({ closeModal, task, updateTaskFn }) => {
  const [newEl, setNewEl] = useState(task.newTask);

  const handleUpdate = (id, newEl) => {
    if (newEl.trim() === "") {
      return;
    }
    updateTaskFn(id, newEl);
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Update Task</h2>
      <input
        type="text"
        className="w-[300px] h-auto p-1 rounded-md"
        value={newEl}
        onChange={(e) => setNewEl(e.target.value)}
      />
      <br></br>
      <button
        onClick={() => handleUpdate(task.id, newEl)}
        className="bg-[#1d4ed8] p-1 text-white rounded-md"
      >
        update
      </button>
      <button
        onClick={closeModal}
        className="bg-[#ef4444] p-1 text-white rounded-md"
      >
        Close Modal
      </button>
    </div>
  );
};

export default UpdateTask;
