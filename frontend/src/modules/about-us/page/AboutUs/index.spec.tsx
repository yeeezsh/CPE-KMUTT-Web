import React from 'react';

import { shallow } from 'enzyme';

import AboutUs from 'modules/about-us/page/AboutUs';
describe('AboutUs page', () => {
  it('should matched snapshots', () => {
    const wrapper = shallow(<AboutUs id="1" />);
    expect(wrapper).toMatchSnapshot();
  });
});
