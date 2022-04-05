import axios from 'axios';

export default function UserAction() {
  return (dispatch) => {
    dispatch({
      type: 'GET_USER',
      payload: axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.data),
    });
  };
}