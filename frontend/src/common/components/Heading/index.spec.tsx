import * as React from 'react';

import { shallow } from 'enzyme';

import Heading from '.';

describe('<Heading />', () => {
  it('should render children', () => {
    const wrap = shallow(<Heading variant="h1">This is heading</Heading>);

    expect(wrap.text()).toBe('This is heading');
  });
});
