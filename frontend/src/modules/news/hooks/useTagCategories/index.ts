import { join } from 'path';

import { useRouter } from 'next/router';

import {
  STATIC_NEWS_CATEGORY_LINK,
  STATIC_NEWS_CATEGORY_ID_LINK,
  STATIC_NEWS_CATEGORY_ID_LINK_PATTERN,
} from 'common/constants/links';
import { GetNewsByTagSeoLinkQuery } from 'common/generated/generated-types';

import { TagNewsCategory } from 'modules/news/components/BrowseNews';

const DEFAULT_CATEGORY: TagNewsCategory[] = [
  { title: 'ทั้งหมด', link: STATIC_NEWS_CATEGORY_LINK },
];

export const useTagsCategories = (data?: GetNewsByTagSeoLinkQuery): TagNewsCategory[] => {
  const tags = data?.tags;
  const router = useRouter();

  const seoLink = router.query.id as string;

  const mappped =
    tags?.map((e) => ({
      title: e?.tag_name || '',
      link: join(
        STATIC_NEWS_CATEGORY_ID_LINK.replace(
          STATIC_NEWS_CATEGORY_ID_LINK_PATTERN,
          e?.seo_link || '',
        ),
      ),
      active: false,
    })) || [];

  const all = [...DEFAULT_CATEGORY, ...mappped];

  return all.map((e) => ({ ...e, active: e.link?.includes(seoLink || '') }));
};
