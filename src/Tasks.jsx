import { useState } from "react";

import UpdateTask from "./UpdateTask";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Tasks = ({ task, deleteTask, updateTaskFn }) => {
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const PopupButton = ({ openModal }) => {
    return (
      <button onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="W-[20px] h-[20px] cursor-pointer"
        >
          <path
            fill="#ff1420"
            d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V299.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"
          />
        </svg>
      </button>
    );
  };

  const openModal = (item) => {
    setTaskToUpdate(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {task?.map((item, index) => (
        <div
          className="w-80 text-success bg-white border border-1 mb-1 rounded-md flex flex-wrap items-center justify-between py-2 px-4"
          key={index}
        >
          <p>{index + 1})</p>
          <p className="text-base font-medium text-green-700">
            {item?.newTask}
          </p>
          <div className="flex gap-2">
            <PopupButton openModal={() => openModal(item)} />
            <Modal
              isOpen={isModalOpen}
              onRequestClose={() => closeModal()}
              className="modal-box"
            >
              <UpdateTask
                task={taskToUpdate}
                updateTaskFn={updateTaskFn}
                closeModal={closeModal}
              />
            </Modal>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="W-[20px] h-[20px] cursor-pointer"
              onClick={() => deleteTask(item?.id)}
            >
              <path
                fill="#FF1420"
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tasks;
