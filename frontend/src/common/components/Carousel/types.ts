export type ChildrenProps = {
  id: string;
  picture: string;
  heading?: string;
  caption?: string;
  tag?: string;
  link?: string;
};

export type CarouselTitle = {
  heading?: string;
  description?: string;
  link?: string;
};

export type CarouselProps = {
  item: ChildrenProps[];
  title?: CarouselTitle;
  variant: 'Default' | 'Slider' | 'PopUp';
  fullText: boolean;
  arrows: boolean;
};
