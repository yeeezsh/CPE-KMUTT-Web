import * as React from 'react';

import { shallow } from 'enzyme';
import ContactUs from 'pages/contact-us';

describe('Contact Us Page', () => {
  it('Contact Us to match snapshot', () => {
    const wrapper = shallow(<ContactUs />);
    expect(wrapper).toMatchSnapshot();
  });
});
