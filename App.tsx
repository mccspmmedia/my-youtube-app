import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivatePage from './pages/PrivatePage';
import './styles.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/private" Component={PrivatePage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
