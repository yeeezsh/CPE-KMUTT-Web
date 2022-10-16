import { useRouter } from 'next/router';

import { CrumbProps } from 'common/components/Layouts/CommonLayout/types';
import { GetStaffQuery } from 'common/generated/generated-types';

import { BREADCRUMB } from 'modules/staff/pages/StaffsPage/constants';
import { StaffDetail } from 'modules/staff/types';
import { staffDetailMapping } from 'modules/staff/utils/staffDetailMapping';

export type UseStaffDetail = {
  mappedStaff: StaffDetail;
  pageBreadcrumb: CrumbProps[];
};

const useStaffDetail = (data: GetStaffQuery): UseStaffDetail => {
  const router = useRouter();

  const mappedStaff = staffDetailMapping(data);
  const pageBreadcrumb = [
    ...BREADCRUMB,
    {
      title: `${mappedStaff?.name || ''}`,
      link: router.asPath,
    },
  ];

  return {
    mappedStaff,
    pageBreadcrumb,
  };
};

export default useStaffDetail;
