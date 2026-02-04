import React from "react";
import {TasksList} from "./ui/TasksList.tsx";
import {TaskDetails} from "./ui/TaskDetails.tsx";
import styles from  "./MainPage.module.css"


const useTaskSelection = () => {
    const [selectedTaskId, setSelectedTaskId] = React.useState<string | null>(null);
    const [boardId, setBoardId] = React.useState<string | null>(null);
    return {selectedTaskId, setSelectedTaskId, boardId, setBoardId};
}

export function MainPage() {

  const {selectedTaskId, setSelectedTaskId, boardId, setBoardId} = useTaskSelection();
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <TasksList setSelectedTaskId={(taskId: string | null) => setSelectedTaskId(taskId)}
                        taskId={selectedTaskId}
                       setBoardId={(boardId:string | null) => setBoardId(boardId)}/>
            <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId}                         />
        </div>
    </div>
}