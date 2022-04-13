import { CarouselItem } from 'common/components/Carousel/types';
import { STATIC_NEWS_ID_LINK, STATIC_NEWS_ID_LINK_PATTERN } from 'common/constants/links';
import { GetHomeQuery, GetHomeQueryResult } from 'common/generated/generated-types';
import { joinImageStrapi } from 'common/utils/join';

const REGEX_PATTERN = /<[^>]*>/g;

type UseHomeContentParser = {
  mainCarousal: CarouselItem[];
  activityAndAwardsCarousal: CarouselItem[];
};

// TODO: test
export const useHomeContentParser = (data?: GetHomeQuery): UseHomeContentParser => {
  function commonMapper(e: any, i: number) {
    return {
      id: i,
      picture: joinImageStrapi(e?.image?.url || ''),
      heading: e?.title,
      caption: e?.description.replaceAll(REGEX_PATTERN, ''),
    };
  }

  const mainCarousal = data?.home?.main_canvas?.map((e, i) => ({
    ...commonMapper(e, i),

    link:
      e?.news_announcement?.seo_link &&
      STATIC_NEWS_ID_LINK.replace(STATIC_NEWS_ID_LINK_PATTERN, e?.news_announcement?._id),
  }));

  const activityAndAwardsCarousal = data?.home?.activities_n_awards?.map((e, i) => ({
    ...commonMapper(e, i),

    tag: e?.tag?.tag_name || '',
    link: '#',
  }));

  return {
    mainCarousal: mainCarousal || [],
    activityAndAwardsCarousal: activityAndAwardsCarousal || [],
  };
};
