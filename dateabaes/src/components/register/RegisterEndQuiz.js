import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider, TouchableOpacity, TextInput, Image, Animated, Easing } from 'react-native';
import styles from '../../../public/css/styles.js';
import { connect } from 'react-redux';


class RegisterEndQuiz extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { spinValue: new Animated.Value(0) }
  //
  //   Animated.timing(
  //     this.state.spinValue,
  //     {
  //       toValue: 1,
  //       duration: 3000,
  //       easing: Easing.linear
  //     }
  //   ).start()
  // }
  render() {
    // const spin = this.state.spinValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg']
    // })
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', flexDirection: 'row', marginLeft: 50}}>
          {/* REPLACE THE 10 WITH THE PERSON'S SCORE */}
          <Text style={styles.largeHeader}>You got a 10</Text>
          <Image
            style={{marginLeft: 10, marginBottom: 15}}
            source={require('../../../public/assets/hand.png')}
          />
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('RegisterAuth')} style={styles.beginQuiz}>
          <Text style={styles.btnTextDark}>this.getBaes()</Text>
        </TouchableOpacity>

          {/* <Animated.Image
            style={{transform: [{rotate: spin}] }}
            source={{uri: '../../../public/assets/mario.png'}} /> */}
        </View>
      )
    }
  }


  export default RegisterEndQuiz;
