import React, { useReducer } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DispatchContext, StateContext, defaultStore } from './store'
import { stateReducer } from './reducer/DataReducer'

import HomePage from './pages/home'
import ServicePage from "./pages/services";
import FaqPage from './pages/faq'
import ContactsPage from './pages/contacts';
import Basket from './pages/basket'
import AnimalDiary from './pages/animalDiary';

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
            <Route path="/faq-page" component={FaqPage} />
            <Route path="/contacts-page" component={ContactsPage} />
            <Route path="/basket-page" component={Basket} />
            <Route path="/animal-diary" component={AnimalDiary} />

            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />

          </Switch>
        </Router>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
