import React from 'react';
import { shallow } from 'enzyme';
import RecordFetchComponent from '../../components/records/Recordfetch';


describe('<RecordFetchComponent />', () => {
  const props = {
    record: {
      body: 'sleek',
    },
  };

  it('it should render component without fail', () => {
    const wrapper = shallow(<RecordFetchComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
