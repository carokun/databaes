import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider, TouchableOpacity, TextInput, Image, Animated, Easing } from 'react-native';
import styles from '../../../public/css/styles.js';
import TypeWriter from 'react-native-typewriter';

class RegisterQuizHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      typingDone: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({typingDone: true}), 15500);
  }

  render() {
    let text = "Not all programmers were created equally. In Dateabaes, you will only get to initiate messages with matches if you have a higher score. Otherwise, you will need to wait patiently. Begin the quiz to know your worth."
    return (
      <View style={styles.container}>
        <View style={styles.rowAlign}>
          <Text style={styles.terminalText}>~master:</Text>
          <TypeWriter typing={1} delayMap={[{ at: 0, delay: -1000 }]} fixed={true} style={styles.typeWriter}>{text}</TypeWriter>
        </View>
        {(this.state.typingDone)?
        (<View style={styles.startQuizContainer}><TouchableOpacity onPress={()=>this.props.navigation.navigate('RegisterQuizQuestion')} style={styles.beginQuiz}>
          <Text style={styles.btnTextDark}>npm start hackin'</Text>
        </TouchableOpacity></View>):(<Text></Text>)
        }
      </View>

    )
  }
}

export default RegisterQuizHome;
