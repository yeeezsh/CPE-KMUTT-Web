import { URL } from 'url';

import { STRAPI_ENDPOINT } from 'common/constants';

export const joinImageStrapi = (url: string): string =>
  new URL(url, STRAPI_ENDPOINT).href;
export const joinFileDownloadStrapi = (url: string): string =>
  new URL(url, STRAPI_ENDPOINT).href;
