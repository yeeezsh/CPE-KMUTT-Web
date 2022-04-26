import { URL } from 'url';

import { STRAPI_ENDPOINT } from 'common/constants';

export const ImageStrapiUrl = (url: string): string => new URL(url, STRAPI_ENDPOINT).href;
export const FileDownloadStrapiUrl = (url: string): string =>
  new URL(url, STRAPI_ENDPOINT).href;
