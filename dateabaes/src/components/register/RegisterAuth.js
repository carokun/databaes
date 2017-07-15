import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../public/css/styles.js';
import { connect } from 'react-redux';
import firebase from 'firebase'

import { registerUser, usernameChange, passwordChange, fnameChange, lnameChange } from '../../actions/RegisterActions'

class RegisterAuth extends React.Component {

  onPress() {
    // this.props.registerUser(this.props.username, this.props.password, this.props.fname, this.props.lname);
    this.props.navigation.navigate('RegisterBasicQuestions');
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.questionText1}>
        Github Username</Text>
      <TextInput blurOnSubmit={true}
      onChangeText={(username) => this.props.usernameChange(username)}
      maxLength={15} placeholder="~username" style={styles.textInput}
      editable={true} placeholderTextColor={'#9B9B9B'} selectionColor={'#56C100'}/>

      <Text style={styles.questionText1}>
        Password</Text>
      <TextInput blurOnSubmit={true}
      onChangeText={(password) => this.props.passwordChange(password)}
      maxLength={15} secureTextEntry={true} placeholder="~bonus points of you use ASCII" style={styles.textInput}
      editable={true} placeholderTextColor={'#9B9B9B'} selectionColor={'#56C100'}/>

      <Text style={styles.questionText1}>
        First Name</Text>
      <TextInput blurOnSubmit={true}
      onChangeText={(fname) => this.props.fnameChange(fname)}
      maxLength={15} style={styles.textInput}
      editable={true} placeholderTextColor={'#9B9B9B'} selectionColor={'#56C100'}/>

      <Text style={styles.questionText1}>
        Last Name</Text>
      <TextInput blurOnSubmit={true}
      onChangeText={(lname) => this.props.lnameChange(lname)}
      maxLength={15} style={styles.textInput}
      editable={true} placeholderTextColor={'#9B9B9B'} selectionColor={'#56C100'}/>

      <TouchableOpacity style={styles.whiteBtn} onPress={() => this.onPress()}>
        <Text style={styles.btnTextLight}>Next</Text>
      </TouchableOpacity>
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    username: state.register.username,
    password: state.register.password,
    fname: state.register.fname,
    lname: state.register.lname
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (username, password, fname, lname) => dispatch(registerUser(dispatch, username, password, fname, lname)),
    usernameChange: (username) => usernameChange(dispatch, username),
    passwordChange: (password) => passwordChange(dispatch, password),
    fnameChange: (fname) => fnameChange(dispatch, fname),
    lnameChange: (lname) => lnameChange(dispatch, lname)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAuth);
