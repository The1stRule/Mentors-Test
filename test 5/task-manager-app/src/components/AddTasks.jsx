import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";

const AddTasks = () => {
    const { handleSubmit, addTask } = useContext(AuthContext);
    return (
        <form onSubmit={(e) => handleSubmit(e, addTask)}>
            <input type="text" name="task" placeholder="Enter a task" required />
            <button>Add Task</button>
        </form>
    );
}

export default AddTasks;