import React, { Component } from 'react'
import io from 'socket.io-client'

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
      <form>
        <input type="text" onChange={this.emitChange} />
        <br />
        <p>This is what's being typed nigga : {this.state.message}</p>
      </form>
    )
  }
}
