// import {useEffect, useState} from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import React from "react";
// import {UserCard} from "./ui/UserCard"
//
//
// const [taskId, setTaskId] = useState(null);
// const [boardId, setBoardId] = useState(null);
// const [tasks, setTasks] = useState(null);
// const [status, setStatus] = useState(0);
//
// React.useEffect(() => {
//     fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
//         headers: {
//             "api-key": "752f0b9e-a84a-481c-b8a9-6b78d3f65309",
//         },
//     })
//         .then((res) => res.json())
//         .then((json) => setTasks(json.data));
// }, []);
// React.useEffect(() => {
//     if (!boardId && !taskId) {
//         return
//     }
//     fetch(
//         `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`,
//         {
//             headers: {
//                 "api-key": "752f0b9e-a84a-481c-b8a9-6b78d3f65309",
//             },
//         }
//     )
//         .then((res) => res.json())
//         .then((json) => {
//             setSelectedTask(json.data);
//         });
// }, [taskId]);
//
// if (tasks === null) {
//     return <div>...loading</div>;
// }
//
// return (
//     <div style={{display: "flex", gap: "30px"}}>
//         <div>
//             {tasks.map((task, index) => (
//                 <div
//                     onClick={() => {
//                         setTaskId(task.id);
//                         setBoardId(task.attributes.boardId);
//                     }}
//                     style={{
//                         border: task.id === taskId ? "1px solid red" : "",
//                     }}
//                 >
//                     <h3>{task.attributes.title}</h3>
//                     <input
//                         type="checkbox"
//                         checked={task.attributes.status === 0 ? false : true}
//                     />
//                     <strong>Дата</strong>{" "}
//                     <div>{new Date(task.attributes.addedAt).toLocaleString()}</div>
//                 </div>
//             ))}
//         </div>
//         <div>
//             <h3>Details</h3>
//             <p>{taskId && !selectedTask && <span>loading...</span>}</p>
//             <p>
//                 {taskId && selectedTask && selectedTask.id !== taskId && (
//                     <span>loading...</span>
//                 )}
//             </p>
//
//             {selectedTask && selectedTask.id === taskId && (
//                 <div>
//                     <p>{selectedTask.attributes.title}</p>
//                     <p>{selectedTask.attributes.boardTitle}</p>
//                     <p>
//                         {selectedTask.attributes.description
//                             ? selectedTask.attributes.description
//                             : "No description"}
//                     </p>
//                 </div>
//             )}
//         </div>
//     </div>
// );
// }
//
// export default App;
