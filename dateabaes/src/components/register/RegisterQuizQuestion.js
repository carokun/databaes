import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../../../public/css/styles.js';
import { connect } from 'react-redux';

import { questionAnswered, answerChanged } from '../../actions/RegisterActions'

const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class RegisterQuizQuestion extends Component {

  onSubmit() {
    this.props.questionAnswered(this.props.skillScore + 1, this.props.guessedAnswer, this.props.navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.terminalText}>{questions[this.props.skillScore]}</Text>
        <TextInput blurOnSubmit={true}
          onChangeText={(guessedAnswer) => this.props.answerChanged(guessedAnswer)}
          autoCapitalize="none" placeholder="~important!" style={styles.textInputG}
          editable={true} placeholderTextColor={'#9B9B9B'} selectionColor={'#F1A227'}
        />
        <TouchableOpacity style={styles.whiteBtn}
          onPress={() => this.onSubmit()}>
          <Text style={styles.btnTextDark}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasLost: state.register.hasLost,
    skillScore: state.register.skillScore,
    guessedAnswer: state.register.guessedAnswer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    questionAnswered: (questionNumber, guessedAnswer, navigation) => questionAnswered(dispatch, questionNumber, guessedAnswer, navigation),
    answerChanged: (guessedAnswer) => answerChanged(dispatch, guessedAnswer)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterQuizQuestion);
