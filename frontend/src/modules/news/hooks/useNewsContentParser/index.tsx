import React from 'react';

import dayjs from 'dayjs';
import { Maybe } from 'graphql/jsutils/Maybe';

import { CardVariant } from 'common/components/Card/types';
import { NEWS_DATE_FORMAT } from 'common/constants/format';
import {
  GetNewsByIdQuery,
  NewsAndAnnouncementDynamicContentDynamicZone,
} from 'common/generated/generated-types';
import { FileDownloadStrapiUrl, ImageStrapiUrl } from 'common/utils/urls';

import { NewsContentContainer } from 'modules/news/components/NewsContent/styled';
import { CardNewsConnectionProps } from 'modules/news/components/NewsContent/types';
import { newsConnectionMapper } from 'modules/news/utils/newsMapper';

export type NewsConnection = {
  description: string;
  link: string | undefined;
  _id: string;
  variant: CardVariant;
  date: string;
  raw_date: number;
  title: string | undefined;
};

export type UseNewsContentParser = {
  header: string | undefined;
  title: string | undefined;
  thumbnail: string | undefined;
  postDate: string;
  contents: JSX.Element[] | undefined;
  download?: { title?: string; link?: string }[];
  connections?: CardNewsConnectionProps[];
};

export const useNewsContentParser = (data?: GetNewsByIdQuery): UseNewsContentParser => {
  function mapContents(
    dynamic_element?: NewsAndAnnouncementDynamicContentDynamicZone,
  ): JSX.Element {
    const EMPTY_FRAGMENT_KEY = 'empty-fragment-key';
    if (dynamic_element?.__typename === 'ComponentContentSectionsTextContent') {
      return (
        <NewsContentContainer
          key={dynamic_element.id}
          dangerouslySetInnerHTML={{
            __html: replaceImageTagUrl(dynamic_element.body) as string,
          }}></NewsContentContainer>
      );
    }

    return <React.Fragment key={EMPTY_FRAGMENT_KEY}></React.Fragment>;
  }

  const header = data?.newsAndAnnouncement?.header;
  const title = data?.newsAndAnnouncement?.header;
  const thumbnail =
    data?.newsAndAnnouncement?.canvas_preview?.url &&
    ImageStrapiUrl(data?.newsAndAnnouncement.canvas_preview.url);
  const postDate = dayjs(data?.newsAndAnnouncement?.createdAt).format(NEWS_DATE_FORMAT);
  const contents = data?.newsAndAnnouncement?.dynamic_content?.map((e) =>
    mapContents(e as NewsAndAnnouncementDynamicContentDynamicZone),
  );
  const download = data?.newsAndAnnouncement?.download?.files?.map((e) => ({
    title: e?.name,
    link: FileDownloadStrapiUrl(e?.url || ''),
  }));
  const connections = newsConnectionMapper(data);

  return { header, title, thumbnail, postDate, contents, download, connections };
};

export const replaceImageTagUrl = (body?: Maybe<string>): string => {
  if (!body) return '';
  const pattern = /..\/..\/..\/..\/..\//g;
  return body?.replaceAll(pattern, ImageStrapiUrl('') + '/');
};
