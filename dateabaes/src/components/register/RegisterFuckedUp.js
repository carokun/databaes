import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider, TouchableOpacity, TextInput, Image, Animated, Easing } from 'react-native';
import styles from '../../../public/css/styles.js';
import { connect } from 'react-redux';


class RegisterFuckedUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', flexDirection: 'row', marginLeft: 50}}>
          <Text style={[styles.largeHeader, {marginRight: 40, fontSize: 17}]}>Sorry, you scored too low. We don't accept noobs.</Text>
        </View>
        <Text style={{fontSize: 40, marginLeft: '43%', marginTop: 20}}>👎</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={styles.beginQuiz}>
          <Text style={styles.btnTextDark}>cd ..</Text>
        </TouchableOpacity>
        </View>
      )
    }
  }


  export default RegisterFuckedUp;
