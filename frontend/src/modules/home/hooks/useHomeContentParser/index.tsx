import dayjs from 'dayjs';

import { CardProps, CardVariant } from 'common/components/Card/types';
import { CarouselItem } from 'common/components/Carousel/types';
import { NEWS_DATE_FORMAT } from 'common/constants/format';
import { STATIC_NEWS_ID_LINK, STATIC_NEWS_ID_LINK_PATTERN } from 'common/constants/links';
import {
  ComponentContentSectionsTextContent,
  GetHomeQuery,
} from 'common/generated/generated-types';
import { ImageStrapiUrl } from 'common/utils/url';

const MAX_DESCRIPTION_LENGTH = 240;
const MAX_DESCRIPTION_LENGTH_PRIMARY = 55;
const REGEX_PATTERN = /<[^>]*>/g;

type UseHomeContentParser = {
  mainCarousal: CarouselItem[];
  activityAndAwardsCarousal: CarouselItem[];
  whatsNews: CardProps[];
};

export const useHomeContentParser = (data?: GetHomeQuery): UseHomeContentParser => {
  function commonMapper(e: any, i: number) {
    return {
      id: i,
      picture: ImageStrapiUrl(e?.image?.url || ''),
      heading: e?.title,
      caption: e?.description.replaceAll(REGEX_PATTERN, ''),
    };
  }

  const mainCarousal = data?.home?.main_canvas?.map((e, i) => ({
    ...commonMapper(e, i),
    link:
      e?.news_announcement?.seo_link &&
      STATIC_NEWS_ID_LINK.replace(STATIC_NEWS_ID_LINK_PATTERN, e?.news_announcement?._id),
  })) as CarouselItem[];

  const activityAndAwardsCarousal = data?.home?.activities_n_awards?.map((e, i) => ({
    ...commonMapper(e, i),

    tag: e?.tag?.tag_name || '',
    link: '#',
  })) as CarouselItem[];

  const whatsNews = data?.newsAndAnnouncements?.map((e) => {
    const getDesc = e?.dynamic_content?.find(
      (d) => d?.__typename === 'ComponentContentSectionsTextContent' && d.body,
    ) as { __typename: 'ComponentContentSectionsTextContent' } & Pick<
      ComponentContentSectionsTextContent,
      'body'
    >;
    const isPrimary = e?.canvas_preview?.url;

    const trimmedDesc =
      (getDesc && isPrimary
        ? getDesc?.body?.slice(0, MAX_DESCRIPTION_LENGTH_PRIMARY)
        : getDesc?.body?.slice(0, MAX_DESCRIPTION_LENGTH)) || '';
    return {
      id: e?._id,
      title: e?.header,
      description: trimmedDesc.replaceAll(REGEX_PATTERN, ''),
      thumbnail: e?.canvas_preview?.url
        ? ImageStrapiUrl(e.canvas_preview.url)
        : undefined,
      date: dayjs(e?.createdAt).format(NEWS_DATE_FORMAT),
      variant: isPrimary ? CardVariant.primary : CardVariant.normal,
    };
  }) as CardProps[];

  return {
    mainCarousal,
    activityAndAwardsCarousal,
    whatsNews,
  };
};
