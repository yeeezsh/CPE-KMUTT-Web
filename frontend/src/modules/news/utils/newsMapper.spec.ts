import { CardVariant } from 'common/components/Card/types';
import { GetNewsQuery } from 'common/generated/generated-types';

import { newsMapper } from 'modules/news/utils/newsMapper';

const MOCK_API: GetNewsQuery = {
  newsAndAnnouncements: [
    {
      _id: '611c118368757f039a09a299',
      header: 'test',
      canvas_preview: {
        url: '/uploads/Screen_Shot_2564_06_09_at_22_48_25_f94d4f73aa.png',
      },
      dynamic_content: [
        {
          __typename: 'ComponentContentSectionsTextContent',
          body: 'test',
        },
        {
          __typename: 'ComponentContentSectionsGridImage',
        },
      ],
      createdAt: '2021-08-17T19:44:03.806Z',
    },
    {
      _id: '6134fad39f62d60101e39103',
      header: 'test 2',
      canvas_preview: {
        url: '/uploads/Screen_Shot_2564_06_09_at_22_48_25_f94d4f73aa.png',
      },
      dynamic_content: [
        {
          __typename: 'ComponentContentSectionsTextContent',
          body: '<p>euieieieeiei</p>',
        },
      ],
      createdAt: '2021-09-05T17:13:55.587Z',
    },
    {
      _id: '615339ea7495b0001f4bb02c',
      header: 'canvas',
      canvas_preview: {
        url: '/uploads/Screen_Shot_2564_06_06_at_15_53_08_ddf132fb2d.png',
      },
      dynamic_content: [],
      createdAt: '2021-09-28T15:51:06.394Z',
    },
    {
      _id: '61533d127495b0001f4bb02e',
      header: 'normal varian',
      canvas_preview: null,
      dynamic_content: [
        {
          __typename: 'ComponentContentSectionsTextContent',
          body:
            'normal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal variannormal varian',
        },
      ],
      createdAt: '2021-09-28T16:04:34.810Z',
    },
  ],
} as GetNewsQuery;

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
