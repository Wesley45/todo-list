import React from "react";

import clipboard from "../../assets/images/clipboard.svg";

import styles from "./styles.module.css";

export const TasksEmpty: React.FC = () => {
  return (
    <div className={styles.tasksEmptyContainer}>
      <img src={clipboard} alt="Clipboard" />
      <div className={styles.tasksEmptyInfo}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
};
