import firebase from 'firebase';

export const loginUser = (dispatch, username, password, navigation, findProspects) => {
  console.log('loginUser');
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}`)
        .once('value')
        .then(snapshot => {
          const data = snapshot.val();
          console.log(data);
          let found = false;
          for(var key in data) {
            // console.log(data[key][Object.keys(data[key])[0]].password);
            if (key === username && data[key].password === password) {
              found = true;
              dispatch({ type: 'user_login', userData: Object.assign({}, data[key], {username: key})});
              findProspects(username, password, data[key].likes, data[key].dislikes, data[key].matches, navigation);
              break;
            }
          }
          if (!found) {
            console.log('fail');
            dispatch({ type: 'user_login_failed'});
          }

        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};



export const usernameChange = (dispatch, username) => {
  dispatch({
    type: 'login_username_change',
    username
  });
};

export const passwordChange = (dispatch, password) => {
  dispatch({
    type: 'login_password_change',
    password
  });
};
