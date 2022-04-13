import { GetNewsByTagSeoLinkQuery } from 'common/generated/generated-types';

export interface BrowseNewsProps {
  id?: string;
  data?: GetNewsByTagSeoLinkQuery;
}

export interface cardConstantsProps {
  id: string;
  title?: string;
  description?: string;
  date?: string;
  links?: string;
  variant?: string;
}
