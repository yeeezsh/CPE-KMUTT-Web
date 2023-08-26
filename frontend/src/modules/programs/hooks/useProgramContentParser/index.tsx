import React from 'react';

import dayjs from 'dayjs';

import { NEWS_DATE_FORMAT } from 'common/constants/format';
import {
  GetProgramBySeoLinkQuery,
  ProgramsDynamicContentDynamicZone,
} from 'common/generated/generated-types';
import { FileDownloadStrapiUrl, ImageStrapiUrl } from 'common/utils/urls';

import { NewsContentContainer } from 'modules/news/components/NewsContent/styled';
import { replaceImageTagUrl } from 'modules/news/hooks/useNewsContentParser';

import { UseProgramContentParser } from './types';

function mapContents(dynamic_element?: ProgramsDynamicContentDynamicZone): JSX.Element {
  const EMPTY_FRAGMENT_KEY = 'empty-fragment-key';
  if (dynamic_element?.__typename === 'ComponentContentSectionsTextContent') {
    return (
      <NewsContentContainer
        key={dynamic_element.id}
        dangerouslySetInnerHTML={{
          __html: replaceImageTagUrl(dynamic_element.body),
        }}></NewsContentContainer>
    );
  }
  return <React.Fragment key={EMPTY_FRAGMENT_KEY}></React.Fragment>;
}
export const useProgramContentParser = (
  data?: GetProgramBySeoLinkQuery,
): UseProgramContentParser => {
  const program = data?.programs && data.programs[0];
  const title = program?.header;
  const thumbnail =
    program?.canvas_preview?.url && ImageStrapiUrl(program?.canvas_preview?.url);
  const postDate = dayjs(program?.createdAt).format(NEWS_DATE_FORMAT);
  const download = program?.download?.files?.map((e) => ({
    title: e?.name,
    link: FileDownloadStrapiUrl(e?.url || ''),
  }));
  const contents = program?.dynamic_content?.map((e) =>
    mapContents(e as ProgramsDynamicContentDynamicZone),
  );
  //TODO: connection

  return {
    title: title,
    thumbnail: thumbnail,
    download: download,
    postDate: postDate,
    contents: contents,
  };
};
