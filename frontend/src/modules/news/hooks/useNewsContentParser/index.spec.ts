import { GetNewsByIdQuery } from 'common/generated/generated-types';

import { useNewsContentParser } from 'modules/news/hooks/useNewsContentParser';

const MOCK_API: GetNewsByIdQuery = {
  newsAndAnnouncement: {
    __typename: 'NewsAndAnnouncement',
    _id: '6251cfdd9b3a82002f857495',
    locale: 'en',
    header: 'Announcement freshmen 2',
    canvas_preview: {
      __typename: 'UploadFile',
      url: '/uploads/Screen_Shot_2565_04_10_at_01_25_36_640b8cdc10.png',
    },
    tags: [
      {
        __typename: 'Tag',
        tag_name: 'freshmen',
        locale: 'en',
      },
    ],
    dynamic_content: [
      {
        __typename: 'ComponentContentSectionsTextContent',
        id: '6251cfdd9b3a82002f857496',
        body:
          "<p>Department of Computer Engineering Faculty of Engineering, King Mongkut's University of Technology Thonburi It was founded and offered a bachelor's degree from the academic year. 2531, but was approved to establish an agency Department of Computer Engineering and announced in a royal decree on February 11, 1997, Department of Computer Engineering It offers both bachelor's, master's and doctoral degrees. At the bachelor's level, there are 2 programs which are Bachelor of Engineering Program in Computer Engineering (Normal) and Bachelor of Engineering Program in Computer Engineering. (international program) for the master's degree is a Master of Engineering program and Master of Science in Computer Engineering. and at the doctoral level is the Doctor of Philosophy program in Electrical and Computer Engineering.</p>",
      },
    ],
    createdAt: '2022-04-09T18:26:37.177Z',
    updatedAt: '2022-04-09T19:36:14.266Z',
  },
};
describe('useNewsContentParser hooks', () => {
  it('should parse dynamic content correctly', () => {
    const { contents } = useNewsContentParser(MOCK_API);
    expect(contents?.pop()?.key).toEqual('6251cfdd9b3a82002f857496');
  });
  it('should parse date/thumbnail correctly', () => {
    const { postDate, thumbnail } = useNewsContentParser(MOCK_API);
    expect(postDate).toEqual('Sunday, 10 April 2022');
    expect(thumbnail).toEqual(
      'http://localhost:1337/uploads/Screen_Shot_2565_04_10_at_01_25_36_640b8cdc10.png',
    );
  });
});
