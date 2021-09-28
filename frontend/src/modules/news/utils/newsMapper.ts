import { CardVariant } from 'common/components/Card/types';
import {
  ComponentContentSectionsContentComponent,
  GetNewsQuery,
} from 'common/generated/generated-types';
import { joinImageStrapi } from 'common/utils/join';

const MAX_DESCRIPTION_LENGTH = 120;
const MAX_DESCRIPTION_LENGTH_PRIMARY = 45;

export const newsMapper = (data: GetNewsQuery) => {
  return data.contents
    ?.map((e) => {
      const getDesc = e?.dynamic_sections.find(
        (d) => d?.__typename === 'ComponentContentSectionsContentComponent' && d.body,
      ) as { __typename: 'ComponentContentSectionsContentComponent' } & Pick<
        ComponentContentSectionsContentComponent,
        'body'
      >;
      const isPrimary = e?.canvas_preview?.url;

      const trimmedDesc =
        (getDesc && isPrimary
          ? getDesc?.body?.slice(0, MAX_DESCRIPTION_LENGTH_PRIMARY)
          : getDesc?.body?.slice(0, MAX_DESCRIPTION_LENGTH)) || '';

      return {
        ...e,
        description: trimmedDesc,
        link: e?.canvas_preview?.url ? joinImageStrapi(e.canvas_preview.url) : undefined,
        _id: e?._id || Math.random().toLocaleString(),
        variant: isPrimary ? CardVariant.primary : CardVariant.normal,
        date: new Date(e?.createdAt).toLocaleDateString(),
        raw_date: new Date(e?.createdAt).valueOf(), // use for compare
      };
    })
    .sort((a, b) => -(a.raw_date - b.raw_date)); // sort lastest news
};
