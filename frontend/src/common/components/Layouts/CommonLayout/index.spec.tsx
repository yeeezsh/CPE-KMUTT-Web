import { shallow } from 'enzyme';
import * as React from 'react';
import CommonLayout, { FaqWithBanner } from '.';

describe('Wrpper Compnent', () => {
  it('CommomLayout Compnent should be defined', () => {
    const wrap = shallow(<CommonLayout>test children</CommonLayout>);
    expect(wrap.exists()).toBe(true);
  });

  it('CommomLayout should show FAQs banner when withFaqBanner=true', () => {
    const wrap = shallow(<CommonLayout withFaqBanner={true}>test children</CommonLayout>);
    expect(wrap.find(FaqWithBanner).exists()).toBe(true);
  });

  it('CommomLayout should disable FAQs banner when withFaqBanner=false', () => {
    const wrap = shallow(
      <CommonLayout withFaqBanner={false}>test children</CommonLayout>,
    );
    expect(wrap.find(FaqWithBanner).exists()).toBe(false);
  });
});
