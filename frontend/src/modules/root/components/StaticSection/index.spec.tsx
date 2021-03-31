import { shallow } from 'enzyme';
import * as React from 'react';
import StaticSection from '.';

describe('Index page', () => {
  it('Index page should be defined', () => {
    const wrap = shallow(
      <StaticSection
        id="1"
        background="/images/static_bg_curriculum.png"
        header="ที่วิศวกรรมคอมพิวเตอร์ มจธ. เรามีหลักสูตรหลากหลาย"
        content="เซ็นเตอร์เวิร์คฟลุทแอดมิสชันออร์แกน ใช้งานรูบิค แซมบ้าเมาท์
            แอดมิชชั่นคัตเอาต์โครนาโอ้ยเซ็นเซอร์ ผู้นำเมจิควิทย์ บลอนด์แทคติคไอซียูเยลลี่"
      />,
    );
    expect(wrap.exists()).toBe(true);
  });
});
