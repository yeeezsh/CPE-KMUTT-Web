import { CrumbProps } from 'common/components/Layouts/CommonLayout/types';
import { STATIC_HOME_LINK, STATIC_PROGRAMS } from 'common/constants/links';

export const HEADER_BACKGROUND_IMAGE = '/images/program_banner.png';

export const DEFAULT_NAVIGATE: CrumbProps[] = [
  {
    title: 'หน้าแรก',
    link: STATIC_HOME_LINK,
  },
  {
    title: 'หลักสูตร',
    link: STATIC_PROGRAMS,
  },
];
