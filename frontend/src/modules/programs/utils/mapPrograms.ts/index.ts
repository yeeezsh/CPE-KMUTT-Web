import { GetProgramsQuery } from 'common/generated/generated-types';
import { ImageStrapiUrl } from 'common/utils/urls';

import {
  BrowseProgramTypes,
  ProgramTags,
} from 'modules/programs/components/BrowsePrograms/types';

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
        ((data.programTagsEnLocale?.find(
          (en) => en?.seo_link === e.seo_link,
        ) as unknown) as ProgramTags['sub_title']) || [],
    },
    programs: e.programs?.map((p) => ({
      id: p?.id || '',
      header: p?.header || '',
      preview_url: ImageStrapiUrl(p?.canvas_preview?.url || ''),
      link: p?.id || '',
    })),
  })) as BrowseProgramTypes;

  return transform;
}
