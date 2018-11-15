import React, { Component } from 'react'
import io from 'socket.io-client'

import Sidebar from './Sidebar'

const socket = io('http://localhost:4000')

export default class App extends Component {
  state = {
    message: ''
  }
  componentDidMount = () => {
    socket.on('chatReturn', data => {
      this.setState({
        message: data
      })
    })
  }

  emitChange = e => {
    socket.emit('chat', JSON.stringify(e.target.value))
  }
  render() {
    return (
      <div className="grid-container">
        <div className="SidebarArea">
          <Sidebar currentUsers={[]} />
        </div>
        <div className="MessagesArea">Messages will show here</div>
        <form className="TypingArea">
          <input type="text" onChange={this.emitChange} />
          <br />
          <p>This is what's being typed nigga : {this.state.message}</p>
        </form>
      </div>
    )
  }
}
