import {useTasksDetails} from "../bll/useTaskDetails.tsx";
import styles from  './TaskDetails.module.css'

type Props = {
    selectedTaskId: string | null;
    boardId: string | null;
}


export function TaskDetails({boardId, selectedTaskId}: Props) {
    const {selectedTask} = useTasksDetails(boardId, selectedTaskId)

    return (
        <div className={styles.task}>
            <h3>Details</h3>
            <p>{selectedTaskId && !selectedTask && <span>loading...</span>}</p>
            <p>{!selectedTaskId && <span>Task not selected</span>}</p>
            <p>
                {selectedTaskId && selectedTask && selectedTask.id !== selectedTaskId && (
                    <span>loading...</span>
                )}
            </p>

            {selectedTask && selectedTask.id === selectedTaskId && (
                <div>
                    <p>{selectedTask.attributes.title}</p>
                    <p>{selectedTask.attributes.boardTitle}</p>
                    <p>
                        {selectedTask.attributes.description
                            ? selectedTask.attributes.description
                            : "No description"}
                    </p>
                </div>
            )}
        </div>
    )
}