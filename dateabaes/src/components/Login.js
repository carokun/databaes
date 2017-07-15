import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../../public/css/styles.js';
import { connect } from 'react-redux';

import { loginUser, usernameChange, passwordChange } from '../actions/LoginActions'
import { getMatches } from '../actions/MainActions';

class Login extends Component {
  click(a) {
    console.log(a);
  }
  alert() {
    alert("Roses are #f00, Violets are #00f, show me your bar and I'll give you my foo.")
  }

  loginButtonPress(username, password) {
    this.props.getMatches(username, password, () => this.props.loginUser(username, password, this.props.navigation));
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../public/assets/dblogo.png')}
        />
        <View style={styles.taglineContainer}>
          <Text style={styles.taglineW}>// </Text>
          <Text style={styles.taglineP}>TODO</Text>
          <Text style={styles.taglineW}>: You</Text>
        </View>
        <Text style={styles.questionText1}>Username</Text>
          <TextInput blurOnSubmit={true}
            value={this.props.username}
            onChangeText={(username) => this.props.usernameChange(username)}
            autoCapitalize="none" maxLength={20} placeholder="~plz use real github username" style={styles.textInputG}
            editable={true} placeholderTextColor={'#9B9B9B'} keyboardAppearance='dark' selectionColor={'#F1A227'}/>
        <Text style={styles.questionText1}>Password</Text>
          <TextInput blurOnSubmit={true}
            value={this.props.password}
            onChangeText={(password) => this.props.passwordChange(password)}
            autoCapitalize="none" secureTextEntry={true} placeholder="~important!" style={styles.textInputG}
            editable={true} placeholderTextColor={'#9B9B9B'} selectionColor={'#F1A227'}/>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnRegister}
            onPress={() => this.props.navigation.navigate('RegisterQuizHome')}>
            <Text style={styles.btnTextLight}>R391s73R</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogin}
            onPress={() => this.loginButtonPress(this.props.username, this.props.password)}>
            <Text style={styles.btnTextDark}>L091n</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTroll} onPress={this.alert}>
            <Text style={styles.btnTextDark}>0x594F</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    password: state.login.password
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password, navigation) => dispatch(loginUser(dispatch, username, password, navigation)),
    getMatches: (username, password, loginUser) => dispatch(getMatches(dispatch, username, password, loginUser)),
    usernameChange: (username) => usernameChange(dispatch, username),
    passwordChange: (password) => passwordChange(dispatch, password)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
