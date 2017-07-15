import firebase from 'firebase'

export const findProspects = (dispatch, username, password, likes, dislikes, matches, navigation) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}`)
        .once('value')
        .then( snapshot => {
          const data = snapshot.val();
          console.log(data);
          let prospects = {};
          let users = {};
          for(var key in data) {
            users[key] = Object.assign({}, data[key], {username: key})
            // console.log(data[key][Object.keys(data[key])[0]].password);
            if (key !== username && !dislikes.hasOwnProperty(key) && !likes.hasOwnProperty(key) && !matches.hasOwnProperty(key)) {
              prospects[key] = Object.assign({}, data[key], {username: key})
            }
          }
          dispatch({type: 'prospects_loaded', prospects})
          dispatch({type: 'users_loaded', users})
          navigation.navigate('SwipeScreen');
        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};

export const findMatches = (dispatch, username, likes, matches, users, navigation) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}`)
        .once('value')
        .then( snapshot => {
          const data = snapshot.val();
          console.log(data);
          let matches = {};
          for(var key in data) {
            // console.log(data[key][Object.keys(data[key])[0]].password);
            if (likes.hasOwnProperty(key) && users[key].likes.hasOwnProperty(username)) {
              matches[key] = Object.assign({}, data[key], {username: key})
            }
          }
          dispatch({type: 'matches_found', matches})
          console.log(matches);
          navigation.navigate('Matches');
        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};

export const sendMessage = (dispatch, to, from, message) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}/${from}/messages`)
        .push({to, from, message, date: (new Date()).toDateString()})
        .then(() => {
          dispatch({
            type: 'message_sent'
          })
        })
    })
    .catch((err) => {
      console.log(err);
    })
  };
};

// export const getUsers = (dispatch, username, password, loginUser) => {
//   return (dispatch) => {
//     firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
//     .then((user) => {
//       const { currentUser } = firebase.auth();
//       firebase.database().ref(`/users/${currentUser.uid}`)
//         .once('value')
//         .then(snapshot => {
//           const data = snapshot.val();
//           console.log(data);
//           let users = {};
//           for(var key in data) {
//             // console.log(data[key][Object.keys(data[key])[0]].password);
//             if (key !== username) {
//               users[key] = Object.assign({}, data[key], {username: key})
//             }
//           }
//           dispatch({type: 'users_loaded', users})
//           loginUser();
//           console.log(users);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//   };
// };

export const swipeYes = (dispatch, username, liker, prospects) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}/${liker}/likes`)
        .once('value')
        .then(snapshot => {
          const data = snapshot.val();
          console.log(data);
          firebase.database().ref(`/users/${currentUser.uid}/${liker}/likes/${username}`)
          .set(prospects[username])
          .then(() => {
            dispatch({
              type: 'swipe_yes',
              likes: Object.assign({}, {[username]: prospects[username]}, data)
            })
          })
        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};

export const swipeNo = (dispatch, username, disliker, prospects) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}/${disliker}/dislikes`)
        .once('value')
        .then(snapshot => {
          const data = snapshot.val();
          console.log(data);
          firebase.database().ref(`/users/${currentUser.uid}/${disliker}/dislikes/${username}`)
          .set(prospects[username])
          .then(() => {
            dispatch({
              type: 'swipe_yes',
              dislikes: Object.assign({}, {[username]: prospects[username]}, data)
            })
          })
        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};
