import { MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import { ComponentCommonMenuConfig } from 'common/generated/generated-types';

export default function menuTypeMapper(config: ComponentCommonMenuConfig): MenuType[] {
  const configs = Object.entries(config);
  const parsed = configs.map((c) => ({
    type: mapMenuApiTypeToMenuType(c[0]),
    value: Boolean(c[1]),
  }));
  const filtered = parsed.filter((el) => el.value).map((el) => el.type);

  return filtered;
}

function mapMenuApiTypeToMenuType(type: string): MenuType {
  switch (type) {
    case 'Desktop':
      return MenuType.Desktop;
    case 'Mobile':
      return MenuType.Mobile;
    case 'Footer':
      return MenuType.Footer;
    case 'DesktopQuickMenu':
      return MenuType.DesktopQuickMenu;
    case 'MobileQuickMenu':
      return MenuType.MobileQuickMenu;
    case '__typename':
      return MenuType.None;
  }

  console.warn(type);
  console.warn('cannot find matching menu type');
  return MenuType.None;
}
