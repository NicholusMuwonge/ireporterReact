import axios from 'axios';
import { toast } from 'react-toastify';

export const loginSucess = payload => ({ type: 'SUCCESSFUL', payload });

export const Failed = error => ({ type: 'FAILED', error });

export const loading = () => ({ type: 'STARTED' });


export const loginAction = data => dispatch => axios.post(
  'https://databasetests.herokuapp.com/api/v2/auth/login/',
  data,
)
  .then((res) => {
    const isLoggedIn = true;
    dispatch(loginSucess(res.data));
    sessionStorage.setItem('access_token', res.data.access_token);
    sessionStorage.setItem('user_id', res.data.user_id);
    sessionStorage.setItem('isLoggedIn', isLoggedIn);
    toast.success('user logged in successfully!', {
      position: toast.POSITION.CENTER_RIGHT,
      autoClose: 5000,
      onClose: window.location.assign('/getrecords'),
    });
  })
  .catch((error) => {
    toast.dismiss();
    toast.error(`${error.response.data.message}`, {
      position: toast.POSITION.CENTER_RIGHT,
      autoClose: 5000,
    });
    dispatch(Failed(error.response));
  });
