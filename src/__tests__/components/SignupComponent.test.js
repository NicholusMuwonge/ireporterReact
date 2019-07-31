import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/Login/Login';
import SignUp from '../../components/Signup/Signup';
import Home from '../../components/home/Home';
import NavBar from '../../components/navbar/Navbar';
import notFound from '../../components/notFound/NotFound';


describe('<Login />', () => {
  let wrapper;
  const props = {
    state: {
      data: {
        username: 'first',
      },
    },
    data: { },
  };
  it('it should render component without fail', () => {
    wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render component without fail', () => {
    wrapper = shallow(<SignUp {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render component without fail', () => {
    wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render component without fail', () => {
    wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render component without fail', () => {
    wrapper = shallow(<notFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
