import { MenuItem, MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import {
  ComponentCommonMenuConfig,
  GetMenusQuery,
} from 'common/generated/generated-types';
import { mappingMenuType, menuMapping, menuType } from 'common/utils/menuMapping';

describe('mappingMenuType tests', () => {
  const MOCK = 'Desktop';

  it('should map correctly', () => {
    const testSubject = mappingMenuType(MOCK);
    expect(testSubject).toBe(MenuType.Desktop);
  });
});

describe('menuType tests', () => {
  const MOCK: Partial<ComponentCommonMenuConfig> = {
    Desktop: true,
    Mobile: true,
    MobileQuickMenu: false,
  };

  it('should mapping correctly', () => {
    const testSubject = menuType(MOCK as ComponentCommonMenuConfig);
    expect(testSubject).toEqual([MenuType.Desktop, MenuType.Mobile]);
  });
});

describe('menuMapping tests', () => {
  const MOCK_API: GetMenusQuery = {
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
        menus: [],
      },
    ],
  };

  const EXPECTED: MenuItem = {
    key: '6356a4667e1a3e001eb7beab',
    label: 'ปริญญาตรี',
    picture: 'http://localhost:1337/files/Rectangle 33.png',
    subMenu: [
      { key: '6356a658082b2a006275e4ed', label: 'หลักสูตรปกติ', link: '' },
      { key: '6356ab0b71cb58002e41b56d', label: 'หลักสูตรนานาชาติ', link: '' },
    ],
    types: [MenuType.Desktop, MenuType.Mobile, MenuType.Footer],
  };

  it('should map main menu correctly', () => {
    const testSubject = menuMapping(MOCK_API);
    expect(testSubject[0]).toEqual(EXPECTED);
  });
});
