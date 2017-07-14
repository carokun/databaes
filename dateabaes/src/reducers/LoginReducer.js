const INITIAL_STATE = { username: '', password: '' }

export default (state = INITIAL_STATE, action) =>
{
  switch (action.type) {
    case 'user_login':
      return Object.assign({}, state, { userData: action.userData });
    case 'username_change':
      return Object.assign({}, state, { username: action.username });
    case 'password_change':
      return Object.assign({}, state, { password: action.password })
    default:
      return state;
  }
}
