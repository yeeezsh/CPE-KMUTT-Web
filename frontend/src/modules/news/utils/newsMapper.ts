import { CardVariant } from 'common/components/Card/types';
import {
  ComponentContentSectionsTextContent,
  GetNewsByIdQuery,
  GetNewsByTagSeoLinkQuery,
} from 'common/generated/generated-types';
import { joinImageStrapi } from 'common/utils/join';

import { CardNewsConnectionProps } from 'modules/news/components/NewsContent/types';

const MAX_DESCRIPTION_LENGTH = 240;
const MAX_DESCRIPTION_LENGTH_PRIMARY = 55;
const REGEX_PATTERN = /<[^>]*>/g;

export const newsMapper = (data: GetNewsByTagSeoLinkQuery) => {
  return data.newsAndAnnouncements?.map((e) => {
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
      ...e,
      description: trimmedDesc.replaceAll(REGEX_PATTERN, ''),
      link: e?.canvas_preview?.url ? joinImageStrapi(e.canvas_preview.url) : undefined,
      _id: e?._id || Math.random().toLocaleString(),
      variant: isPrimary ? CardVariant.primary : CardVariant.normal,
      date: new Date(e?.createdAt).toLocaleDateString(),
      raw_date: new Date(e?.createdAt).valueOf(), // use for compare
      title: e?.header,
    };
  });
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
          ? getDesc?.body?.slice(0, MAX_DESCRIPTION_LENGTH_PRIMARY)
          : getDesc?.body?.slice(0, MAX_DESCRIPTION_LENGTH)) || '';

      return {
        id: e?._id || Math.random().toLocaleString(),
        title: e?.header as string,
        description: trimmedDesc.replaceAll(REGEX_PATTERN, ''),
        date: new Date(e?.createdAt).toLocaleDateString(),
        links: e?.canvas_preview?.url ? joinImageStrapi(e.canvas_preview.url) : '/',
        variant: isPrimary ? CardVariant.primary : CardVariant.normal,
      };
    })
    .flat() as CardNewsConnectionProps[];

  return mapped || [];
};
