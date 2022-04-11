import dayjs from 'dayjs';

import { CardVariant } from 'common/components/Card/types';
import { NEWS_DATE_FORMAT } from 'common/constants/format';
import { GetNewsByIdQuery } from 'common/generated/generated-types';

import { useNewsContentParser } from 'modules/news/hooks/useNewsContentParser';

const MOCK_API: GetNewsByIdQuery = {
  newsAndAnnouncement: {
    _id: '6251d112d76d140063baec29',
    locale: 'th',
    header: 'ประกาศรายชื่อผู้มีสิทธิ์สอบสัมภาษณ์ โครงการ Active Recruitment รอบที่ 2',
    canvas_preview: {
      url: '/uploads/Screen_Shot_2565_04_10_at_01_25_36_640b8cdc10.png',
    },
    tags: [
      {
        tag_name: 'นักศึกษาใหม่',
        locale: 'th',
        tag_id: 'freshmen_th',
        _id: '6251d058816e7b00530ba824',
        seo_link: 'freshmen',
      },
    ],
    dynamic_content: [
      {
        __typename: 'ComponentContentSectionsTextContent',
        id: '6251d112d76d140063baec2a',
        body:
          '<p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เริ่มก่อตั้งและเปิดสอนในระดับปริญญาตรีตั้งแต่ปีการศึกษา 2531แต่ได้รับการอนุมัติให้จัดตั้งหน่วยงาน ภาควิชาวิศวกรรมคอมพิวเตอร์และประกาศในพระราชกฤษฎีกา เมื่อวันที่ 11 กุมภาพันธ์ 2540ภาควิชาวิศวกรรมคอมพิวเตอร์ เปิดสอนทั้งในระดับปริญญาตรี ปริญญาโท และปริญญาเอกโดยในระดับปริญญาตรี แบ่งเป็น 2 หลักสูตร คือ หลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์(ปกติ) และหลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิศวกรรมคอมพิวเตอร์ (หลักสูตรนานาชาติ) ส่วนในระดับปริญญาโท คือหลักสูตรวิศวกรรมศาสตรมหาบัณฑิต และวิทยาศาสตรมหาบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์ และในระดับปริญญาเอก คือ หลักสูตรปรัชญาดุษฎีบัณฑิตสาขาวิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์</p>',
      },
    ],
    download: {
      files: [
        {
          url: '/uploads/Test_PD_Ffile_cdbe4170b9.pdf',
          name: 'TestPDFfile.pdf',
          _id: '6254484405e2c3000e833850',
          mime: 'application/pdf',
        },
        {
          url: '/uploads/dummy_c6cf8c349c.pdf',
          name: 'dummy.pdf',
          _id: '6254484305e2c3000e83384f',
          mime: 'application/pdf',
        },
      ],
    },
    createdAt: '2022-04-09T18:31:46.504Z',
    updatedAt: '2022-04-11T15:25:16.772Z',
  },
  newsAndAnnouncementsConnection: {
    values: [
      {
        _id: '625304b36079e600207d6bf6',
        header: 'ข่าวสารทั่วไป 1',
        canvas_preview: null,
        dynamic_content: [
          {
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
            body:
              '<p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เริ่มก่อตั้งและเปิดสอนในระดับปริญญาตรีตั้งแต่ปีการศึกษา 2531แต่ได้รับการอนุมัติให้จัดตั้งหน่วยงาน ภาควิชาวิศวกรรมคอมพิวเตอร์และประกาศในพระราชกฤษฎีกา เมื่อวันที่ 11 กุมภาพันธ์ 2540ภาควิชาวิศวกรรมคอมพิวเตอร์ เปิดสอนทั้งในระดับปริญญาตรี ปริญญาโท และปริญญาเอกโดยในระดับปริญญาตรี แบ่งเป็น 2 หลักสูตร คือ หลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์(ปกติ) และหลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิศวกรรมคอมพิวเตอร์ (หลักสูตรนานาชาติ) ส่วนในระดับปริญญาโท คือหลักสูตรวิศวกรรมศาสตรมหาบัณฑิต และวิทยาศาสตรมหาบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์ และในระดับปริญญาเอก คือ หลักสูตรปรัชญาดุษฎีบัณฑิตสาขาวิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์</p>',
          },
        ],
        createdAt: '2022-04-09T18:31:46.504Z',
      },
    ],
  },
};
describe('useNewsContentParser hooks', () => {
  it('should parse dynamic content correctly', () => {
    const { contents } = useNewsContentParser(MOCK_API);

    expect(contents?.pop()?.key).toEqual('6251d112d76d140063baec2a');
  });

  it('should parse date/thumbnail/download correctly', () => {
    const { postDate, thumbnail, download } = useNewsContentParser(MOCK_API);

    expect(postDate).toEqual(
      dayjs(MOCK_API.newsAndAnnouncement?.createdAt).format(NEWS_DATE_FORMAT),
    );
    expect(thumbnail).toEqual(
      'http://localhost:1337/uploads/Screen_Shot_2565_04_10_at_01_25_36_640b8cdc10.png',
    );
    expect(download && download[0].link).toBe(
      'http://localhost:1337/uploads/Test_PD_Ffile_cdbe4170b9.pdf',
    );
  });

  it('should parse connection correctly', () => {
    const { connections } = useNewsContentParser(MOCK_API);
    expect(connections && connections[0].variant).toBe(CardVariant.normal);
    expect(connections && connections[1].variant).toBe(CardVariant.primary);
  });
});
