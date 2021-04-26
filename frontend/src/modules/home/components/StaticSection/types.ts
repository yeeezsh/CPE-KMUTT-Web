interface Static {
  primary?: boolean;
}

export interface StaticProps extends Partial<Static> {
  id: string;
  background: string;
  header: string;
  content: string;
}
