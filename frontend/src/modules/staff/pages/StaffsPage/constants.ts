import { CrumbProps } from 'common/components/Layouts/CommonLayout/types';
import baseUrl from 'common/utils/baseUrl';

import { ABOUT_US_PAGE_CRUMB } from 'modules/about-us/constants';
import { HOME_PAGE_CRUMB } from 'modules/home/constants';
import { STAFF_LIST_PAGE_CRUMB } from 'modules/staff/constants';

export const BREADCRUMB: CrumbProps[] = [
  HOME_PAGE_CRUMB,
  ABOUT_US_PAGE_CRUMB,
  STAFF_LIST_PAGE_CRUMB,
];

export const HEADER_BG_IMAGE = baseUrl('/images/staff_bg_header.jpg');
