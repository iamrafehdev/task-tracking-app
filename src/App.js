import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting in University',
      day: 'Feb 6th at 1:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shoppiing',
      day: 'Feb 7th at 2:00pm',
      reminder: false,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.filter((task) => tasks.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />) : ('No Tasks Yet!!!')}
    </div>

  );
}

export default App;