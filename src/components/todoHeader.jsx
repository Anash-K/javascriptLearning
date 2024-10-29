import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../ReduxStore/slices/todoSlice";

const TodoHeader = ({ task, handleReset }) => {
  const dispatch = useDispatch();
  const taskRef = useRef("");

  // Function to set input value based on `task`
  const checkTask = useCallback(() => {
    if (task && task.text) {
      taskRef.current.value = task.text;
    }
  }, [task]);

  // UseEffect to run checkTask when task changes
  useEffect(() => {
    checkTask();
  }, [checkTask]);

  // Add or edit task function
  const handleAddTask = () => {
    if (taskRef.current.value) {
      if (task.text == undefined || task.text == "") {
        // Add new task
        dispatch(addTask({ id: Date.now(), text: taskRef.current.value }));
        taskRef.current.value = "";
      } else {
        // Edit existing task
        dispatch(editTask({ id: task.id, text: taskRef.current.value }));
        taskRef.current.value = "";
        handleReset();
      }
    }
  };

  // Clear the input and reset any selected task
  const handleRemoveTask = () => {
    taskRef.current.value = "";
    if (task) {
      handleReset();
    }
  };

  // Handle Enter key press to add or edit task
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="text-center my-2 flex items-center justify-center gap-2">
      <input
        type="text"
        ref={taskRef}
        placeholder="Enter your task..."
        className="border border-blue-500 px-2 py-1 rounded-lg"
        onKeyDown={handleKeyPress}
      />

      <button className="text-2xl border-blue-500" onClick={handleAddTask}>
        <IoAddCircleOutline />
      </button>
      <button className="text-2xl border-blue-500" onClick={handleRemoveTask}>
        <CiCircleRemove />
      </button>
    </div>
  );
};

export default TodoHeader;
