import {
  STATIC_ABOUT_US,
  STATIC_CONTACT_US,
  STATIC_NEWS_LINK,
  STATIC_PROGRAMS,
  STATIC_STAFFS,
} from 'common/constants/links';
import { Enum_Componentcommoninternalpages_Internal_Pages } from 'common/generated/generated-types';

export const INTERNAL_PAGE_MAPPING: Array<{
  api: Enum_Componentcommoninternalpages_Internal_Pages;
  url: string;
}> = [
  { api: Enum_Componentcommoninternalpages_Internal_Pages.News, url: STATIC_NEWS_LINK },
  { api: Enum_Componentcommoninternalpages_Internal_Pages.AboutUs, url: STATIC_ABOUT_US },
  {
    api: Enum_Componentcommoninternalpages_Internal_Pages.ContactUs,
    url: STATIC_CONTACT_US,
  },
  {
    api: Enum_Componentcommoninternalpages_Internal_Pages.Staffs,
    url: STATIC_STAFFS,
  },
  {
    api: Enum_Componentcommoninternalpages_Internal_Pages.Programs,
    url: STATIC_PROGRAMS,
  },
];
