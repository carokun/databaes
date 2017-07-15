import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../../../public/css/styles.js';
import { connect } from 'react-redux';

import { questionAnswered, answerChanged } from '../../actions/RegisterActions'

const questions = [
      `    <script\r\n\t\t ???=\"https://dateabaes.com"\r\n\t ></script>\r\n\r\n    ??? = YOUR_ANSWER\r\n`,
      `    const myEmptyArray = [];\r\n\r\n    (myEmptyArray) === YOUR_ANSWER\r\n`,
      `    var man = [1];\r\n    var woman = [2];\r\n\r\n    (arr1.splice == arr2.splice)\r\n    === YOUR_ANSWER\r\n`,
      `    Stop the button’s default behaviour!\r\n\r\n    $('#button').on('click', event => {\r\n      ???\r\n    });\r\n`,
      `    app.get('/', (req, res, next) => {\r\n      req.test = true;\r\n      next();\r\n    });\r\n\r\n    app.get('/', (req, res) => {\r\n      if (req.test) {\r\n        res.send('A');\r\n      } else\r\n        res.send('B');\r\n      }\r\n    });\r\n\r\n    app.get('/', (req, res) => {\r\n      res.send('C');\r\n    });\r\n`,
      `    Which option is not vulnerable to\r\n    XSS (Cross Side Scripting)?\r\n\r\n    A: {{myFile.hbs}}\r\n    B: {{{myOtherFile.hbs}}}\r\n`,
      `    What is the following known as?\r\n\r\n    $.ajax(\"https://horizons-json-cors.s3.amazonaws.com/start.json\", {\r\n      success: function(resp) {\r\n        $.ajax(resp.nextURL, {\r\n          success: function(resp) {\r\n            $.ajax(resp.nextURL, {\r\n              success: function(resp) {\r\n                console.log('Done', resp);\r\n              }\r\n            });\r\n          }\r\n        });\r\n      }\r\n    });\r\n`,
      `    compute the following:\r\n\r\n    const f = () => (10);\r\n    const g = () => {10};\r\n\r\n    const answer = f() - g();\r\n`,
      `    fix the following code to calculate\r\n    the cost of buying one of each item\r\n    on the menu!\r\n\r\n    const theMenu = [\r\n      { item: \"hot dog\", seller: \r\n       \"Average Joe's\", price: 3 },\r\n      { item: \"pizza\", seller: \"The \r\n       Market\", price: 6 },\r\n      { item: \"ice cream\", seller: \r\n       \"Winterfell\", price: 10 }\r\n    ]\r\n\r\n    const sum = \r\n       theMenu.reduce(function(a, b) {\r\n      return ?;\r\n    }, 0);\r\n\r\n    A: a + b\r\n    B: a.price + b.price\r\n    C: a + b.price\r\n    D: None of the Above\r\n`,
      `    01100010 01101001 01100111 01100111\r\n    01100101 01110011 01110100 00100000\r\n    01100111 01110101 01111001 00100000\r\n    01100001 01110100 00100000 01001000\r\n    01101111 01110010 01101001 01111010\r\n    01101111 01101110 01110011 00111111\r\n`
    ]

class RegisterQuizQuestion extends Component {

  onSubmit() {
    this.props.questionAnswered(this.props.skillScore + 1, this.props.guessedAnswer, this.props.navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* REMEMBER TO CHANGE THE QUESTION NUMBER USING A PROP */}
        <Text style={styles.questionText}>Question #{this.props.skillScore + 1}</Text>
        <Text style={styles.regQText}>{questions[this.props.skillScore]}</Text>
        <TextInput blurOnSubmit={true}
          onChangeText={(guessedAnswer) => this.props.answerChanged(guessedAnswer)}
          autoCapitalize="none" autoCorrect={false} placeholder="~YOUR_ANSWER" style={styles.textInputG}
          editable={true} placeholderTextColor={'#9B9B9B'} selectionColor={'#F1A227'}
        />
        <TouchableOpacity style={styles.whiteBtn}
          onPress={() => this.onSubmit()}>
          <Text style={styles.btnTextLight}>Submit</Text>
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
