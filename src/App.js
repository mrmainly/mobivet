import React, { useReducer } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DispatchContext, StateContext, defaultStore } from './store/Index'
import { stateReducer } from './reducer/DataReducer'

import HomePage from './pages/home/homePage'
import ServicePage from "./pages/services/servicesPage";

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


const App = () => {
  const [state, dispatch] = useReducer(stateReducer, defaultStore)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/service-page" component={ServicePage} />
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
          </Switch>
        </Router>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
