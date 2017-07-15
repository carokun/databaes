import React from 'react';
import { View, Text, TouchableOpacity, Image, ListView, TouchableHighlight } from 'react-native'
import styles from '../../../public/css/styles.js';
import Modal from 'react-native-modal'

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
    };
  }
  showModal() {
    this.setState({ isModalVisible: true })
  }

  hideModal() {
    this.setState({ isModalVisible: false })
  }
  sendDirty() {
    // this should say "You sent: (the pickup line here)"
    alert('You sent: DIRTY PICKUP LINE.')
  }
  sendCute() {
    // this should say "You sent: (the pickup line here)"
    alert('You sent: CUTE PICKUP LINE.')
  }
  sendClassy() {
    // this should say "You sent: (the pickup line here)"
    alert('You sent: CLASSY PICKUP LINE.')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.baeList}>this.getMoreBaes()</Text>
            <Image
              style={styles.heart}
              source={require('../../../public/assets/heart.png')}
            />
          </View>
        </TouchableOpacity>
          <ListView dataSource={this.state.dataSource}
          renderRow={(match) =>
            <MatchCard fname={match.fname} lname={match.lname} username={match.username}
            skillScore={match.skillScore} nerdyScore={match.nerdyScore} showModal={this.showModal.bind(this)}
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

export default Matches;
