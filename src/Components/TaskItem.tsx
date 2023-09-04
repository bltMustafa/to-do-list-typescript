import { PropsType } from "../utility/types";
import "../style/TaskItem.css";

function TaskItem({ task, deleteTask }: PropsType) {
  return (
    <div className="card">
      <p> Task Adı : {task.taskName}</p>
      <p> Süre : {task.workDay} </p>
      <button className="deleteBtn" onClick={() => deleteTask(task.taskName)}>
        X
      </button>
    </div>
  );
}

export default TaskItem;
