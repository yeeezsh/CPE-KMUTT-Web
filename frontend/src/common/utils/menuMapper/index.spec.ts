import { MenuItem, MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import { GetMenuQuery } from 'common/generated/generated-types';
import menuMapper from 'common/utils/menuMapper';

describe('menuMapping tests', () => {
  const MOCK_API: GetMenuQuery = {
    mainMenus: [
      {
        id: '6356a4667e1a3e001eb7beab',
        title: 'ปริญญาตรี',
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
            id: '6356a658082b2a006275e4ed',
            url: null,
            news_announcement: null,
            internal_page: {
              internal_pages: 'news' as any,
            },
          },
          {
            title: 'หลักสูตรนานาชาติ',
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

  const EXPECTED: MenuItem = {
    key: '6356a4667e1a3e001eb7beab',
    label: 'ปริญญาตรี',
    picture: 'http://localhost:1337/files/Rectangle 33.png',
    subMenu: [
      { key: '6356a658082b2a006275e4ed', label: 'หลักสูตรปกติ', link: '/news' },
      {
        key: '6356ab0b71cb58002e41b56d',
        label: 'หลักสูตรนานาชาติ',
        link: '/news/6356ab1771cb58002e41b570',
      },
    ],
    types: [MenuType.Desktop, MenuType.Mobile, MenuType.Footer],
  };

  it('should map main menu correctly', () => {
    const testSubject = menuMapper(MOCK_API);
    expect(testSubject[0]).toEqual(EXPECTED);
  });
});
