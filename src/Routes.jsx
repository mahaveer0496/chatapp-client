import { Switch, Route } from 'react-router-dom'
import React from 'react'

import HomePage from './HomePage'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
    </Switch>
  )
}

export default Routes
