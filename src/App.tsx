import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import "./styles/global.css";

type Task = {
  id: number;
  title: string;
  isComplete: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  const handleCreateNewTask = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (task.length === 0) {
        return;
      }

      setTasks([
        ...tasks,
        {
          id: new Date().getTime(),
          title: task,
          isComplete: false,
        },
      ]);

      setTask("");
    },
    [task]
  );

  const handleTaskChanged = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }, []);

  const handleRemoveTask = useCallback(
    (id: number) => {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
    },
    [tasks]
  );

  const handleToggleTaskCompletion = useCallback(
    (id: number) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        }
        return task;
      });
      setTasks(newTasks);
    },
    [tasks]
  );

  return (
    <div className="App">
      <Header
        onCreateNewTask={handleCreateNewTask}
        onTaskChanged={handleTaskChanged}
        task={task}
      />
      <Tasks
        onRemoveTask={handleRemoveTask}
        onToggleTaskCompletion={handleToggleTaskCompletion}
        tasks={tasks}
      />
    </div>
  );
}

export { App };
