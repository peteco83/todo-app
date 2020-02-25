import React from 'react'
import ToDoneItem from './ToDoneItem'

export default function ToDonesContainer(props) {

    /* store props in variable*/ 

    const toDones = props.items 

    // map through the items' array and return list component

    const toDonesItems = toDones.map((el, i)=> {
        return (
            <ToDoneItem item={el} key={el.text} changeStatus={props.changeStatus} index={el.id}/>
        )
    })

    return (
        <div className="todones-container">
            <h3>Backlog</h3>
            {toDonesItems}

            
        </div>
    )
}
