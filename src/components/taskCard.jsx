import { MdDelete } from "react-icons/md";

const TaskCard = ({ tasks }) => {
  return (
    <div>
      <ul className="list-decimal px-4 capitalize">
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="flex w-full justify-between">
              <p>{task.text}</p>
              <div>
                <button>
                  <MdDelete />
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
