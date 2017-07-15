const INITIAL_STATE = { username: '', password: '', fname: '', lname: '', skillScore: 0, hasLost: false, guessedAnswer: '' }

const questionAnswers = new Array(10).fill('answer');

export default (state = INITIAL_STATE, action) =>
{
  switch (action.type) {
    case 'register_user':
      return state;
    case 'username_change':
      return Object.assign({}, state, { username: action.username });
    case 'password_change':
      return Object.assign({}, state, { password: action.password });
    case 'fname_change':
      return Object.assign({}, state, { fname: action.fname });
    case 'lname_change':
      return Object.assign({}, state, { lname: action.lname });
    case 'question_answered':
      console.log(action);
      if (questionAnswers[action.questionNumber - 1] === state.guessedAnswer) {
        action.navigation.navigate('RegisterQuizQuestion');
        return Object.assign({}, state, { skillScore: action.questionNumber });
      } else {
        action.navigation.navigate('RegisterAuth');
        return Object.assign({}, state, { hasLost: true });
      }
    case 'answer_change':
      return Object.assign({}, state, { guessedAnswer: action.guessedAnswer });
    default:
      return state;
  }
}
