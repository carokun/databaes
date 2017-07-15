import firebase from 'firebase'

export const findProspects = (dispatch, username, password, likes, dislikes, matches, navigation) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}`)
        .on('value', snapshot => {
          const data = snapshot.val();
          console.log(data);
          let prospects = {};
          for(var key in data) {
            // console.log(data[key][Object.keys(data[key])[0]].password);
            if (key !== username) {
              prospects[key] = Object.assign({}, data[key], {username: key})
            }
          }
          dispatch({type: 'prospects_loaded', prospects})
          navigation.navigate('SwipeScreen');
        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};

export const getUsers = (dispatch, username, password, loginUser) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}`)
        .on('value', snapshot => {
          const data = snapshot.val();
          console.log(data);
          let users = {};
          for(var key in data) {
            // console.log(data[key][Object.keys(data[key])[0]].password);
            if (key !== username) {
              users[key] = Object.assign({}, data[key], {username: key})
            }
          }
          dispatch({type: 'users_loaded', users})
          loginUser();
          console.log(users);
        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};

export const swipeYes = (dispatch, username, liker) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}/${liker}/likes`)
        .on('value', snapshot => {
          const data = snapshot.val();
          console.log(data);
          firebase.database().ref(`/users/${currentUser.uid}/${liker}/likes`)
          .set({username})
          .then(() => {
            console.log('success');
            dispatch({
              type: 'swipe_no',
            })
          })
        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};

export const swipeNo = (dispatch, username, disliker) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}/${disliker}/dislikes`)
        .on('value', snapshot => {
          const data = snapshot.val();
          console.log(data);
          firebase.database().ref(`/users/${currentUser.uid}/${disliker}/dislikes`)
          .set({username})
          .then(() => {
            console.log('success');
            dispatch({
              type: 'swipe_no',
            })
          })
        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};
