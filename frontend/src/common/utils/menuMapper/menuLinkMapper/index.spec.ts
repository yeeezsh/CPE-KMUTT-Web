import { STATIC_NEWS_LINK } from 'common/constants/links';
import { Enum_Componentcommoninternalpages_Internal_Pages } from 'common/generated/generated-types';
import menuLinkMapper from 'common/utils/menuMapper/menuLinkMapper';
import { SubMenuGenerated } from 'common/utils/menuMapper/types';

describe('menuLinkMapper tests', () => {
  const MOCK: SubMenuGenerated = {
    title: 'สำหรับนักศึกษาปัจจุบัน',
    id: '6356ae0852303c009ebe5002',
    url: 'https://admission.kmutt.ac.th/',
    news_announcement: {
      id: '6356ab1771cb58002e41b570',
      seo_link: 'news-111',
    },
    internal_page: {
      internal_pages: Enum_Componentcommoninternalpages_Internal_Pages.News,
    },
  };

  it('should ordering map the url correctly', () => {
    const testSubject = menuLinkMapper(MOCK);
    expect(testSubject).toBe(STATIC_NEWS_LINK);
  });
});
