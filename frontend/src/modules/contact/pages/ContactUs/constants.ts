import { CrumbProps } from 'common/components/Layouts/CommonLayout/types';

import { CONTACT_US_PAGE_CRUMB } from 'modules/contact/constants';
import { HOME_PAGE_CRUMB } from 'modules/home/constants';

export const HEADER_BACKGROUND_IMAGE = '/images/contact_us_bg_header.png';

export const BREADCRUMB: CrumbProps[] = [HOME_PAGE_CRUMB, CONTACT_US_PAGE_CRUMB];
