import { STATIC_NEWS_CATEGORY_LINK } from 'common/constants/links';
import { GetNewsByTagSeoLinkQuery } from 'common/generated/generated-types';

import { useTagsCategories } from 'modules/news/hooks/useTagCategories';

const MOCK_API: GetNewsByTagSeoLinkQuery = {
  tags: [
    {
      tag_id: 'freshmen_th',
      seo_link: 'freshmen',
      tag_name: 'นักศึกษาใหม่',
    },
    {
      tag_id: 'current-student-th',
      seo_link: 'current-student',
      tag_name: 'สำหรับนักศึกษาปัจจุบัน',
    },
    {
      tag_id: 'activities_th',
      seo_link: 'activities',
      tag_name: 'กิจกรรมนักศึกษา',
    },
    {
      tag_id: 'scholarship_th',
      seo_link: 'scholarship',
      tag_name: 'ทุนการศึกษา',
    },
  ],
  newsAndAnnouncements: [
    {
      _id: '6255c2f9a2c4bd000e3448dc',
      header: 'Announcement freshmen 3',
      canvas_preview: {
        url: '/uploads/Screen_Shot_2565_04_10_at_01_25_36_640b8cdc10.png',
      },
      tags: [
        {
          tag_id: 'freshmen',
          tag_name: 'Freshmen',
          seo_link: 'freshmen',
        },
      ],
      dynamic_content: [
        {
          __typename: 'ComponentContentSectionsTextContent',
          body:
            "<p>&nbsp;</p>\n<p>Department of Computer Engineering Faculty of Engineering, King Mongkut's University of Technology Thonburi It was founded and offered a bachelor's degree from the academic year. <span style=\"color: rgb(53, 152, 219);\">2531, but was approved to establish an agency Department of Computer Engineering and announced in a royal decree on February 11, 1997, Department of Computer Engineering It offers both bachelor's, master's and doctoral</span> degrees. At the bachelor's level, there are 2 programs which are Bachelor of Engineering Program in Computer Engineering (Normal) and Bachelor of Engineering Program in Computer Engineering. <span style=\"color: rgb(224, 62, 45);\">(international program) for the master's degree is a Master of Engineering program and Master of Science in Computer Engineering</span>. and at the doctoral level is the Doctor of Philosophy program in Electrical and Computer Engineering.</p>",
        },
      ],
      createdAt: '2022-04-12T18:20:41.390Z',
    },
    {
      _id: '6251cfdd9b3a82002f857495',
      header: 'Announcement freshmen 2',
      canvas_preview: {
        url: '/uploads/Screen_Shot_2565_04_10_at_01_25_36_640b8cdc10.png',
      },
      tags: [
        {
          tag_id: 'freshmen',
          tag_name: 'Freshmen',
          seo_link: 'freshmen',
        },
      ],
      dynamic_content: [
        {
          __typename: 'ComponentContentSectionsTextContent',
          body:
            "<p>Department of Computer Engineering Faculty of Engineering, King Mongkut's University of Technology Thonburi It was founded and offered a bachelor's degree from the academic year. 2531, but was approved to establish an agency Department of Computer Engineering and announced in a royal decree on February 11, 1997, Department of Computer Engineering It offers both bachelor's, master's and doctoral degrees. At the bachelor's level, there are 2 programs which are Bachelor of Engineering Program in Computer Engineering (Normal) and Bachelor of Engineering Program in Computer Engineering. (international program) for the master's degree is a Master of Engineering program and Master of Science in Computer Engineering. and at the doctoral level is the Doctor of Philosophy program in Electrical and Computer Engineering.</p>",
        },
      ],
      createdAt: '2022-04-09T18:26:37.177Z',
    },
  ],
};

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    query: {
      id: 'all',
    },
    beforePopState: jest.requireActual('next/router'),
  })),
}));

describe('useTagsCategories hooks', () => {
  it('should map link correctly', () => {
    const tags = useTagsCategories(MOCK_API);

    expect(tags[0].link).toEqual(STATIC_NEWS_CATEGORY_LINK);
    expect(tags[0].active).toBe(true);
    expect(tags[1].link).toEqual('\\news\\category\\freshmen');
    expect(tags[1].active).toBe(false);
    expect(tags.filter((e) => e.active).length).toBe(1);
  });
});
