import React from 'react'
import ToDoItem from '../components/ToDoItem'

export default function ToDosContainer(props) {
    
    const toDos = props.items   

    const toDoItems = toDos.map((el, i)=> {
        return (
            <ToDoItem item={el} key={el.text} changeStatus={props.changeStatus} index={el.id}/>
        )
    })

    return (
        <div className="todos-container">
            <form className = "todo-form">
                <label className="input-item">
                    <input type="text" name = "todo"/>
                </label>
                <input type="submit" className="btn" value="ADD"/>
            </form>
            <div className="todos">
                <h3>To Do</h3>
                {toDoItems}
            </div>
        </div>
    )
}
