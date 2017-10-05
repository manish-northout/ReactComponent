import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Route} from 'react-router-dom';
import {Router, Switch} from 'react-router';
import { createHashHistory } from 'history';

import LandingLayout from './layouts/LandingLayout.jsx';
import App from './containers/App'
import reducer from './reducers'
import Login from './containers/Login.jsx'
//import Browse from './containers/Browse.jsx'
import Profile from './containers/Profile.jsx'


const store = createStore(reducer);
const customHistory = createHashHistory();

render(
  <Provider store = {store}>
      <Router history={customHistory}>
          <div>
              <Switch>
                  <Route exact path='/' render={() => <LandingLayout><App /></LandingLayout>}/>
                  <Route exact path='/login' render={() => <LandingLayout><Login /></LandingLayout>}/>
                  <Route exact path='/profile' render={() => <LandingLayout><Profile /></LandingLayout>} />
              </Switch>
          </div>
      </Router>
  </Provider>,
  document.getElementById('root')
)
