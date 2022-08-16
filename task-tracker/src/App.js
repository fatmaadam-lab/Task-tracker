import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks ] = useState([
    {
        id: 1, 
        text: 'This Task 1',
        date: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2, 
        text: 'This Task 2',
        date: 'Feb 7th at 2:30pm',
        reminder: true,
    },
    {
        id: 3, 
        text: 'This Task 3',
        date: 'Feb 9th at 2:30pm',
        reminder: false,
    },

])

// Delete Tasks function 
const deleteTask = (id) => { 
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder 
const toogleReminder = (id) =>{ 
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
}

// Add Tasks 
const addTask = (task) => {
  const id = Math.floor(Math.random * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}



  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ?
        ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleReminder} />) :
        ('No Tasks to Show')
      }
      
    </div>
  );
}

export default App;
