import { shallow } from 'enzyme';
import * as React from 'react';
import CommonLayout from '.';

describe('Wrpper Compnent', () => {
  it('Wrapper Compnent should be defined', () => {
    const wrap = shallow(<CommonLayout>test children</CommonLayout>);
    expect(wrap.exists()).toBe(true);
  });
});
