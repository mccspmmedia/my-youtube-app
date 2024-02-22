import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivatePage from './pages/PrivatePage';
import './styles.css';

const App: React.FC = () => {
  return (
    <Provider store={store} children={undefined}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/private" Component={PrivatePage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
