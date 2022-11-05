import { STATIC_NEWS_ID_LINK, STATIC_NEWS_ID_LINK_PATTERN } from 'common/constants/links';
import { INTERNAL_PAGE_MAPPING } from 'common/utils/menuMapper/constants';
import { SubMenuGenerated } from 'common/utils/menuMapper/types';

export default function menuLinkMapper(menu: SubMenuGenerated): string {
  if (menu?.internal_page?.internal_pages)
    return (
      INTERNAL_PAGE_MAPPING.find((el) => el.api === menu.internal_page?.internal_pages)
        ?.url || ''
    );
  if (menu?.news_announcement)
    return STATIC_NEWS_ID_LINK.replace(
      STATIC_NEWS_ID_LINK_PATTERN,
      menu.news_announcement.id,
    );
  if (menu?.url) return menu.url;

  console.warn('cannot convert link form API');
  console.warn(menu);
  return '';
}
