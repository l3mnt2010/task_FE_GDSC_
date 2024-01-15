import React from "react";
import { Task } from "./detail";
import { deleteTask } from "../services/api";

const ModalCustomDel: React.FC<Task> = (props) => {
  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const { create_at, done, finish_at, id, isCloseEdit, name } = props;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-5xl leading-6 font-medium text-gray-900">
                Delete task
              </h3>

              <div className="mt-2">
                <form className="name_task">
                  <input type="text" placeholder="name" value={name} />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={() => {
              handleDeleteTask(id);
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalCustomDel;
