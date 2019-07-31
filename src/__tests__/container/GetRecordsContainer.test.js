/* eslint-disable import/no-named-as-default */
import React from 'react';
import { shallow } from 'enzyme';
import { getRecordsContainer, mapStateToProps } from '../../containers/GetRecordsContainer';

describe.only('<getRecordsContainer />', () => {
  let wrapper;
  const props = {
    record: { },
    loading: false,
    recordAction: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<getRecordsContainer {...props} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map the comments reducer to props', () => {
    const state = {
      recordsReducer: {
        record: {},
        loading: false,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      record: {},
      loading: false,

    });
  });
});
