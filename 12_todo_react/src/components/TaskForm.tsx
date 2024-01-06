import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from "./TaskForm.module.css"
import { ITask } from '../interfaces/ITask'

interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    task?: (ITask | null);
    handleUpdate?(id: number, title: string, difficulty: number): void
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(-1);

    useEffect(() => {
        if(task) {
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task]);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(handleUpdate) {
            handleUpdate(id, title, difficulty);
        } else {
            const id = Math.floor(Math.random() * 1000);
            const newTask: ITask = {id, title, difficulty};
            
            if (setTaskList !== undefined)
                setTaskList([...taskList, newTask]);

            setTitle("");
            setDifficulty(-1);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title") {
            setTitle(e.target.value);
        } else {
            if (!Number.isNaN(Number(e.target.value)))
                setDifficulty(parseInt(e.target.value));
            else
                setDifficulty(-1);
        }
    }  
  
    return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Titulo:</label>
            <input 
                type="text" 
                name='title' 
                placeholder='"Titulo da tarefa.' 
                value={title}
                required
                onChange={handleChange}
            />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input 
                type="text" 
                name='difficulty' 
                placeholder='"Dificuldade da tarefa.' 
                value={(difficulty < 0) ? '' : difficulty}
                required
                onChange={handleChange}
            />
        </div>
        <input type="submit" value={btnText}/>
    </form>
  )
}

export default TaskForm