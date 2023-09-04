import { ChangeEvent, FC, useState } from "react";

import "../style/Task.css";
import { todoType } from "../utility/types";
import TaskItem from "./TaskItem";

const Task: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  console.log(todoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };

  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };

  return (
    <>
      <div className="mainCard">
        <input
          className="mainCardInput"
          value={task}
          name="task"
          type="text"
          onChange={handleChange}
          placeholder="Lütfen Taskınızı Ekleyiniz."
        />

        <input
          className="mainCardInput"
          value={workDay}
          name="workDay"
          type="number"
          onChange={handleChange}
          placeholder="Kaç günde bitireceksiniz . "
        />
        <button className="mainCardButton" onClick={addNewTask}>
          Task Ekle{" "}
        </button>
      </div>
      <div className="taskCard">
        {todoList.map((task: todoType, index: number) => {
          return <TaskItem task={task} key={index} deleteTask={deleteTask} />;
        })}
      </div>
    </>
  );
};

export default Task;
