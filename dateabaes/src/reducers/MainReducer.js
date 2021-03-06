const INITIAL_STATE = { users: {}, prospects: {} }

export default (state = INITIAL_STATE, action) =>
{
  switch (action.type) {
    case 'users_loaded':
      return Object.assign({}, state, { users: action.users });
    case 'prospects_loaded':
      return Object.assign({}, state, { prospects: action.prospects });
    default:
      return state;
  }
}
