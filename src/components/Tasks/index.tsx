import React, { useMemo } from "react";
import { Task } from "../Task";

import { TasksEmpty } from "../TasksEmpty";

import styles from "./styles.module.css";

type Task = {
  id: number;
  title: string;
  isComplete: boolean;
};

type TasksProps = {
  onRemoveTask: (id: number) => void;
  onToggleTaskCompletion: (id: number) => void;
  tasks: Task[];
};

export const Tasks: React.FC<TasksProps> = ({
  onRemoveTask,
  onToggleTaskCompletion,
  tasks,
}) => {
  const totalCompleted = useMemo(() => {
    if (tasks.length > 0) {
      const total = tasks.reduce((acumulador, task) => {
        if (task.isComplete) {
          acumulador++;
        }
        return acumulador;
      }, 0);

      return `${total} de ${tasks.length}`;
    }

    return "0";
  }, [tasks]);

  return (
    <main className={styles.tasksContainer}>
      <div className={styles.tasksInfo}>
        <p className={styles.tasksCreated}>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p className={styles.tasksDone}>
          Concluídas <span>{totalCompleted}</span>
        </p>
      </div>
      {tasks.length > 0 ? (
        <section className={styles.tasksListContainer}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              onRemoveTask={onRemoveTask}
              onToggleTaskCompletion={onToggleTaskCompletion}
              task={task}
            />
          ))}
        </section>
      ) : (
        <TasksEmpty />
      )}
    </main>
  );
};
