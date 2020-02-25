import React, { Component } from 'react'
import "../css/App.scss"
import Navigation from './Navigation'
import ToDosContainer from './ToDosContainer'
import ToDonesContainer from './ToDonesContainer'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {id: 0, text:"Wash my face", done: false},
        {id: 1, text:"Walk the dog", done: false},
        {id: 2, text:"Pay the Rent", done: false},
        {id: 3, text:"Make a website", done: true},
        {id: 4, text:"Call my mom", done: true},
        {id: 5, text:"Finish watching the serie", done: true},
        {id: 6, text:"Make more money", done: true},
      ]
    }
  }

  changeStatus = (i) => {
    let newState = [...this.state.items]
    
    newState.map(el => {
      if(el.id === i) {
        el.done = !el.done
        return el
      } else {
        return el
      }

    })

    this.setState({
      items: newState
    })
  }
  
  
  render() {
    
    const toDos = this.state.items.filter(el => !el.done)
    const toDones = this.state.items.filter(el => el.done)

    return (
      <div className="app">
        <Navigation/>
        <ToDosContainer items={toDos} changeStatus={this.changeStatus}/>
        <ToDonesContainer items={toDones} changeStatus={this.changeStatus}/>
      </div>
    )
  }
}
