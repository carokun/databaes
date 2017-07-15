import React from 'react';
import { Animated, Image, Text, View } from 'react-native'
import Animation from 'lottie-react-native';
import styles from '../../public/css/styles.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 7000,
    }).start();

    setTimeout(() => this.props.navigation.navigate('Login'), 6000);
  }

  render() {
    return (
      <View style={[styles.container, {alignItems: 'center'}]}>
        <Image
          style={[styles.logo, {marginLeft: 0, marginTop: '20%'}]}
          source={require('../../public/assets/dblogo.png')}
        />
        <Animation
          style={{
            marginTop: '-40%',
            width: 300,
            height: 300,
          }}
          source={require('../../public/assets/quick_hart_select.json')}
          progress={this.state.progress}
        />
      </View>
    )
  }
}
