import { MenuItem } from 'common/components/Navbar/components/NavbarMenu/types';
import { AntMenuItem } from 'common/types/menu';

export default function convertMenuItemToAntMenuItem({
  key,
  label,
  subMenu,
}: MenuItem): AntMenuItem {
  return {
    key,
    label,
    children: subMenu?.map(({ key: itemKey, label: itemLabel }) => ({
      key: `${key}_${itemKey}`,
      label: itemLabel,
      children: subMenu,
    })),
  };
}
