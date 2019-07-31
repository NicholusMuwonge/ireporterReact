/* eslint-disable no-dupe-keys */
import moxios from 'moxios';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getRecords } from '../../actions/GetRecordsActions';


const middleWare = [thunk];
const mockStore = configureStore(middleWare);

describe('fetch comments', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('should be able to return an error on failure to fetch a record', () => {
    const error = [{ Error: 'Request failed with status code 404' }];
    const Process = [
      {
        error,
        type: 'FAILED',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          error,
          status: 404,
        },
      );
    });
    const store = mockStore({});
    return store.dispatch(getRecords())
      .catch(() => {
        expect(store.getActions()).toEqual(Process);
      });
  });
});
