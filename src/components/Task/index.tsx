import React from "react";
import { Trash } from "phosphor-react";

import styles from "./styles.module.css";

type Task = {
  id: number;
  title: string;
  isComplete: boolean;
};

type TaskProps = {
  onRemoveTask: (id: number) => void;
  onToggleTaskCompletion: (id: number) => void;
  task: Task;
};

export const Task: React.FC<TaskProps> = ({
  onRemoveTask,
  onToggleTaskCompletion,
  task,
}) => {
  return (
    <div className={styles.taskContainer}>
      <label className={styles.checkContainer}>
        <input
          className={styles.check}
          type="checkbox"
          name=""
          id=""
          onChange={() => onToggleTaskCompletion(task.id)}
        />
        <span className={styles.checkmark}></span>
      </label>
      <p
        className={`${styles.taskText}${
          task.isComplete ? ` ${styles.taskCompleted}` : ""
        }`}
      >
        {task.title}
      </p>
      <button
        title="Deletar tarefa"
        type="button"
        onClick={() => onRemoveTask(task.id)}
      >
        <Trash size={15} />
      </button>
    </div>
  );
};
