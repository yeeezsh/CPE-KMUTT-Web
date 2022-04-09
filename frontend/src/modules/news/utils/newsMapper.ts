import { CardVariant } from 'common/components/Card/types';
import {
  ComponentContentSectionsTextContent,
  GetNewsQuery,
} from 'common/generated/generated-types';
import { joinImageStrapi } from 'common/utils/join';

const MAX_DESCRIPTION_LENGTH = 120;
const MAX_DESCRIPTION_LENGTH_PRIMARY = 45;

export const newsMapper = (data: GetNewsQuery) => {
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
      description: trimmedDesc.replace(/<[^>]+>/g, ''),
      link: e?.canvas_preview?.url ? joinImageStrapi(e.canvas_preview.url) : undefined,
      _id: e?._id || Math.random().toLocaleString(),
      variant: isPrimary ? CardVariant.primary : CardVariant.normal,
      date: new Date(e?.createdAt).toLocaleDateString(),
      raw_date: new Date(e?.createdAt).valueOf(), // use for compare
      title: e?.header,
    };
  });
};
