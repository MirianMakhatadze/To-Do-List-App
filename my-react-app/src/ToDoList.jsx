import React, {useState} from 'react';

function ToDoList () {
    const [toDoList, setToDoList] = useState(["Eat breakfast", "Write code", "Go to the gym"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        setToDoList([...toDoList, newTask])
        setNewTask("")
    }

    function deleteTask(index) {
        setToDoList(toDoList.filter((_, i) => i !== index))
    }

    function moveTaskUp (index) {

    }

    function moveTaskDown (index) {

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