import firebase from 'firebase';

export const registerUser = (dispatch, username, password, fname, lname) => {
  console.log('here');
  return (dispatch) => {
    console.log('here2');
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`users/${currentUser.uid}/user`)
        .push({ [username]: {password, fname, lname} })
        .then(() => {
          console.log('success');
          dispatch({
            type: 'register_user',
            username,
            password
          })
        })
      console.log(currentUser);
    })
    .catch((err) => {
      console.log(err);
    })
  };
};

export const usernameChange = (dispatch, username) => {
  return dispatch({
    type: 'username_change',
    username
  });
};

export const passwordChange = (dispatch, password) => {
  return dispatch({
    type: 'password_change',
    password
  });
};

export const fnameChange = (dispatch, fname) => {
  return dispatch({
    type: 'fname_change',
    fname
  });
};

export const lnameChange = (dispatch, lname) => {
  return dispatch({
    type: 'lname_change',
    lname
  });
};
