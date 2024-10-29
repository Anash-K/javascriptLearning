import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTask } from "../ReduxStore/slices/todoSlice";

const TaskCard = ({ tasks , handleEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) =>{
    dispatch(deleteTask(id))
  }

  
  return (
    <div>
      <ul className="list-decimal px-4 ">
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="flex w-full justify-between">
              <p>{task.text}</p>
              <div>
                <button onClick={() => handleDelete(task.id)}>
                  <MdDelete />
                </button>
                <button onClick={() => handleEdit(task)}>
                  <BiSolidEditAlt />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskCard;
