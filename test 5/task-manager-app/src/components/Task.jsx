import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";

const Task = ({ taskInfo, num }) => {
    const { deleteTask, handleCheckbox, editTask } = useContext(AuthContext);
    const [newTask, setNewTasl] = useState(taskInfo.task);
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(false);
        editTask(taskInfo.id, newTask);
    }
    return (
        <tr className="task-div">
            <td>{num}</td>
            <td>
                {
                    taskInfo.isComplite ? <input type="checkbox" checked onChange={() => handleCheckbox(taskInfo.id)} /> :
                    <input type="checkbox" onChange={() => handleCheckbox(taskInfo.id)} />
                }
            </td>
            {
                isEdit? <td><input type="text" value={newTask} onChange={(e) => setNewTasl(e.target.value)} /></td> : 
                <td style={{ textDecoration: taskInfo.isComplite ? "line-through" : "none" }}>{taskInfo.task}</td>
            }
            <td>{isEdit? <button onClick={handleEdit}>Save</button> : 
            <button onClick={() => setIsEdit(true)}>Edit</button>}</td>

            <td><button onClick={() => deleteTask(taskInfo.id)}>Delete</button></td>
        </tr>
    );
}

export default Task;