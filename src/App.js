import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/income">
            <IncomePage />
          </Route>
          <Route path="/expense">
            <ExpensePage />
          </Route>
          {/* Default route */}
          <Route path="/">
            <IncomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
