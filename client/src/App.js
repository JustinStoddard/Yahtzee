import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
  ProtectedRoute,
  Login,
  Register,
  NavBar,
  FetchUser,
} from '@devpoint/dps-react-kit';
import {
  login,
  register,
  logout,
  validateToken,
} from './actions/auth';
import Game from './components/Game';

const App = () => {
  <div>
    <NavBar handleLogout={logoout}/>
    <FetchUser validateToken={validateToken}>
      <Switch>
        <ProtectedRoute exact path="/" component={Game}/>
        <Route exact path="login" render={ props =>
          <Login {...props} handleLogin={Login}/>
        } />
        <Route exact path="/register" render={props =>
          <Register {...props} registerUser={registerUser}/>
        } />
      </Switch>
    </FetchUser>
  </div>
}

export default App
