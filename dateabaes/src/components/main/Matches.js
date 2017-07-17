import React from 'react';
import { View, Text, TouchableOpacity, Image, ListView, TouchableHighlight } from 'react-native'
import styles from '../../../public/css/styles.js';
import Modal from 'react-native-modal'
import { connect } from 'react-redux';

import { sendMessage, findMessages, findProspects } from '../../actions/MainActions';

// const matches = [
//   {username: 'crestwood204', fname: 'Andrew', lname: 'Ong', language: 'JavaScript', gender: 'guy', years: '7', nerdyScore: '15', skillScore: '9', end: 'frontend'},
//   {username: 'carokun', fname: 'Caroline', lname: 'Okun', language: 'C++', gender: 'gal', years: '3', nerdyScore: '17', skillScore: '15', end: 'backend'},
//   {username: 'tifchang', fname: 'Tiffany', lname: 'Chang', language: 'OCaml', gender: 'gal', years: '2', nerdyScore: '9', skillScore: '2', end: 'frontend'}
// ]

const cute = [
`Your eyes are far more gorgeous than any source code I have ever seen.`,
`You've stolen the ASCII to my heart.`,
`You had me at "Hello World."`,
"You auto-complete me.",
"You are the JDK (Java Development Kit) in my life. I won't compile without you.",
"Before you, I was a PC without a power outlet.",
"Can you be my private variable? I want to be the only one with access to you.",
"You are my initializer: without you, my life would point to nothing (null).",
"Public class Your World extends My World.",
"I am a boolean method whose love will always return true.",
"No matter how I sort things, you'll always be first.",
"I think you're my compiler. My life wouldn't start without you.",
"Trust me, I'm user friendly.",
"My love for you comes with no strings attached.",
"Im not staring, Im stuck in a loop. (Logic: while (girl=hot, look))"]

const dirty = [
"You're making me feel like I have something in common with these pop-up ads.",
"You turn my floppy disk in to a hard drive",
"Are you a computer whiz… it seems you know how to turn my software to hardware.",
"You make my software turn into hardware!",
"Are you sitting on the F5 key? Cause your ass is refreshing.",
"You have a trojan? hmm... I think I'll need to take a look at that backdoor.",
`Baby are you a motherboard?, Cause I'd "RAM" you all night long.`,
"You got me stuck on Caps Lock, if you know what I mean.",
"You can put a Trojan on my Hard Drive anytime",
"Would you like to enjoy my laptop, I promise I don't have any viruses…",
"while(myBAC >= 0.3) {YourHotness++; }",
"How about we go home and you handle my exception?",
"Want to see my HARD Disk? I promise it isn't 3.5 inches and it ain't floppy.",
"There is no primitive data type that could possibly hold the number of things I would do to spend one night with you.",
"There is no cache, lets go straight to the hard drive.",
"Oh, you found out about my backups, didn't you?",
"Nobody turns me on from a cold boot like you.",
"No, that's not an iPod mini in my pocket. I'm just happy to see you.",
"No, that's not a iphone in my pants, but thanks for noticing.",
"Need me to unzip your files?",
"I hope you're an ISO file, because I'd like to mount you.",
"My servers never go down... but I do!",
"Most people say women are NP-complete, but if I get you into bed, I can solve you in polynomial time!",
"Mind if I run a sniffer to see if your ports are open?",
"Let's interface our hardware.",
"If I were an assembly language, I'd jump to your address, shift right a bit, push it in, pop it out, load a byte into your accumulator, then jump if you're negative.",
"I'll bet my hard drive is the biggest you've ever seen.",
"I would love to stick my pins into your sockets.",
`You want to learn about computers huh, you've already passed the first lesson "Turning Me On"`,
`I'm definitely in the range of your hotspot. How about you let me connect and get full access.`,
"If we were connected on Linkedin, I'd endorse you all night long."]

const classy = [
"A life without you, would be like a computer without an OS.",
"Are you an angel, because your texture mapping is divine!",
"Baby you must be Google Glasses, because you augment my reality",
"Baby, if they made you in Java, you'd be the object of my desire.",
"You are my superclass: you define what I can do.",
"You are my semicolon; always present in everything I do.",
"You are my methods. I am nothing without you.",
"You are my loop condition. I keep coming back to you.",
"Girl, are you Wi-Fi? Cuz im feeling the connection!",
"Is your name Wi-fi? Because I'm really feeling a connection.",
"Is your name Google? Because you have everything I've been searching for.",
"If you were a USB Port i'd stick my jump drive into you.",
"If I were a method, you must be my parameter, because I will always need you.",
"If I was an operating system, your process would have top priority.",
"I'd switch to emacs for you.",
"I was hoping you wouldn't block my pop-up.",
"You have nice syntax."]

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
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const matches = [];
    const keys = Object.keys(props.matches);
    keys.map((key) => matches.push(props.matches[key]))
    console.log(props.matches);
    console.log(matches);
    this.state = {
      dataSource: ds.cloneWithRows(matches),
      isModalVisible: false,
      currentUser: ''
    };
  }

  showModal(username) {
    this.setState({ isModalVisible: true, currentUser: username })
  }

  hideModal() {
    this.setState({ isModalVisible: false })
  }
  sendDirty() {
    // this should say "You sent: (the pickup line here)"
    const qNumber = Math.floor(Math.random() * dirty.length);
    this.props.sendMessage(this.state.currentUser, this.props.username, dirty[qNumber])
    this.setState({isModalVisible: false});
    // alert(dirty[qNumber])
  }
  sendCute() {
    // this should say "You sent: (the pickup line here)"
    const qNumber = Math.floor(Math.random() * cute.length);
    this.props.sendMessage(this.state.currentUser, this.props.username, cute[qNumber])
    this.setState({isModalVisible: false});
    // alert(cute[qNumber])
  }
  sendClassy() {
    // this should say "You sent: (the pickup line here)"
    const qNumber = Math.floor(Math.random() * classy.length);
    this.props.sendMessage(this.state.currentUser, this.props.username, classy[qNumber])
    this.setState({isModalVisible: false});
    // alert(classy[qNumber])
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.startQuizContainer, {alignItems: 'center'}]}>
          <TouchableOpacity onPress={() => this.props.findProspects(this.props.username, this.props.password, this.props.likes, this.props.dislikes, this.props.matches, this.props.navigation)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.baeList, {fontSize: 20, marginLeft: 0, marginRight: 30, marginBottom: 40}]}>new Baes() 💜</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.findMessages(this.props.username, this.props.users, this.props.navigation)}>
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
    username: state.login.username,
    users: state.main.users,
    likes: state.login.likes,
    dislikes: state.login.dislikes,
    password: state.login.password
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (to, from, message) => dispatch(sendMessage(dispatch, to, from, message)),
    findMessages: (username, users, navigation) => dispatch(findMessages(dispatch, username, users, navigation)),
    findProspects: (username, password, likes, dislikes, matches, navigation) => dispatch(findProspects(dispatch, username, password, likes, dislikes, matches, navigation))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
