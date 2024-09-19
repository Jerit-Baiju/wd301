import TaskCard from './components/TaskCard';

const App = () => {
  const pendingTasks = [
    {
      name: 'Build the website with static content',
      dueDate: '10th April',
      assignee: 'Rohit S',
    },
    {
      name: 'Add a blog',
      dueDate: '22nd March',
      assignee: 'Rohit M',
    },
  ];

  const completedTasks = [
    {
      name: 'Design the mockup',
      completedDate: '10th April',
      assignee: 'Rohit M',
    },
    {
      name: 'Add a blog',
      completedDate: '20th April',
      assignee: 'Ajay S',
    },
  ];
  return (
    <div className='mx-44 my-20'>
      <div>
        <h1 className='text-2xl font-bold'>Smarter Tasks</h1>
        <h3>Project: Graduation Final Year Project (Revamp College Website)</h3>
      </div>
      <div className='flex gap-16 justify-center mt-10'>
        <div className='border-4 rounded-3xl p-4 w-1/3'>
          <h1 className='text-3xl'>Pending</h1>
          <div className='mb-4'>
            {pendingTasks.map((task, index) => (
              <TaskCard key={index} title={task.name} dueDate={task.dueDate} assignee={task.assignee} />
            ))}
          </div>
          <a className='bg-gray-400 py-2.5 px-4 rounded-lg' href='#'>
            New Task
          </a>
        </div>
        <div className='border-4 rounded-3xl p-4 w-1/3'>
          <h1 className='text-3xl'>Done</h1>
          {completedTasks.map((task, index) => (
            <TaskCard key={index} title={task.name} completedDate={task.completedDate} assignee={task.assignee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
