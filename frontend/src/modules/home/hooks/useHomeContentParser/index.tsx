import { CarouselItem } from 'common/components/Carousel/types';
import {
  STATIC_NEWS_CATEGORY_ID_LINK,
  STATIC_NEWS_ID_LINK,
  STATIC_NEWS_ID_LINK_PATTERN,
} from 'common/constants/links';
import { GetHomeQuery } from 'common/generated/generated-types';
import { joinImageStrapi } from 'common/utils/join';

const REGEX_PATTERN = /<[^>]*>/g;

type UseHomeContentParser = {
  mainCarousal: CarouselItem[];
  activityAndAwardsCarousal: CarouselItem[];
};

// TODO: test
export const useHomeContentParser = (data?: GetHomeQuery): UseHomeContentParser => {
  const mainCarousal = data?.home?.main_canvas?.map((e, i) => ({
    id: i,
    picture: joinImageStrapi(e?.image?.url || ''),
    heading: e?.title,
    caption: e?.description.replaceAll(REGEX_PATTERN, ''),
    link:
      e?.news_announcement?.seo_link &&
      STATIC_NEWS_ID_LINK.replace(STATIC_NEWS_ID_LINK_PATTERN, e?.news_announcement?._id),
  }));

  console.log(mainCarousal);
  return { mainCarousal: mainCarousal || [], activityAndAwardsCarousal: [] };
};
