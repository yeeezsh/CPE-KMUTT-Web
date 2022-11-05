import { MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import { ComponentCommonMenuConfig } from 'common/generated/generated-types';
import menuTypeMapper from 'common/utils/menuMapper/menuTypeMapper';

describe('menuTypeMapper Tests', () => {
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
