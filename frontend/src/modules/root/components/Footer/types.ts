interface Footer {
  label?: string;
  link?: string;
  subMenu?: FooterProps[];
}

export interface FooterProps extends Partial<Footer> {
  key: string;
}
