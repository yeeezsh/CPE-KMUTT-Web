import React from 'react';

import dayjs from 'dayjs';

import {
  GetNewsByIdQuery,
  NewsAndAnnouncementDynamicContentDynamicZone,
} from 'common/generated/generated-types';
import { joinImageStrapi } from 'common/utils/join';

import { NewsContentContainer } from 'modules/news/components/NewsContent/styled';

export type UseNewsContentParser = {
  header: string | undefined;
  title: string | undefined;
  thumbnail: string | undefined;
  postDate: string;
  contents: JSX.Element[] | undefined;
};

export const useNewsContentParser = (data?: GetNewsByIdQuery): UseNewsContentParser => {
  function mapContents(
    dynamic_element?: NewsAndAnnouncementDynamicContentDynamicZone,
  ): JSX.Element {
    if (dynamic_element?.__typename === 'ComponentContentSectionsTextContent')
      return (
        <NewsContentContainer
          key={dynamic_element.id}
          dangerouslySetInnerHTML={{
            __html: dynamic_element.body as string,
          }}></NewsContentContainer>
      );

    return <></>;
  }

  const header = data?.newsAndAnnouncement?.header;
  const title = data?.newsAndAnnouncement?.header;
  const thumbnail = joinImageStrapi(
    data?.newsAndAnnouncement?.canvas_preview?.url as string,
  );
  const postDate = dayjs(data?.newsAndAnnouncement?.createdAt).format(
    'dddd, DD MMMM YYYY',
  );
  const contents = data?.newsAndAnnouncement?.dynamic_content?.map((e) =>
    mapContents(e as NewsAndAnnouncementDynamicContentDynamicZone),
  );

  return { header, title, thumbnail, postDate, contents };
};
