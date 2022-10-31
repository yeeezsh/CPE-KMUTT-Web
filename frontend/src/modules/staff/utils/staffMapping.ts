import { GetStaffsQuery } from 'common/generated/generated-types';
import { ImageStrapiUrl } from 'common/utils/urls';

import { StaffGroups, Staff } from 'modules/staff/types';

export function staffMapping(data: GetStaffsQuery): StaffGroups[] {
  if (!data || !data.staffs) {
    console.warn('no staffs');
    console.log(data);
    return [];
  }

  const groups = data.staffsConnection?.groupBy?.academic_position_group?.map(
    (e) => e?.key,
  ) as string[] | undefined;
  const staffs = data.staffs
    ?.map(
      (s) =>
        ({
          id: s?.id,
          title: s?.title,
          fullTitle: s?.full_title,
          name: s?.name,
          imageUrl: ImageStrapiUrl(s?.profile_image?.url || ''),
          academicPosition: s?.academic_position,
          academicPositionGroup: s?.academic_position_group,
          phone: s?.phone_number,
          email: s?.email,
          order: s?.order,
        } as Staff),
    )
    .sort((a, b) => a.order - b.order);

  const mappedGroup = groups
    ?.map((g) => ({
      title: g,
      staffs: staffs?.filter((s) => s?.academicPositionGroup === g),
      order: Math.min(
        ...(staffs?.filter((s) => s?.academicPositionGroup === g).map((s) => s.order) || [
          0,
        ]),
      ),
    }))
    .sort((a, b) => a.order - b.order) as StaffGroups[];
  return mappedGroup;
}
