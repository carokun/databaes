const INITIAL_STATE = { username: '', password: '', fname: '', lname: '', skillScore: 8, hasLost: false, guessedAnswer: '' }

const questionAnswers = [
      'src',
      'true',
      'true',
      'event.preventDefault()',
      'A',
      'B',
      'callback hell',
      'NaN',
      'C',
      '01000001 01100010 01101000 01101001'
    ];

export default (state = INITIAL_STATE, action) =>
{
  switch (action.type) {
    case 'register_user':
      return INITIAL_STATE;
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
      console.log(action.questionNumber);
      if (questionAnswers[action.questionNumber - 1] === state.guessedAnswer) {
        if (action.questionNumber === 10) {
          action.navigation.navigate('RegisterEndQuiz');
          return Object.assign({}, state, { skillScore: action.questionNumber, guessedAnswer: '' });
        } else {
          action.navigation.navigate('RegisterQuizQuestion');
          return Object.assign({}, state, { skillScore: action.questionNumber, guessedAnswer: '' });
        }
      } else if (action.questionNumber < 4) {
        action.navigation.navigate('RegisterFuckedUp');
        return Object.assign({}, state, { hasLost: true, guessedAnswer: '', skillScore: 0});
      } else {
        action.navigation.navigate('RegisterAuth');
        return Object.assign({}, state, { hasLost: true, guessedAnswer: '', skillScore: 0});
      }
    case 'answer_change':
      return Object.assign({}, state, { guessedAnswer: action.guessedAnswer });
    default:
      return state;
  }
}
