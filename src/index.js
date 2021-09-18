import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './state/Provider'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom'

 import routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Switch>
          {routes.map((route, i) => {
           return <Route {...route} key={i} />
           })
           }
          
          {/*<Route exact path="/" component={index} />>
          <Route exact path="/details" component={details} />*/}
        </Switch>
      </Router>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
