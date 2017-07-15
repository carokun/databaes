import React from 'react';
import { View, Text, TouchableOpacity, Image, ListView } from 'react-native'
import styles from '../../../public/css/styles.js';
import { connect } from 'react-redux';

// PROXY DATA
// const messages = [
//   {from: 'crestwood204', to: 'carokun', message: 'Your eyes are far more gorgeous than any source code I have ever seen.', date: new Date().toDateString()},
//   {from: 'tifchang', to: 'carokun', message: 'There is no primitive data type that could possibly hold the number of things I would do to spend one night with you.', date: new Date().toDateString()},
//   {from: 'nihar', to: 'carokun', message: 'You are my methods. I am nothing without you.', date: new Date().toDateString()},
//   {from: 'crestwood204', to: 'carokun', message: 'Your eyes are far more gorgeous than any source code I have ever seen.', date: new Date().toDateString()},
//   {from: 'tifchang', to: 'carokun', message: 'There is no primitive data type that could possibly hold the number of things I would do to spend one night with you.', date: new Date().toDateString()},
//   {from: 'nihar', to: 'carokun', message: 'You are my methods. I am nothing without you.', date: new Date().toDateString()},
//   {from: 'crestwood204', to: 'carokun', message: 'Your eyes are far more gorgeous than any source code I have ever seen.', date: new Date().toDateString()},
//   {from: 'tifchang', to: 'carokun', message: 'There is no primitive data type that could possibly hold the number of things I would do to spend one night with you.', date: new Date().toDateString()},
//   {from: 'nihar', to: 'carokun', message: 'You are my methods. I am nothing without you.', date: new Date().toDateString()}
// ]

class MatchCard extends React.Component {
  render() {
    return (
      <View style={styles.matchCard, {flexDirection: 'column'}}>
        <View style={styles.startQuizContainer}>
          <Text style={[styles.matchName, {fontSize: 16, width: 100, marginLeft: 0, color: '#9B9B9B'}]}>~from 📨:</Text>
          <Text style={[styles.matchName, {fontSize: 16, color: '#00B2F8', marginLeft: 0, paddingTop: 8}]}>{this.props.from}</Text>
        </View>
        <Text style={[styles.matchName, {width: 310, fontSize: 12, color: '#9B9B9B', marginBottom: 10, marginTop: 5}]}>{this.props.date}</Text>
        <Text style={[styles.matchName, {width: 310, fontSize: 15, color: '#fff', marginBottom: 40, marginTop: 5}]}>{this.props.message}</Text>
      </View>
    )
  }
};

class Messages extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const messages = [];
    console.log(props.messages);
    for (var key in props.messages) {
      console.log(props.messages[key].to);
      if(props.messages[key].to === props.username) {
        messages.push(props.messages[key]);
      }
    }
    this.state = {
      dataSource: ds.cloneWithRows(messages),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SwipeScreen')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.baeList, {marginLeft: '25%'}]}>Back to myBaes</Text>
            <Image
              style={[styles.heart, {marginBottom: 30}]}
              source={require('../../../public/assets/heart.png')}
            />
          </View>
        </TouchableOpacity>
          <ListView dataSource={this.state.dataSource}
          renderRow={(msg) =>
            <MatchCard from={msg.from} to={msg.to}
            message={msg.message} date={msg.date}
          />
          }/>
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.login.messages,
    username: state.login.username
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
