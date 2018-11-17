import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { loginUser } from './utils/postRequestHandler'

export default class Home extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  submitHandler = e => {
    e.preventDefault()
    const { username } = e.target.elements
    console.log(username.value)
    loginUser(username.value).then(data => {
      console.log(data)
    })
    // this.props.history.push('/chat')
  }

  render() {
    const { submitHandler } = this

    return (
      <form onSubmit={submitHandler}>
        <input type="text" name="username" />
        <input type="submit" value="Proceed" />
      </form>
    )
  }
}
