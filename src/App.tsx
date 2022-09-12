import React, { FC } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './services/store';

import BasicLayout from './components/BasicLayout';

import Accounts from './pages/Accounts';

const App: FC = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path='/' element={<Navigate to={'/accounts'} />} />
          <Route path='/accounts/*' element={<Accounts />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);

export default App;
