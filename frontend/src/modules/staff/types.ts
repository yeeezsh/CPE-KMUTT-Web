// FIXME: This structure is temporary for mocking data and hardcode please refactor this structure when implement api
export interface Staff {
  id: string;
  firstname: {
    en: string;
    th: string;
  };
  lastname: {
    en: string;
    th: string;
  };
  imageUrl: string;
  academicRank: string;
  phone: string;
  email: string;
}
