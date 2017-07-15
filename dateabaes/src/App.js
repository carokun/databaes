import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { StatusBar } from 'react-native'
import reducers from './reducers';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import RegisterAuth from './components/register/RegisterAuth';
import RegisterBasicQuestions from './components/register/RegisterBasicQuestions';
import RegisterQuizHome from './components/register/RegisterQuizHome';
import RegisterQuizQuestion from './components/register/RegisterQuizQuestion';
import Matches from './components/main/Matches';
import Messages from './components/main/Messages';
import SwipeScreen from './components/main/SwipeScreen';
import RegisterEndQuiz from './components/register/RegisterEndQuiz';
import RegisterFuckedUp from './components/register/RegisterFuckedUp';
import HomeScreen from './components/HomeScreen';


class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBj2hxptaZg-iGe9ZM1d38I_NipR8oglQE",
      authDomain: "manager-7adf2.firebaseapp.com",
      databaseURL: "https://manager-7adf2.firebaseio.com",
      projectId: "manager-7adf2",
      storageBucket: "",
      messagingSenderId: "531421181933"
    };
    firebase.initializeApp(config);
  }

  render() {
    StatusBar.setBarStyle('light-content', true)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

const Navigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  RegisterQuizHome: {
    screen: RegisterQuizHome,
    navigationOptions: {
      header: null
    }
  },
  RegisterQuizQuestion: {
    screen: RegisterQuizQuestion,
    navigationOptions: {
      header: null
    }
  },
  RegisterAuth: {
    screen: RegisterAuth,
    navigationOptions: {
      header: null
    }
  },
  RegisterBasicQuestions: {
    screen: RegisterBasicQuestions,
    navigationOptions: {
      header: null
    }
  },
  Matches: {
    screen: Matches,
    navigationOptions: {
      header: null
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      header: null
    }
  },
  SwipeScreen: {
    screen: SwipeScreen,
    navigationOptions: {
      header: null
    }
  },
  RegisterEndQuiz: {
    screen: RegisterEndQuiz,
    navigationOptions: {
      header: null
    }
  },
  RegisterFuckedUp: {
    screen: RegisterFuckedUp,
    navigationOptions: {
      header: null
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
}, {initialRouteName: 'HomeScreen'});

export default App;
