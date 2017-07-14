import firebase from 'firebase';

export const loginUser = (username, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`/users/${currentUser.uid}/user`)
        .on('value', snapshot => {
          console.log(snapshot.val());
          dispatch({ type: 'user_login', userData: snapshot.val() });
        });
    })
    .catch((err) => {
      console.log(err);
    })
  };
};



export const usernameChange = (dispatch, username) => {
  dispatch({
    type: 'username_change',
    username
  });
};

export const passwordChange = (dispatch, password) => {
  dispatch({
    type: 'password_change',
    password
  });
};
