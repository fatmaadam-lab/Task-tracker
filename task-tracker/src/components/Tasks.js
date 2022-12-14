import Task from "./Task"

const Tasks = (props) => {
  return (
    <>
    {props.tasks.map((task)=> (
        <Task key={task.id} onDelete={props.onDelete} task={task} onToggle={props.onToggle}/>
    ))}
    </>
  )
}

export default Tasks