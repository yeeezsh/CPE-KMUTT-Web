import { CardVariant } from 'common/components/Card/types';
import {
  MAX_DESCRIPTION_LENGTH_PRIMARY,
  MAX_DESCRIPTION_LENGTH,
  REGEX_PATTERN,
} from 'common/constants/parser';
import {
  ComponentContentSectionsTextContent,
  GetNewsByIdQuery,
  GetNewsByTagSeoLinkQuery,
} from 'common/generated/generated-types';
import { ImageStrapiUrl } from 'common/utils/urls';

import { CardNewsConnectionProps } from 'modules/news/components/NewsContent/types';

type NewsMappedType = {
  _id: string;
  description: string;
  thumbnail?: string;
  date: string;
  raw_date: number;
  variant: CardVariant;
  title?: string;
};

export const newsMapper = (data: GetNewsByTagSeoLinkQuery): NewsMappedType[] => {
  return (
    data.newsAndAnnouncements?.map((e) => {
      const getDesc = e?.dynamic_content?.find(
        (d) => d?.__typename === 'ComponentContentSectionsTextContent' && d.body,
      ) as { __typename: 'ComponentContentSectionsTextContent' } & Pick<
        ComponentContentSectionsTextContent,
        'body'
      >;
      const isPrimary = e?.canvas_preview?.url;

      const trimmedDesc =
        (getDesc && isPrimary
          ? getDesc?.body
              ?.replaceAll(REGEX_PATTERN, '')
              .slice(0, MAX_DESCRIPTION_LENGTH_PRIMARY)
          : getDesc?.body
              ?.replaceAll(REGEX_PATTERN, '')
              .slice(0, MAX_DESCRIPTION_LENGTH)) || '';

      return {
        description: trimmedDesc,
        thumbnail: e?.canvas_preview?.url
          ? ImageStrapiUrl(e.canvas_preview.url)
          : undefined,
        _id: e?._id || Math.random().toLocaleString(),
        variant: isPrimary ? CardVariant.primary : CardVariant.normal,
        date: new Date(e?.createdAt).toLocaleDateString(),
        raw_date: new Date(e?.createdAt).valueOf(), // use for compare
        title: e?.header,
      };
    }) || []
  );
};

export const newsConnectionMapper = (
  data?: GetNewsByIdQuery,
): CardNewsConnectionProps[] => {
  const mapped = data?.newsAndAnnouncementsConnection?.values
    ?.map((e) => {
      const getDesc = e?.dynamic_content?.find(
        (d) => d?.__typename === 'ComponentContentSectionsTextContent' && d.body,
      ) as { __typename: 'ComponentContentSectionsTextContent' } & Pick<
        ComponentContentSectionsTextContent,
        'body'
      >;
      const isPrimary = e?.canvas_preview?.url;

      const trimmedDesc =
        (getDesc && isPrimary
          ? getDesc?.body
              ?.replaceAll(REGEX_PATTERN, '')
              .slice(0, MAX_DESCRIPTION_LENGTH_PRIMARY)
          : getDesc?.body
              ?.replaceAll(REGEX_PATTERN, '')
              .slice(0, MAX_DESCRIPTION_LENGTH)) || '';

      return {
        id: e?._id || Math.random().toLocaleString(),
        title: e?.header as string,
        description: trimmedDesc,
        date: new Date(e?.createdAt).toLocaleDateString(),
        thumbnail: e?.canvas_preview?.url ? ImageStrapiUrl(e.canvas_preview.url) : '/',
        variant: isPrimary ? CardVariant.primary : CardVariant.normal,
      };
    })
    .flat() as CardNewsConnectionProps[];

  return mapped || [];
};
