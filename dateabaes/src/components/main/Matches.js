import React from 'react';
import { View, Text, TouchableOpacity, Image, ListView, TouchableHighlight } from 'react-native'
import styles from '../../../public/css/styles.js';
import Modal from 'react-native-modal'
import { connect } from 'react-redux';

import { sendMessage } from '../../actions/MainActions';

const matches = [
  {username: 'crestwood204', fname: 'Andrew', lname: 'Ong', language: 'JavaScript', gender: 'guy', years: '7', nerdyScore: '15', skillScore: '9', end: 'frontend'},
  {username: 'carokun', fname: 'Caroline', lname: 'Okun', language: 'C++', gender: 'gal', years: '3', nerdyScore: '17', skillScore: '15', end: 'backend'},
  {username: 'tifchang', fname: 'Tiffany', lname: 'Chang', language: 'OCaml', gender: 'gal', years: '2', nerdyScore: '9', skillScore: '2', end: 'frontend'}
]

class MatchCard extends React.Component {
  render() {
    return (
      <View style={styles.matchCard}>
        <Text style={styles.matchName}>~{this.props.username}</Text>
        <TouchableOpacity style={styles.sendPickupModal} onPress={() => {this.props.showModal()}}>
          <Text style={styles.btnTextDark}>➤</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

class Matches extends React.Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(matches),
      isModalVisible: false,
      currentUser: ''
    };
  }
  componentWillMount() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const matches = [];
    console.log(this.props.matches);
    const keys = Object.keys(this.props.matches);
    keys.map(() => matches.push(this.props.matches[keys]))
    this.setState({dataSource: ds.cloneWithRows(matches)})
  }
  showModal(username) {
    this.setState({ isModalVisible: true, currentUser: username })
  }

  hideModal() {
    this.setState({ isModalVisible: false })
  }
  sendDirty() {
    // this should say "You sent: (the pickup line here)"
    this.props.sendMessage(this.state.currentUser, this.props.username, 'sum messeg')
    this.setState({isModalVisible: false});
  }
  sendCute() {
    // this should say "You sent: (the pickup line here)"
    this.props.sendMessage(this.state.currentUser, this.props.username, 'sum messeg')
    this.setState({isModalVisible: false});
  }
  sendClassy() {
    // this should say "You sent: (the pickup line here)"
    this.props.sendMessage(this.state.currentUser, this.props.username, 'sum messeg')
    this.setState({isModalVisible: false});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.startQuizContainer, {alignItems: 'center'}]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SwipeScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.baeList, {fontSize: 20, marginLeft: 0, marginRight: 30, marginBottom: 40}]}>new Baes() 💜</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Messages')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.baeList, {fontSize: 20, marginLeft: 0, marginBottom: 40}]}>getMsgs() 📩</Text>
            </View>
          </TouchableOpacity>
        </View>
          <ListView dataSource={this.state.dataSource}
          renderRow={(match) =>
            <MatchCard fname={match.fname} lname={match.lname} username={match.username}
            skillScore={match.skillScore} nerdyScore={match.nerdyScore} showModal={this.showModal.bind(this, match.username)}
          />
          }/>
          {/* MODAL */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.modal}>
              <TouchableOpacity onPress={this.hideModal.bind(this)}>
                <Text style={{marginLeft: '85%', marginBottom: 30}}>❌</Text>
              </TouchableOpacity>
              <View style={styles.startQuizContainer}>
                <Text style={[styles.baeList, {fontSize: 15, marginLeft: 5, marginBottom: 20, color: '#B200FD'}]}>typeof</Text>
                <Text style={[styles.baeList, {fontSize: 15, marginLeft: 5, marginBottom: 20}]}>pickupLine2Send</Text>
                <Text style={[styles.baeList, {fontSize: 15, marginLeft: 5, marginBottom: 20, color: '#F1A227'}]}>===</Text>
                <Text style={[styles.baeList, {fontSize: 15, marginLeft: 5, marginBottom: 20}]}>?</Text>
              </View>
              <TouchableOpacity style={[styles.sendPickupModal, {backgroundColor: '#56C100'}]} onPress={this.sendCute.bind(this)}>
                <Text style={styles.btnTextDark}>Cute</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sendPickupModal, {backgroundColor: '#D0011B'}]} onPress={this.sendDirty.bind(this)}>
                <Text style={styles.btnTextDark}>Dirty</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sendPickupModal, {backgroundColor: '#066BFF', marginBottom: 40}]} onPress={this.sendClassy.bind(this)}>
                <Text style={styles.btnTextDark}>Classy</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    matches: state.login.matches,
    username: state.login.username
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (to, from, message) => dispatch(sendMessage(dispatch, to, from, message))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
