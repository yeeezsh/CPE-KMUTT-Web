export type CarouselItem = {
  id: number;
  picture: string;
  heading?: string;
  caption?: string;
  tag?: string;
  link?: string;
};

export type CarouselProps = {
  item: CarouselItem[];
  variant: 'Default' | 'Slider' | 'PopUp';
  initialSlide?: number;
};
