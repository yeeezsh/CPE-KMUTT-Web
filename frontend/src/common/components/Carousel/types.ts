export type CarouselProps = {
  id: string;
  picture: string;
  heading?: string;
  caption?: string;
  tag?: string;
  links?: string[];
};

export type ChildProps = {
  item: CarouselProps[];
};
