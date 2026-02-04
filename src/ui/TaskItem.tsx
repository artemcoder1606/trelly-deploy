import type {GlobalTaskListItemJsonApiData} from "../dal/api.ts";
import clsx from "clsx";
import styles from  './TaskItem.module.css'



type Props = {
    isSelected: boolean;
    onTaskSelected: (taskId: string, boardId: string) => void;
    task: GlobalTaskListItemJsonApiData
}


export function TaskItem({ isSelected, task, onTaskSelected} : Props) {
    const className = clsx({[styles.task]:true,
        [styles.selected]:isSelected
    });

    return (
        <div className={className}
            onClick={() => {
                onTaskSelected(task.id, task.attributes.boardId)
            }}
        >
            <h3>{task.attributes.title}</h3>
            <input
                type="checkbox"
                checked={task.attributes.status === 0 ? false : true}
            />
            <strong>Дата</strong>{" "}
            <div>{new Date(task.attributes.addedAt).toLocaleString()}</div>
        </div>
    )
}