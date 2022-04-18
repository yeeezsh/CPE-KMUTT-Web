import { STRAPI_ENDPOINT } from 'common/constants';

export const joinImageStrapi = (url: string): string => STRAPI_ENDPOINT + url;
export const joinFileDownloadStrapi = (url: string): string => STRAPI_ENDPOINT + url;
