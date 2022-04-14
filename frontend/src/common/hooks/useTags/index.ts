import { join } from 'path';

import { CrumbProps } from 'common/components/Layouts/CommonLayout/types';
import { Tag } from 'common/generated/generated-types';

export const useTags = (
  data: Tag[] = [],
  prefix: CrumbProps[] = [],
  suffix: CrumbProps[] = [],
  rootLink?: string,
): CrumbProps[] => {
  const tags = data?.map((e) => ({
    title: e.tag_name,
    link: e.seo_link,
  })) as CrumbProps[];
  const mappedRootTags = tags.map((e) => ({
    ...e,
    // TODO: map to news category
    link: rootLink ? join(rootLink || '', e.link) : e.link,
  }));

  return [...prefix, ...mappedRootTags, ...suffix];
};
