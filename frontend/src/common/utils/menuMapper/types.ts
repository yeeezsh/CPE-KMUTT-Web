import { Maybe } from 'graphql/jsutils/Maybe';

import {
  Menus,
  NewsAndAnnouncement,
  ComponentCommonInternalPages,
} from 'common/generated/generated-types';

export type SubMenuGenerated = Maybe<
  Maybe<
    { __typename?: 'Menus' } & Pick<Menus, 'title' | 'id' | 'url'> & {
        news_announcement?: Maybe<
          { __typename?: 'NewsAndAnnouncement' } & Pick<
            NewsAndAnnouncement,
            'id' | 'seo_link'
          >
        >;
        internal_page?: Maybe<
          { __typename?: 'ComponentCommonInternalPages' } & Pick<
            ComponentCommonInternalPages,
            'internal_pages'
          >
        >;
      }
  >
>;
