import moxios from 'moxios';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginAction } from '../../actions/SigninActions';


const middleWare = [thunk];
const mockStore = configureStore(middleWare);

describe('signin user', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('should be able to login a user', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    const dataPushed = {
      data: {
        userName: 'first',
        password: 'lastly',
      },
    };
    const dataReturned = {
      data: {
        access_token: 'first',
      },
    };

    const Process = [
      {
        payload: dataReturned,
        type: 'SUCCESSFUL',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          response: dataReturned,
          status: 201,
        },
      );
    });
    const store = mockStore({});
    return store
      .dispatch(loginAction(dataPushed, props))
      .then(() => {
        expect(store.getActions()).toEqual(Process);
      });
  });
});
