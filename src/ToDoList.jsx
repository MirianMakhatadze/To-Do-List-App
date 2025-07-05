import React, {useState} from 'react';

function ToDoList () {
    const [toDoList, setToDoList] = useState(["Example 1", "Example 2", "Example 3"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== ""){
            setToDoList(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        setToDoList(toDoList.filter((_, i) => i !== index))
    }

    function moveTaskUp (index) {
        if (index > 0){
            const updatedTasks = [...toDoList];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setToDoList(updatedTasks);
        }
    }

    function moveTaskDown (index) {
        if (index < toDoList.length - 1){
            const updatedTasks = [...toDoList];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setToDoList(updatedTasks);
        }

    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                <button className="add-task" onClick={addTask}>Add</button>
            </div>
            <ol>
                {toDoList.map((task, index) => (
                    <li key={index}>
                        {task}
                        <div>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>Move Down</button>
                        </div>
                    </li>
                ))}
            </ol>

        </div>
    )

}

export default ToDoList;