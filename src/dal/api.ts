
export type TaskDetailsData = {
    id: string;
    attributes: taskDetailsDto
}
type taskDetailsDto = {
    title: string;
    boardTitle: string;
    description: null | string;
}

export type GetTaskOutput = {
    data: TaskDetailsData
}
export const getTask = (boardId: string | null, selectedTaskId: string | null) => {
    const promise: Promise<GetTaskOutput> = fetch(
        `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`,
        {
            headers: {
                // "api-key": "752f0b9e-a84a-481c-b8a9-6b78d3f65309",
            },
        }
    )
        .then((res) => res.json())
    return promise;
}

type GlobalTaskListItemDto = {
    title: string;
    boardId: string;
    status: number;
    addedAt: string;
}

export type GlobalTaskListItemJsonApiData = {
    id: string;
    attributes: GlobalTaskListItemDto
}

export type GlobalTaskListResponse = {
 data: Array<GlobalTaskListItemJsonApiData>
}

 export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> =   fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
        headers: {
            // "api-key": "752f0b9e-a84a-481c-b8a9-6b78d3f65309",
        },
    })
        .then((res) => res.json())
    return promise;
}

