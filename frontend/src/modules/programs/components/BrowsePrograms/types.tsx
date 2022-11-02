export type ProgramType = {
  id: string;
  header: string;
  preview_url: string;
  link: string;
};

export type ProgramTags = {
  id: string;
  title: string;
  sub_title: string;
};

export type BrowseProgramType = {
  group: ProgramTags;
  programs: ProgramType[];
};

export type BrowseProgramTypes = BrowseProgramType[];

export type BrowseProgramProps = { data?: BrowseProgramTypes };
