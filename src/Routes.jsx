import { Switch, Route } from 'react-router-dom'
import React, { createContext, Component } from 'react'
import Home from './Home'
import ChatPage from './ChatPage'

class Routes extends Component {
  state = {
    users: []
  }
  updateUsers = user => {
    this.setState({
      users: [...this.state.users, user]
    })
  }

  render() {
    const { updateUsers } = this
    const { users } = this.state
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Home updateUsers={updateUsers} />}
        />
        <Route path="/chat" exact render={() => <ChatPage users={users} />} />
      </Switch>
    )
  }
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
