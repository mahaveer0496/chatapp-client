import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:4000')

export default class HomePage extends Component {
  state = {
    message: [{}],
    limit: 10
  }
  componentDidMount = () => {
    socket.emit('getAllMessages', this.state.limit)
    socket.on('getAllMessages', data => {
      console.log(data)
      this.setState({
        message: [...this.state.message, ...data]
      })
    })
    socket.on('newMessage', data => {
      console.log(data)
      this.setState({
        message: [...this.state.message, data]
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

  getMoreMessages = e => {
    const { limit } = this.state
    socket.emit('getAllMessages', limit)
  }
  render() {
    return (
      <div className="grid-container">
        <div className="SidebarArea" />
        <div className="MessagesArea">
          {this.state.message.map((m, i) => (
            <p className="message" key={i}>
              {m.text}
            </p>
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
          <button type="button" onClick={this.getMoreMessages}>
            get more messages
          </button>
        </form>
      </div>
    )
  }
}
