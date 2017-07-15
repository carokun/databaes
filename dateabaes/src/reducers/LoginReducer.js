const INITIAL_STATE = { username: '', password: '' }

export default (state = INITIAL_STATE, action) =>
{
  console.log('loginType', action.type);
  switch (action.type) {
    case 'user_login':
      return action.userData;
    case 'user_login_failed':
      return Object.assign({}, state, { username: '', password: '' });
    case 'login_username_change':
      return Object.assign({}, state, { username: action.username });
    case 'login_password_change':
      return Object.assign({}, state, { password: action.password })
    default:
      return state;
  }
}
