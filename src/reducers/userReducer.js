const initialState = {
  users: [],
};
export default function firstReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_USER_PENDING':
      return { ...state };
    case 'GET_USER_FULFILLED':
      return { ...state, users: payload };
    case 'GET_USER_REJECTED':
      return { ...state };
    default:
      return state;
  }
}
