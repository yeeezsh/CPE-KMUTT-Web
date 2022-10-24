export enum MenuType {
  Desktop,
  Mobile,
  Footer,
  DesktopQuickMenu,
  MobileQuickMenu,
}

export type SubMenu = Omit<MenuItem, 'types'>;

export type MenuItem = {
  key: string;
  label?: string;
  link?: string;
  subMenu?: SubMenu[];
  picture?: string;
  types: MenuType[];
};
