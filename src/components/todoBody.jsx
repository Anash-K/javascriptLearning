import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TodoBody = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTaskAvl, setIsTaskAvl] = useState(false);

  const tasks = useSelector((state) => state.taskSlice.tasks);

  useEffect(() => {
    setIsTaskAvl(tasks.length === 0);
    setIsLoading(false); 
  }, [tasks]);

  return (
    <div className="border rounded-lg w-[40%] m-auto px-4 py-2">
      {isLoading ? (
        "Loading"
      ) : (
        <>
          {isTaskAvl ? (
            "No Task"
          ) : (
            <div>
              <ul className="list-decimal px-4 capitalize">
                {tasks.map((task) => ( 
                  <li key={task.id}>{task.text}</li> 
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TodoBody;
