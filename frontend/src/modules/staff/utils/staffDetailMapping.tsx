import {
  GetStaffQuery,
  Staffs as GeneratedStaff,
} from 'common/generated/generated-types';
import { ImageStrapiUrl } from 'common/utils/urls';

import { Room, StaffDetail, Subject } from 'modules/staff/types';

export function staffDetailMapping(data: GetStaffQuery): StaffDetail {
  const staff = data && data.staffs && ((data.staffs[0] as unknown) as GeneratedStaff);
  return {
    id: staff?._id || '',
    title: staff?.title || '',
    fullTitle: staff?.full_title || '',
    name: staff?.name || '',
    imageUrl: ImageStrapiUrl(staff?.profile_image?.url || ''),
    academicPosition: staff?.academic_position || '',
    academicPositionGroup: staff?.academic_position_group || '',
    phone: staff?.phone_number || '',
    email: staff?.email || '',
    rooms:
      (staff?.rooms?.map((r) => ({ roomId: r?.room_id, title: r?.title })) as Room[]) ||
      [],
    info: <div dangerouslySetInnerHTML={{ __html: staff?.info || '' }} />,
    research: <div dangerouslySetInnerHTML={{ __html: staff?.research || '' }} />,
    subjects: staff?.subjects?.map((s) => ({
      subjectId: s?.subject_id,
      title: s?.title,
    })) as Subject[],
  };
}
