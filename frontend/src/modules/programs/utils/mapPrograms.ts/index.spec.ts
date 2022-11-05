import { GetProgramsQuery } from 'common/generated/generated-types';

import mapProgramsPage from 'modules/programs/utils/mapPrograms.ts';

const MOCK_API: GetProgramsQuery = {
  programs: [
    {
      id: '635fdf7b1bb560008edc18ec',
      header: 'หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ (ปกติ) ',
      program_tag: {
        id: '635fdf1e1bb560008edc18d7',
        seo_link: 'bachelor_th',
      },
      canvas_preview: {
        url: '/files/thumbnail.png',
      },
    },
    {
      id: '635fdf7b1bb560008edc18ed',
      header: 'หลักสูตรโท้',
      program_tag: {
        id: '635fdf1e1bb560008edc18d5',
        seo_link: 'bachelor_th',
      },
      canvas_preview: {
        url: '/files/thumbnail.png',
      },
    },
  ],
  programTagsLocale: [
    {
      id: '635fdf1e1bb560008edc18d7',
      program_tag_name: 'ระดับปริญญาตรี',
      seo_link: 'bachelor_th',
    },

    {
      id: '635fdf1e1bb560008edc18d5',
      program_tag_name: 'ระดับปริญญาโท้',
      seo_link: 'bachelor_th',
    },
  ],
  programTagsEnLocale: [],
};

describe('mapPrograms Tests', () => {
  it('should map program from API correctly', () => {
    const testSubject = mapProgramsPage(MOCK_API);

    expect(testSubject).toHaveLength(2);
    expect(testSubject[0].programs).toHaveLength(1);
    expect(testSubject[0].programs[0].id).toBe('635fdf7b1bb560008edc18ec');
    expect(testSubject[1].programs).toHaveLength(1);
    expect(testSubject[1].programs[0].id).toBe('635fdf7b1bb560008edc18ed');
  });
});
