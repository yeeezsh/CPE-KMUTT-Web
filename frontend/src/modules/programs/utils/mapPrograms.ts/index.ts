import { GetProgramsQuery } from 'common/generated/generated-types';
import { ImageStrapiUrl } from 'common/utils/urls';

import {
  BrowseProgramTypes,
  ProgramTags,
} from 'modules/programs/components/BrowsePrograms/types';

//TODO: test
export function mapProgramSortAsc(data: BrowseProgramTypes): BrowseProgramTypes {
  const groupSortedAsc = data.sort(
    (a, b) =>
      Math.min(...a.programs.map((p) => p.order || 0)) -
      Math.min(...b.programs.map((p) => p.order || 0)),
  );

  const programSortedAsc = groupSortedAsc.map((el) => ({
    ...el,
    programs: el.programs.sort((a, b) => (a?.order || 0) - (b?.order || 0)),
  }));

  return programSortedAsc;
}

export default function mapProgramsPage(data?: GetProgramsQuery): BrowseProgramTypes {
  if (!data) return [];

  const groups = data.programTagsLocale?.map((e) => ({
    id: e?.id,
    name: e?.program_tag_name,
    seo_link: e?.seo_link,
  }));

  const mapped = groups?.map((e) => ({
    ...e,
    programs: data.programs?.filter((p) => p?.program_tag?.id === e.id),
  }));

  const transform = mapped?.map((e) => ({
    group: {
      id: e.id || '',
      title: e.name || '',
      sub_title:
        ((data.programTagsEnLocale?.find((en) => en?.seo_link === e.seo_link)
          ?.program_tag_name as unknown) as ProgramTags['sub_title']) || '',
    },
    programs: e.programs?.map((p) => ({
      id: p?.id || '',
      header: p?.header || '',
      preview_url: ImageStrapiUrl(p?.canvas_preview?.url || ''),
      link: p?.seo_link || '',
      order: p?.order || 0,
    })),
  })) as BrowseProgramTypes;

  const sorted = transform && mapProgramSortAsc(transform);

  return sorted;
}
