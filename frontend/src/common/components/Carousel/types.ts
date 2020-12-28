export type ChildrenProps = {
  id: string;
  picture: string;
  heading?: string;
  caption?: string;
  tag?: string;
  link?: string;
};

export type SlideProps = {
  item: ChildrenProps[];
  variant: 'Default' | 'Activity';
};

//อะไรประมาณนี้ แก้ด้วย
export type CarouselProps = SlideProps | boolean;
