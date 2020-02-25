import React from 'react'

export default function ToDoneItem(props) {

    const data = props.item
    return (
        <div className= "todones-item" onClick={() => props.changeStatus(props.index)}>
            <p>{data.text}</p>
            <div className="actions">
                <button className="btn">
                    &#8635;
                </button>
            </div>
            
        </div>
    )
}

