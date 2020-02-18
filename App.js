import React  from 'react';
import TwitterLogin from './views/twitterLogin';
import LineLogin from './views/lineLogin';

import { Provider } from 'react-redux'
import store from './redux';

export default function App() {
    return (
      <Provider store={store}>
        <LineLogin/>
      </Provider>
    );
}