import { GetNewsQuery } from 'common/generated/generated-types';

export interface BrowseNewsProps {
  id?: string;
  data?: GetNewsQuery;
}

export interface cardConstantsProps {
  id: string;
  title?: string;
  description?: string;
  date?: string;
  links?: string;
  variant?: string;
}
