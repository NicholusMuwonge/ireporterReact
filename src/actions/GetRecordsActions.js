import axios from 'axios';

export const loading = () => ({ type: 'LOADING' });

export const loadRecord = payload => ({ type: 'LOAD_RECORDS', payload });

export const loadingEnd = () => ({ type: 'LOADING_END' });

export const failed = payload => ({ type: 'FAILED', payload });

const id = sessionStorage.getItem('user_id');
const token = sessionStorage.getItem('access_token');


export const getRecords = () => (dispatch) => {
  dispatch(loading());

  return axios.get(
    `https://databasetests.herokuapp.com/api/v2/auth/users/${id}/records/`,
    { headers: { Authorization: `Bearer ${token}` } },
  )
    .then(
      (res) => {
        dispatch(loadRecord(res.data));
        dispatch(loadingEnd());
      },
    )
    .catch((error) => {
      dispatch(failed(error));
      dispatch(loading());
    });
};


export default getRecords;
