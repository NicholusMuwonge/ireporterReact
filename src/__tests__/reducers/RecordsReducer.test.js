import recordsReducer from '../../reducers/GetRecordsReducer';


const initialstate = {
  record: {},
};

const loadingInitialState = {
  loading: false,
};

let error;
let retrievedRecords;

describe('commentsReducer', () => {
  it(('has initial state'), () => {
    const newState = recordsReducer(initialstate, {});
    expect(newState).toEqual(initialstate);
  });

  it('should be able to load before every action is dispatched', () => {
    const newState = recordsReducer(loadingInitialState, {
      type: 'LOADING',
    });
    expect(newState).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should return a profile to the user', () => {
    const newState = recordsReducer(initialstate, {
      type: 'LOAD_RECORDS',
      retrievedRecords,
    });
    expect(newState).toEqual({
      record: undefined,
    });
  });

  it('should return an error on failure to retrieve profile ', () => {
    const newState = recordsReducer(initialstate, {
      type: 'FAILED',
      loading: false,
      error,
    });
    expect(newState).toEqual({
      ...initialstate,
      error,
    });
  });
});
