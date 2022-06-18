import React, { ChangeEvent, FormEvent } from "react";

import logo from "../../assets/images/logo.svg";
import plus from "../../assets/images/plus.svg";

import styles from "./styles.module.css";

type HeaderProps = {
  onCreateNewTask: (event: FormEvent) => void;
  onTaskChanged: (e: ChangeEvent<HTMLInputElement>) => void;
  task: string;
};

export const Header: React.FC<HeaderProps> = ({
  onCreateNewTask,
  onTaskChanged,
  task,
}) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="ToDo List" />
        <form className={styles.formNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            name="task"
            value={task}
            onChange={onTaskChanged}
          />
          <button type="submit" onClick={onCreateNewTask}>
            Criar <img src={plus} alt="plus" />
          </button>
        </form>
      </div>
    </header>
  );
};
