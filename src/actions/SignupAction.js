import axios from 'axios';
import { toast } from 'react-toastify';

export const registerSucess = payload => ({ type: 'SUCCESSFUL', payload });

export const Failed = error => ({ type: 'FAILED', error });

export const loading = () => ({ type: 'STARTED' });


export const SignUpAction = (props, data) => dispatch => axios.post(
  'https://databasetests.herokuapp.com/api/v2/auth/signup/',
  data,
)
  .then((res) => {
    dispatch(registerSucess(res.data));
    toast.dismiss();
    toast.success('user created!', {
      position: toast.POSITION.CENTER_RIGHT,
      autoClose: 5000,
      onClose: props.history.push('/login'),
    });
  })
  .catch((error) => {
    toast.dismiss();
    toast.error(`${error.response.data.error_message}`, {
      position: toast.POSITION.CENTER_RIGHT,
      autoClose: 5000,
    });
    dispatch(Failed(error.response));
  });
