import { STRAPI_ENDPOINT } from 'common/constants';

export const joinImageStrapi = (url: string) => STRAPI_ENDPOINT + url;
export const joinFileDownloadStrapi = (url: string) => STRAPI_ENDPOINT + url;
