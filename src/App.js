import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  // holds items in to-do list
  const [todoList, setTodoList] = useState([]);

  // holds the current input value
  const [newTask, setNewTask] = useState("");

  // keeping track of input value
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // add task on to-do
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1: todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  // to delete tasks
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  

  return ( 
  <div className="App">
    {/* add new to-do item */}
    <div className="addTask">
      <input onChange={handleChange} />
      <button onClick={addTask}>add task</button>
    </div>

    {/* to-do list items */}
    <div className="list">
      {todoList.map((task) => {
        return (
        <Task 
        taskName={task.taskName} 
        id={task.id} 
        deleteTask={deleteTask} 
        />
        );
      })}
    </div>
  </div>
  );
}

export default App;
