export type ChildrenProps = {
  id: number;
  picture: string;
  heading?: string;
  caption?: string;
  tag?: string;
  link?: string;
};

export type CarouselProps = {
  item: ChildrenProps[];
  variant: 'Default' | 'Slider' | 'PopUp';
  initialSlide?: number;
};
