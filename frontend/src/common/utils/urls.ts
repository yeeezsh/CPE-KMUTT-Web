import { STRAPI_ENDPOINT } from 'common/constants';

export const ImageStrapiUrl = (url: string): string => STRAPI_ENDPOINT + url;
export const FileDownloadStrapiUrl = (url: string): string => STRAPI_ENDPOINT + url;
