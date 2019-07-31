const initialState = {
  loading: false,
  error: '',
  data: {},
};


const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'SUCCESSFUL':
      return {
        ...state,
        data: action.payload,
      };
    case 'FAILED':
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default SignInReducer;
