import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider, TouchableOpacity, TextInput } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import styles from '../../../public/css/styles.js';

class RegisterBasicQuestions extends Component {
  click(a) {
    alert(a);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.questionText}>
        Programming language of choice:</Text>
        <Text style={styles.subtext}>
          What's your love language?</Text>
        <RadioForm
          radio_props={[
            {label: 'JavaScript', value: 2 },
            {label: 'Python', value: 5 },
            {label: 'Ruby', value: 7},
          ]}
          initial={0}
          formHorizontal={true}
          onPress={(value) => {this.click(value)}}
          buttonColor={'#F1A227'}
          labelColor={'#fff'}
          style={{paddingTop: 15, marginLeft: 20}}
        />
        <Text style={styles.questionText}>
          Frontend or Backend?</Text>
        <Text style={styles.subtext}>
          If you know what I mean... ;)</Text>
          <RadioForm
            radio_props={[
              {label: 'Frontend', value: 5 },
              {label: 'Backend', value: 5 },
            ]}
            initial={0}
            formHorizontal={true}
            onPress={(value) => {this.click(value)}}
            buttonColor={'#F1A227'}
            labelColor={'#fff'}
            style={{paddingTop: 15, marginLeft: 20}}
          />
          <Text style={styles.questionText}>
            Years of experience:</Text>
          <Text style={styles.subtext}>
            We like those who are good at what they do.</Text>
          <Slider style={styles.slider} maximumValue={15} minimumValue={1}
          minimumTrackTintColor={'#F1A227'} step={1} /*value={}*//>
          {/* Text here below should be the number the person slides (reference state) */}
          <Text style={styles.subtext}>10</Text>
          <TouchableOpacity style={styles.whiteBtn}>
            <Text style={styles.btnTextLight}>Next</Text>
          </TouchableOpacity>
      </View>
    )
  }
}



export default RegisterBasicQuestions;
