import { shallow } from 'enzyme';
import * as React from 'react';
import WrapperSection from '.';

describe('Wrpper Compnent', () => {
  it('Wrapper Compnent should be defined', () => {
    const wrap = shallow(<WrapperSection>test children</WrapperSection>);
    expect(wrap.exists()).toBe(true);
  });
});
