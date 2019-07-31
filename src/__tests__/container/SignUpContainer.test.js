import React from 'react';
import { shallow } from 'enzyme';
import { SignUpContainer, mapStateToProps } from '../../containers/SignupContainer';


describe('SignUpContainer', () => {
  let wrapper;
  const props = {
    data: {
      user_name: 'firstname',
    },
    loading: false,
    SignUpAction: jest.fn(),
    record: {},
  };
  beforeEach(() => {
    wrapper = shallow(<SignUpContainer {...props} />);
  });
  it('renders without fail', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('it should map state to props', () => {
    const state = {
      SignUpReducers: {
        record: {
          data: {},
        },
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
