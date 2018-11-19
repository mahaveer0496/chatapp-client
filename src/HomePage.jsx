import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:4000')

export default class HomePage extends Component {
  state = {
    message: []
  }
  componentDidMount = () => {
    socket.on('new message', data => {
      this.setState({
        message: [...this.state.message, data.message]
      })
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, message } = e.target.elements
    socket.emit('newMessage', {
      username: username.value,
      message: message.value
    })
  }

  emitChange = e => {
    socket.emit('chat', JSON.stringify(e.target.value))
  }
  render() {
    return (
      <div className="grid-container">
        <div className="SidebarArea" />
        <div className="MessagesArea">
          {this.state.message.map((m, i) => (
            <p key={i}>{m}</p>
          ))}
        </div>
        <form className="TypingArea" onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="User Name" />
          <input
            type="text"
            name="message"
            onChange={this.emitChange}
            placeholder="Message"
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}
