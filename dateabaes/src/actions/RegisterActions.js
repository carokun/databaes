import firebase from 'firebase';

export const registerUser = (dispatch, username, password, fname, lname, language, end, gender, years, skillScore, nerdyScore) => {
  console.log('here');
  return (dispatch) => {
    console.log('here2');
    firebase.auth().signInWithEmailAndPassword('email@gmail2.com', 'password2')
    .then((user) => {
      const { currentUser } = firebase.auth();
      firebase.database().ref(`users/${currentUser.uid}/user`)
        .push({ [username]: {password, fname, lname, language, end, gender, years, skillScore, nerdyScore} })
        .then(() => {
          console.log('success');
          dispatch({
            type: 'register_user',
            language,
            end,
            gender,
            years,
            skillScore,
            nerdyScore
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

export const questionAnswered = (dispatch, questionNumber, guessedAnswer, navigation) => {
  return dispatch({
    type: 'question_answered',
    guessedAnswer,
    questionNumber,
    navigation
  });
};

export const answerChanged = (dispatch, guessedAnswer) => {
  return dispatch({
    type: 'answer_change',
    guessedAnswer
  });
};
