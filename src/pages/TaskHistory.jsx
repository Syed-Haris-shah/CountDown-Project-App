import { useSelector } from "react-redux";

function TaskHistory() {
  const history = useSelector((state) => state.tasks.history);

  return (
    <div>
      <h2>Task History</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.content} - {entry.status} at {new Date(entry.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskHistory;
