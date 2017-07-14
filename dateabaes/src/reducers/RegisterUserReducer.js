const INITIAL_STATE = { username: '', password: '' }

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
    default:
      return state;
  }
}
