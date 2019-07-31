const initialState = {
  loading: false,
  record: {},
  error: '',
};


const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'LOADING_END':
      return {
        ...state,
        loading: false,
      };

    case 'FAILED':
      return {
        ...state,
        ...action.payload,
      };

    case 'LOAD_RECORDS':
      return {
        ...state,
        record: action.payload,
      };

    default:
      return state;
  }
};


export default recordsReducer;
