export type ChildrenProps = {
  id: string;
  picture: string;
  heading?: string;
  caption?: string;
  tag?: string;
  link?: string;
};

export type CarouselProps = {
  item: ChildrenProps[];
  variant: 'Default' | 'Slider' | 'PopUp';
  fullText: boolean;
  arrows: boolean;
};
