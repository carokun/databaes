import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Text } from 'react-native'
// import reducers from './reducers';
// import { StackNavigator } from 'react-navigation';
// import Login from './components/Login';
import RegisterAuth from './components/register/RegisterAuth';
// import RegisterBasicQuestions from './components/register/RegisterBasicQuestions';
// import RegisterQuizHome from './components/register/RegisterQuizHome';
// import RegisterQuizQuestion from './components/register/RegisterQuizQuestion';
// import Matches from './components/main/Matches';
// import Messages from './components/main/Messages';
// import SwipeScreen from './components/main/SwipeScreen';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBj2hxptaZg-iGe9ZM1d38I_NipR8oglQE",
      authDomain: "manager-7adf2.firebaseapp.com",
      databaseURL: "https://manager-7adf2.firebaseio.com",
      projectId: "manager-7adf2",
      storageBucket: "manager-7adf2.appspot.com",
      messagingSenderId: "531421181933"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(() => [], {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RegisterAuth />
      </Provider>
    );
  }
}

// const Navigator = StackNavigator({
//   RegisterAuth: {
//     screen: RegisterAuth,
//   }
// }, {initialRouteName: 'RegisterAuth'});

export default App;
