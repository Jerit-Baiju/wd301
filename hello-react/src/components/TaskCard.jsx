const TaskCard = (props) => {
  return (
    <div className='border-2 p-2 my-2'>
      <h2 className='text-xl font-bold'>{props.title}</h2>
      {props.dueDate ? <p>Due on: {props.dueDate}</p> : <p>Completed on: {props.completedDate}</p>}
      <p>Assignee: {props.assignee}</p>
    </div>
  );
};

export default TaskCard;
