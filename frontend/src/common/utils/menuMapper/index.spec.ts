import { MenuItem, MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import { STATIC_NEWS_LINK } from 'common/constants/links';
import {
  ComponentCommonMenuConfig,
  Enum_Componentcommoninternalpages_Internal_Pages,
  GetMenuQuery,
} from 'common/generated/generated-types';
import {
  mapMenuApiTypeToMenuType,
  menuLinkMapper,
  menuMapping,
  menuTypeMapper,
  sortMenuAsc,
} from 'common/utils/menuMapping';
import { SubMenuGenerated } from 'common/utils/menuMapping/types';

describe('mappingSubMenuLink tests', () => {
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

describe('mappingMenuType tests', () => {
  const MOCK = 'Desktop';

  it('should map correctly', () => {
    const testSubject = mapMenuApiTypeToMenuType(MOCK);
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
    const testSubject = menuTypeMapper(MOCK as ComponentCommonMenuConfig);
    expect(testSubject).toEqual([MenuType.Desktop, MenuType.Mobile]);
  });
});

describe('sort menu', () => {
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
    const testSubject = sortMenuAsc(MOCK_API);
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
    const testSubject = sortMenuAsc(MOCK_API);
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
    const testSubject = menuMapping(MOCK_API);
    expect(testSubject[0]).toEqual(EXPECTED);
  });
});
