import { join } from 'path';

import { STRAPI_ENDPOINT } from 'common/constants';

export const joinImageStrapi = (url: string): string => join(STRAPI_ENDPOINT, url);
export const joinFileDownloadStrapi = (url: string): string => join(STRAPI_ENDPOINT, url);
