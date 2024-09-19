const TaskCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Due on: ...</p>
      <p>Assignee: ...</p>
    </div>
  );
};

export default TaskCard;