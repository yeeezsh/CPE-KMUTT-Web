import { CardVariant } from 'common/components/Card/types';
import { GetNewsByTagSeoLinkQuery } from 'common/generated/generated-types';

import { newsMapper } from 'modules/news/utils/newsMapper';

const MOCK_API: GetNewsByTagSeoLinkQuery = {
  newsAndAnnouncements: [
    {
      _id: '625304b36079e600207d6bf6',
      header: 'ข่าวสารทั่วไป 1',
      canvas_preview: null,
      dynamic_content: [
        {
          __typename: 'ComponentContentSectionsTextContent',
          body:
            '<h1>ทดสอบข่าวสารทั่วไป</h1>\n<p>ซ้าย</p>\n<p style="text-align: center;">กลาง</p>\n<p style="text-align: right;">ขวา</p>',
        },
      ],
      createdAt: '2022-04-10T16:24:19.498Z',
    },
    {
      _id: '6251d112d76d140063baec29',
      header: 'ประกาศรายชื่อผู้มีสิทธิ์สอบสัมภาษณ์ โครงการ Active Recruitment รอบที่ 2',
      canvas_preview: {
        url: '/uploads/Screen_Shot_2565_04_10_at_01_25_36_640b8cdc10.png',
      },
      dynamic_content: [
        {
          __typename: 'ComponentContentSectionsTextContent',
          body:
            '<p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เริ่มก่อตั้งและเปิดสอนในระดับปริญญาตรีตั้งแต่ปีการศึกษา 2531แต่ได้รับการอนุมัติให้จัดตั้งหน่วยงาน ภาควิชาวิศวกรรมคอมพิวเตอร์และประกาศในพระราชกฤษฎีกา เมื่อวันที่ 11 กุมภาพันธ์ 2540ภาควิชาวิศวกรรมคอมพิวเตอร์ เปิดสอนทั้งในระดับปริญญาตรี ปริญญาโท และปริญญาเอกโดยในระดับปริญญาตรี แบ่งเป็น 2 หลักสูตร คือ หลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์(ปกติ) และหลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิศวกรรมคอมพิวเตอร์ (หลักสูตรนานาชาติ) ส่วนในระดับปริญญาโท คือหลักสูตรวิศวกรรมศาสตรมหาบัณฑิต และวิทยาศาสตรมหาบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์ และในระดับปริญญาเอก คือ หลักสูตรปรัชญาดุษฎีบัณฑิตสาขาวิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์</p>',
        },
      ],
      createdAt: '2022-04-09T18:31:46.504Z',
    },
  ],
};

describe('newsMapper should mapping correctly', () => {
  it('should get description from content correctly', () => {
    const mapped = newsMapper(MOCK_API);

    expect(mapped).toHaveLength(MOCK_API.newsAndAnnouncements?.length || 0);
    expect(mapped?.map((e) => e.description).some((d) => d.length > 0)).toBe(true);
  });

  it('should mappped a varaint style from content correctly', () => {
    const mapped = newsMapper(MOCK_API);
    const haveLink = mapped?.find((e) => e.link);
    const noLink = mapped?.find((e) => !e.link);

    expect(haveLink?.variant).toBe(CardVariant.primary);
    expect(noLink?.variant).toBe(CardVariant.normal);
  });

  describe('newsMapper should map description correctly', () => {
    const mapped = newsMapper(MOCK_API);
    const foundHTMLTag = mapped?.some((e) => e.description.includes('<p>'));
    expect(foundHTMLTag).toBe(false);
  });
});
