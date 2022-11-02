import { BrowseProgramTypes } from 'modules/programs/components/BrowsePrograms/types';

export const MOCK_PROGRAMS: BrowseProgramTypes = [
  {
    group: {
      id: '1',
      title: 'ปริญญาตรี',
      sub_title: "Bachelor's Degree",
    },
    programs: [
      {
        id: '11',
        header: 'ภาคปก',
        preview_url: '/images/thumbnail.png',
        link: '23fhjs2',
      },
    ],
  },
];
