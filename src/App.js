import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux'
import RootContainer from './containers/rootContainer'

const store = createStore(rootReducer)

class App extends Component {

  // Still have to add redux-navigation to this component, but will be done later
  // we are trying to make the best in the shortest time

  render() {
    return (
      <Provider store={store}>
        <RootContainer  />
      </Provider>
    );
  }
}

export default App;
