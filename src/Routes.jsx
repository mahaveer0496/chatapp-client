import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import ChatPage from './ChatPage'

function Routes() {
  return (
    <Switch>
      {RoutesArr.map(route => (
        <Route {...route} component={route.component} />
      ))}
    </Switch>
  )
}

const RoutesArr = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/chat',
    exact: true,
    component: ChatPage
  }
]
export default Routes
