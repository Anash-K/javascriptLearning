import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../ReduxStore/slices/todoSlice";

const TodoHeader = () => {
  const dispatch = useDispatch();

  const taskRef = useRef("");

  const handleAddTask = () => {
    if (taskRef.current.value) {
      dispatch(addTask({ id: Date.now(), text: taskRef.current.value }));
      taskRef.current.value = "";
    }
  };

  const handleRemoveTask = () => {
    taskRef.current.value = "";
  };
  return (
    <>
      <div className="text-center my-2 flex items-center justify-center gap-2">
        <input
          type="text"
          ref={taskRef}
          placeholder="Enter your task..."
          className="border border-blue-500 px-2 py-1 rounded-lg"
        />

        <button className="text-2xl border-blue-500" onClick={handleAddTask}>
          <IoAddCircleOutline />
        </button>
        <button className="text-2xl border-blue-500" onClick={handleRemoveTask}>
          <CiCircleRemove />
        </button>
      </div>
    </>
  );
};

export default TodoHeader;
