import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class Sidebar extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    const { currentUsers } = this.props
    if (currentUsers.length === 0) return <p>Oops no one logged in!</p>
    return (
      <Fragment>
        {currentUsers.map(cUser => (
          <p>{cUser.name}</p>
        ))}
      </Fragment>
    )
  }
}
