import { useState } from "react";
import TodoItem from "./Todoitem";

const App = () => {
//states
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);
  // Callback Functions
  const removeTaskWithIndex = (index) => {
    setTasks((currentValue) => {
      const updatedArray = currentValue.filter((e, i) => {
        if (i === index) {
          return false;
        }
        return true;
      });
      return updatedArray;
    });
  };
  const handleButtonClick = () => {
    setTasks((currentValue) => {
      currentValue.push(currentTask);
      return currentValue;
    });
    setCurrentTask("");
  };
// jsx content
  return (
    <main className="text-center">
      <h1 className="text-gray-700 text-4xl font-bold py-10">My To-Do List</h1>
      <div>
        <input
          type="text"
          value={currentTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
          placeholder="Add a new task"
          className="p-6 w-[70%] border border-gray-800"
        />
        <button onClick={handleButtonClick} className="bg-gray-700 text-white p-3 rounded-md ml-6">
          Add
        </button>
      </div>
      <ol id="taskList" className="space-y-3 p-6 max-w-lg mx-auto">
        {tasks.map((currentTask, index) => {
          return (
            <TodoItem
           todo={currentTask}
           removeTaskWithIndex={removeTaskWithIndex} // Corrected prop name
          index={index}
          key={index}
      />

          );

          })}
      </ol>
 </main>
 );
};
export default App;
