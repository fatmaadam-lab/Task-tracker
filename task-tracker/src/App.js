import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
    console.log('Reminder test')
}


  return (
    <div className="container">
      <Header/>
      {
        tasks.length > 0 ?
        ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toogleReminder} />) :
        ('No Tasks to Show')
      }
      
    </div>
  );
}

export default App;
