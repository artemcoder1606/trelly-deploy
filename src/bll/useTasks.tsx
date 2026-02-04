import React, {useState} from "react";
import {getTasks, type GlobalTaskListItemJsonApiData} from "../dal/api.ts";

export const useTasks = () => {
    const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null);
    React.useEffect(() => {
        getTasks()
            .then((json) => setTasks(json.data));
    }, []);
    return {tasks};
}