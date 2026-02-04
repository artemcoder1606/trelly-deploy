import {TaskItem} from "./TaskItem.tsx";
import {useTasks} from "../bll/useTasks.tsx";
import styles from "./TaskItems.module.css"

type Props = {
    taskId: string | null;
    setSelectedTaskId: (taskId: null | string) => void;
    setBoardId: (boardId:  null | string) => void;

}

export function TasksList({setSelectedTaskId, setBoardId, taskId}: Props) {
    const {tasks} = useTasks();

    if (tasks === null) {
        return <div>...loading</div>;
    }

    const onTaskSelected = (taskId: string, boardId: string) => {
        setSelectedTaskId(taskId)
        setBoardId(boardId)
    }

    const clearTasks = () => {
        setSelectedTaskId(null)
        setBoardId(null)
    }
    return (
        <div>
            <button onClick={clearTasks}>Reset</button>
            <div className={styles.container}>
                <div className={styles.tasks}>
                    {tasks.map((task) => (
                        <TaskItem onTaskSelected={onTaskSelected} isSelected={task.id === taskId} task={task}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

