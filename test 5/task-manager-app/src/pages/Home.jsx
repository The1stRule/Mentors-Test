import { useContext } from "react";
import AddTasks from "../components/AddTasks.jsx";
import { AuthContext } from "../context/AuthProvider.jsx";
import Task from "../components/Task.jsx";

const Home = () => {
    const { curUser, setCurUser, deleteAllComplited } = useContext(AuthContext);
    return (
        <main>
            <header>
                <h1>Welcome {curUser.username}</h1>
                <button onClick={() => setCurUser({})}>Log out</button>
            </header>
            <AddTasks />
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Is Complite</th>
                        <th>Task</th>
                        <th>Edit</th>
                        <th>Del</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        curUser.taskList.map((curValue, index) => {
                            return (
                                <Task key={index} taskInfo={curValue} num={index + 1} />
                            );
                        })
                    }
                </tbody>
            </table>
            <button id="delbtn" onClick={deleteAllComplited}>Delete all complited task</button>
        </main>
    );
}

export default Home;