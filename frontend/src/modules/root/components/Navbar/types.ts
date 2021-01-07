export type MenuItem = {
  key: string;
  label?: string;
  link?: string;
  subMenu?: MenuItem[];
  picture?: string;
};

export type SubMenu = {
  key: string;
  label: string;
  children?: MenuItem[];
  link?: string;
};
