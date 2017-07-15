const INITIAL_STATE = { username: '', password: '' }

export default (state = INITIAL_STATE, action) =>
{
  switch (action.type) {
    case 'user_login':
      return action.userData;
    case 'user_login_failed':
      return Object.assign({}, state, { username: '', password: '' });
    case 'login_username_change':
      return Object.assign({}, state, { username: action.username });
    case 'login_password_change':
      return Object.assign({}, state, { password: action.password })
    case 'swipe_yes':
      return Object.assign({}, state, { likes: action.likes });
    case 'swipe_no':
      return Object.assign({}, state, { dislikes: action.dislikes });
    case 'matches_found':
      return Object.assign({}, state, { matches: action.matches });
    default:
      return state;
  }
}
