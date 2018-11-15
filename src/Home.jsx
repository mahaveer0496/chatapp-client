import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }
  submitHandler = e => {
    e.preventDefault()
    this.props.history.push('/chat')
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
