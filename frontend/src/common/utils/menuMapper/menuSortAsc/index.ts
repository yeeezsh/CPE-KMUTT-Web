import { GetMenuQuery } from 'common/generated/generated-types';

export default function menuSortAsc(data: GetMenuQuery): GetMenuQuery {
  const sorted = data.mainMenus
    ?.sort((a, b) => (a?.order || 0) - (b?.order || 0))
    .map((m) => ({
      ...m,
      menus: m?.menus?.sort((a, b) => (a?.order || 0) - (b?.order || 0)),
    }));
  return { ...data, mainMenus: sorted } as GetMenuQuery;
}
