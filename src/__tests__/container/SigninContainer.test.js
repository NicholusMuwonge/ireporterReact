import React from 'react';
import { shallow } from 'enzyme';
import { SignInContainer, mapStateToProps } from '../../containers/SignInContainer';

describe('SignUpContainer', () => {
  let wrapper;
  const props = {
    data: {
      user_name: 'firstname',
    },
    loading: false,
    loginAction: jest.fn(),
    SignInReducers: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<SignInContainer {...props} />);
  });
  it('renders without fail', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('it should map state to props', () => {
    const state = {
      SignInReducers: {
        data: {},
        loading: false,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      loading: false,
    });
  });

  it('should detect change in state and dispatch the required action', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'firstName',
        value: 'first',
      },
    };
    const wrapperInst = wrapper.instance();
    wrapperInst.handleChange(event);
    wrapperInst.submitHandler(event);
    expect(wrapperInst.state.firstName).toBe('first');
  });
});
