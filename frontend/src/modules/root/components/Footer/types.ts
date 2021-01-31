interface Footer {
  primary?: boolean;
}

export interface FooterProps extends Partial<Footer> {
  id: string;
}
