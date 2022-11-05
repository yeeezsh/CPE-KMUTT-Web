import { GetMenuQuery } from 'common/generated/generated-types';
import menuSortAsc from 'common/utils/menuMapper/menuSortAsc';

describe('menuSortAsc Tests', () => {
  const MOCK_API: GetMenuQuery = {
    mainMenus: [
      {
        id: '6356a4667e1a3e001eb7beab',
        title: 'ปริญญาตรี',
        order: -1,
        thumbnail: {
          url: '/files/Rectangle 33.png',
        },
        menu_config: {
          Desktop: true,
          Mobile: true,
          Footer: true,
          DesktopQuickMenu: false,
          MobileQuickMenu: false,
        },
        menus: [
          {
            title: 'หลักสูตรปกติ',
            order: 1,
            id: '6356a658082b2a006275e4ed',
            url: null,
            news_announcement: null,
            internal_page: {
              internal_pages: 'news' as any,
            },
          },
          {
            title: 'หลักสูตรนานาชาติ',
            order: -10,
            id: '6356ab0b71cb58002e41b56d',
            url: null,
            news_announcement: {
              id: '6356ab1771cb58002e41b570',
              seo_link: 'news-111',
            },
            internal_page: {
              internal_pages: null,
            },
          },
        ],
      },
      {
        id: '6356adf752303c009ebe4fff',
        title: 'Quick Menu',
        order: 10,
        thumbnail: null,
        menu_config: {
          Desktop: false,
          Mobile: false,
          Footer: false,
          DesktopQuickMenu: true,
          MobileQuickMenu: true,
        },
        menus: [
          {
            title: 'สำหรับนักศึกษาปัจจุบัน',
            id: '6356ae0852303c009ebe5002',
            url: 'https://admission.kmutt.ac.th/',
            news_announcement: null,
            internal_page: null,
          },
        ],
      },
    ],
  };

  it('should map main menu correctly', () => {
    const testSubject = menuSortAsc(MOCK_API);
    expect(testSubject).not.toBeUndefined();
    expect(testSubject.mainMenus).not.toBeUndefined();
    expect(
      testSubject &&
        testSubject.mainMenus &&
        testSubject.mainMenus[0] &&
        testSubject.mainMenus[0].title,
    ).toEqual('ปริญญาตรี');
    expect(
      testSubject &&
        testSubject.mainMenus &&
        testSubject.mainMenus[1] &&
        testSubject.mainMenus[1].title,
    ).toEqual('Quick Menu');
  });

  it('should map sub-menu correctly', () => {
    const testSubject = menuSortAsc(MOCK_API);
    expect(testSubject).not.toBeUndefined();
    expect(testSubject.mainMenus).not.toBeUndefined();
    expect(
      testSubject &&
        testSubject.mainMenus &&
        testSubject.mainMenus[0] &&
        testSubject.mainMenus[0].menus &&
        testSubject.mainMenus[0].menus[0]?.title,
    ).toEqual('หลักสูตรนานาชาติ');
    expect(
      testSubject &&
        testSubject.mainMenus &&
        testSubject.mainMenus[0] &&
        testSubject.mainMenus[0].menus &&
        testSubject.mainMenus[0].menus[1]?.title,
    ).toEqual('หลักสูตรปกติ');
  });
});
