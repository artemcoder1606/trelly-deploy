import React from "react";
import {getTask, type TaskDetailsData} from "../dal/api.ts";

export const useTasksDetails = (boardId: string | null, selectedTaskId: string | null) => {
    const [selectedTask, setSelectedTask] = React.useState<TaskDetailsData | null>(null);

    React.useEffect(() => {
        if (!boardId && !selectedTaskId) {
            return
        }
        getTask(boardId, selectedTaskId)
            .then((json) => {
                setSelectedTask(json.data);
            });
    }, [selectedTaskId]);
    return {selectedTask};
}