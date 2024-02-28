import { useReducer, useState } from "react";

let idCount = 0;

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  const initialTasks = [
    { id: ++idCount, description: "Buy eggs." },
    { id: ++idCount, description: "Read 'The Communist Manifesto'." },
    { id: ++idCount, description: "Study Chemistry." },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: ++idCount,
          description: taskDescription,
        };

        setTaskDescription("");

        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.taskId);

      default:
        return state;
    }
  };

  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (taskId) => {
    dispatchTasks({ type: "DELETE", taskId });
  };

  return (
    <div>
      <h3>useReducer</h3>
      <p>Number: {number}</p>
      <button onClick={dispatch}>Change number</button>
      <p>Tasks:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
        />
        <button type="submit">Submit</button>
      </form>
      {tasks.map((task) => (
        <p key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.description}
        </p>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
