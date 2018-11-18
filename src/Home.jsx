import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { loginUser } from './utils/postRequestHandler'

export default class Home extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  state = {
    error: false
  }
  submitHandler = e => {
    e.preventDefault()
    const { username } = e.target.elements
    loginUser(username.value).then(data => {
      if (data.error) {
        this.setState({
          error: true
        })
      } else {
        this.props.history.push('/chat')
      }
    })
  }

  render() {
    const { submitHandler } = this
    const { error } = this.state
    return (
      <form onSubmit={submitHandler}>
        <input type="text" name="username" />
        {error && <p className="helper">Please choose another name</p>}
        <input type="submit" value="Proceed" />
      </form>
    )
  }
}
