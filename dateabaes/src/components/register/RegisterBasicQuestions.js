import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider, TouchableOpacity, TextInput } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import styles from '../../../public/css/styles.js';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/RegisterActions'

class RegisterBasicQuestions extends Component {
  constructor() {
    super();
    this.state = {
      language: 'JavaScript',
      end: 'Frontend',
      years: 1,
      gender: 'guy'
    }
  }

  onSubmit() {
    let nerdyScore = 1;
    if(this.state.language === 'JavaScript' || this.state.language === 'C++') {
      nerdyScore += 1;
    } else if (this.state.language === 'OCaml' || this.state.language === 'Ruby') {
      nerdyScore += 2;
    } else if (this.state.language === 'Haskel') {
      nerdyScore += 3;
    }
    if (this.state.end === 'backend') {
      nerdyScore += 2;
    }
    nerdyScore += Math.floor(this.state.years / 3);
    nerdyScore = Math.min(10, nerdyScore)
    this.props.registerUser(this.props.username, this.props.password, this.props.fname,
      this.props.lname, this.state.language, this.state.end, this.state.gender,
      this.state.years, this.props.skillScore, nerdyScore);
    this.props.navigation.navigate('Login');
  }

  //language, end, years, gender

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.questionText}>
        Programming language of choice:</Text>
        <Text style={styles.subtext}>
          What's your love language?</Text>
        <View><RadioForm
          radio_props={[
            {label: 'JavaScript', value: 'JavaScript' },
            {label: 'C++', value: 'C++' },
            {label: 'OCaml', value: 'OCaml' },
            {label: 'Python', value: 'Python' },
            {label: 'Ruby', value: 'Ruby'},
            {label: 'Haskel', value: 'Haskel'}
          ]}
          initial={0}
          formHorizontal={true}
          onPress={(value) => {this.setState({language: value})}}
          buttonColor={'#F1A227'}
          labelColor={'#fff'}
          style={{paddingTop: 15, marginLeft: 20, display: 'flex', flexWrap: 'wrap'}}
        /></View>
        <Text style={styles.questionText}>
          Frontend or Backend?</Text>
        <Text style={styles.subtext}>
          If you know what I mean... ;)</Text>
          <RadioForm
            radio_props={[
              {label: 'Frontend', value: 'frontend' },
              {label: 'Backend', value: 'backend' },
            ]}
            initial={0}
            formHorizontal={true}
            onPress={(value) => {this.setState({end: value})}}
            buttonColor={'#F1A227'}
            labelColor={'#fff'}
            style={{paddingTop: 15, marginLeft: 20}}
          />
          <Text style={styles.questionText}>
            Gender?</Text>
            <RadioForm
              radio_props={[
                {label: 'Guy', value: 'guy' },
                {label: 'Gal', value: 'gal' },
                {label: 'Other', value: 'other' },
              ]}
              initial={0}
              formHorizontal={true}
              onPress={(value) => {this.setState({gender: value})}}
              buttonColor={'#F1A227'}
              labelColor={'#fff'}
              style={{paddingTop: 15, marginLeft: 20}}
            />
          <Text style={styles.questionText}>
            Years of experience:</Text>
          <Text style={styles.subtext}>
            We like those who are good at what they do.</Text>
          <Slider
            onValueChange={(value) => this.setState({years: value})}
            style={styles.slider} maximumValue={15} minimumValue={1}
          minimumTrackTintColor={'#F1A227'} step={1} /*value={}*//>
          {/* Text here below should be the number the person slides (reference state) */}
          <Text style={styles.subtext}>{this.state.years}</Text>
          <TouchableOpacity style={styles.whiteBtn} onPress={() => this.onSubmit()}>
            <Text style={styles.btnTextLight}>Submit</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.register.username,
    password: state.register.password,
    fname: state.register.fname,
    lname: state.register.lname,
    skillScore: state.register.skillScore
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (username, password, fname, lname, language, end, gender, years, skillScore, nerdyScore) => dispatch(registerUser(dispatch, username, password, fname, lname, language, end, gender, years, skillScore, nerdyScore))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBasicQuestions);
