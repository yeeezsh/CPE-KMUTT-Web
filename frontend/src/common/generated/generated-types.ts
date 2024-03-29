import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** Input type for dynamic zone dynamic_content of NewsAndAnnouncement */
  NewsAndAnnouncementDynamicContentDynamicZoneInput: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type ComponentCommonFileDownload = {
  __typename?: 'ComponentCommonFileDownload';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  files?: Maybe<Array<Maybe<UploadFile>>>;
};

export type ComponentCommonFileDownloadFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentCommonFileDownloadInput = {
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ComponentCommonInternalPageInput = {
  internal_pages?: Maybe<Enum_Componentcommoninternalpages_Internal_Pages>;
};

export type ComponentCommonInternalPages = {
  __typename?: 'ComponentCommonInternalPages';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  internal_pages?: Maybe<Enum_Componentcommoninternalpages_Internal_Pages>;
};

export type ComponentCommonMenuConfig = {
  __typename?: 'ComponentCommonMenuConfig';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  Mobile: Scalars['Boolean'];
  Desktop: Scalars['Boolean'];
  Footer: Scalars['Boolean'];
  DesktopQuickMenu?: Maybe<Scalars['Boolean']>;
  MobileQuickMenu?: Maybe<Scalars['Boolean']>;
};

export type ComponentCommonMenuConfigInput = {
  Mobile?: Maybe<Scalars['Boolean']>;
  Desktop?: Maybe<Scalars['Boolean']>;
  Footer?: Maybe<Scalars['Boolean']>;
  DesktopQuickMenu?: Maybe<Scalars['Boolean']>;
  MobileQuickMenu?: Maybe<Scalars['Boolean']>;
};

export type ComponentContentSectionsCarousalImage = {
  __typename?: 'ComponentContentSectionsCarousalImage';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  images?: Maybe<ComponentContentSectionsImageWithCaption>;
};

export type ComponentContentSectionsCarousalImageInput = {
  images?: Maybe<ComponentContentSectionsImageWithCaptionInput>;
};

export type ComponentContentSectionsGridImage = {
  __typename?: 'ComponentContentSectionsGridImage';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  images?: Maybe<ComponentContentSectionsImageWithCaption>;
};

export type ComponentContentSectionsGridImageInput = {
  images?: Maybe<ComponentContentSectionsImageWithCaptionInput>;
};

export type ComponentContentSectionsImageWithCaption = {
  __typename?: 'ComponentContentSectionsImageWithCaption';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
};

export type ComponentContentSectionsImageWithCaptionImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentSectionsImageWithCaptionInput = {
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentContentSectionsTextContent = {
  __typename?: 'ComponentContentSectionsTextContent';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  body?: Maybe<Scalars['String']>;
};

export type ComponentContentSectionsTextContentInput = {
  body?: Maybe<Scalars['String']>;
};

export type ComponentHomeActivityNAwardInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  tag?: Maybe<Scalars['ID']>;
};

export type ComponentHomeActivityNAwards = {
  __typename?: 'ComponentHomeActivityNAwards';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<UploadFile>;
  tag?: Maybe<Tag>;
};

export type ComponentHomeMainCanvaInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  news_announcement?: Maybe<Scalars['ID']>;
};

export type ComponentHomeMainCanvas = {
  __typename?: 'ComponentHomeMainCanvas';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<UploadFile>;
  news_announcement?: Maybe<NewsAndAnnouncement>;
};

export type ComponentMenuSubMenu = {
  __typename?: 'ComponentMenuSubMenu';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  news_announcement?: Maybe<NewsAndAnnouncement>;
  title_th?: Maybe<Scalars['String']>;
  title_en?: Maybe<Scalars['String']>;
  static_page?: Maybe<ComponentCommonInternalPages>;
};

export type ComponentMenuSubMenuInput = {
  url?: Maybe<Scalars['String']>;
  news_announcement?: Maybe<Scalars['ID']>;
  title_th?: Maybe<Scalars['String']>;
  title_en?: Maybe<Scalars['String']>;
  static_page?: Maybe<ComponentCommonInternalPageInput>;
};

export type ComponentTagsTagInput = {
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ComponentTagsTags = {
  __typename?: 'ComponentTagsTags';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type ComponentTagsTagsTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  address_content: Scalars['String'];
  contact_phone?: Maybe<Scalars['String']>;
  google_map_link?: Maybe<Scalars['String']>;
  contact_email: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<Contact>>>;
};

export type ContactLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ContactInput = {
  address_content: Scalars['String'];
  contact_phone?: Maybe<Scalars['String']>;
  google_map_link?: Maybe<Scalars['String']>;
  contact_email: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum Enum_Componentcommoninternalpages_Internal_Pages {
  News = 'news',
  AboutUs = 'about_us',
  ContactUs = 'contact_us',
  Staffs = 'staffs',
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Home = {
  __typename?: 'Home';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  main_canvas?: Maybe<Array<Maybe<ComponentHomeMainCanvas>>>;
  activities_n_awards?: Maybe<Array<Maybe<ComponentHomeActivityNAwards>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<Home>>>;
};

export type HomeLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type HomeInput = {
  main_canvas?: Maybe<Array<Maybe<ComponentHomeMainCanvaInput>>>;
  activities_n_awards?: Maybe<Array<Maybe<ComponentHomeActivityNAwardInput>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type MainMenuInput = {
  title: Scalars['String'];
  thumbnail?: Maybe<Scalars['ID']>;
  menu_config: ComponentCommonMenuConfigInput;
  menus?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<Scalars['Int']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type MainMenus = {
  __typename?: 'MainMenus';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  thumbnail?: Maybe<UploadFile>;
  menu_config?: Maybe<ComponentCommonMenuConfig>;
  order?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  menus?: Maybe<Array<Maybe<Menus>>>;
  localizations?: Maybe<Array<Maybe<MainMenus>>>;
};

export type MainMenusMenusArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MainMenusLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MainMenusAggregator = {
  __typename?: 'MainMenusAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<MainMenusAggregatorSum>;
  avg?: Maybe<MainMenusAggregatorAvg>;
  min?: Maybe<MainMenusAggregatorMin>;
  max?: Maybe<MainMenusAggregatorMax>;
};

export type MainMenusAggregatorAvg = {
  __typename?: 'MainMenusAggregatorAvg';
  order?: Maybe<Scalars['Float']>;
};

export type MainMenusAggregatorMax = {
  __typename?: 'MainMenusAggregatorMax';
  order?: Maybe<Scalars['Float']>;
};

export type MainMenusAggregatorMin = {
  __typename?: 'MainMenusAggregatorMin';
  order?: Maybe<Scalars['Float']>;
};

export type MainMenusAggregatorSum = {
  __typename?: 'MainMenusAggregatorSum';
  order?: Maybe<Scalars['Float']>;
};

export type MainMenusConnection = {
  __typename?: 'MainMenusConnection';
  values?: Maybe<Array<Maybe<MainMenus>>>;
  groupBy?: Maybe<MainMenusGroupBy>;
  aggregate?: Maybe<MainMenusAggregator>;
};

export type MainMenusConnectionCreatedAt = {
  __typename?: 'MainMenusConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MainMenusConnection>;
};

export type MainMenusConnectionId = {
  __typename?: 'MainMenusConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MainMenusConnection>;
};

export type MainMenusConnectionLocale = {
  __typename?: 'MainMenusConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MainMenusConnection>;
};

export type MainMenusConnectionMenu_Config = {
  __typename?: 'MainMenusConnectionMenu_config';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MainMenusConnection>;
};

export type MainMenusConnectionOrder = {
  __typename?: 'MainMenusConnectionOrder';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<MainMenusConnection>;
};

export type MainMenusConnectionThumbnail = {
  __typename?: 'MainMenusConnectionThumbnail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MainMenusConnection>;
};

export type MainMenusConnectionTitle = {
  __typename?: 'MainMenusConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MainMenusConnection>;
};

export type MainMenusConnectionUpdatedAt = {
  __typename?: 'MainMenusConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MainMenusConnection>;
};

export type MainMenusConnection_Id = {
  __typename?: 'MainMenusConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MainMenusConnection>;
};

export type MainMenusGroupBy = {
  __typename?: 'MainMenusGroupBy';
  id?: Maybe<Array<Maybe<MainMenusConnectionId>>>;
  _id?: Maybe<Array<Maybe<MainMenusConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MainMenusConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MainMenusConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<MainMenusConnectionTitle>>>;
  thumbnail?: Maybe<Array<Maybe<MainMenusConnectionThumbnail>>>;
  menu_config?: Maybe<Array<Maybe<MainMenusConnectionMenu_Config>>>;
  order?: Maybe<Array<Maybe<MainMenusConnectionOrder>>>;
  locale?: Maybe<Array<Maybe<MainMenusConnectionLocale>>>;
};

export type MenuInput = {
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  main_menu?: Maybe<Scalars['ID']>;
  internal_page?: Maybe<ComponentCommonInternalPageInput>;
  news_announcement?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['Int']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Menus = {
  __typename?: 'Menus';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  main_menu?: Maybe<MainMenus>;
  internal_page?: Maybe<ComponentCommonInternalPages>;
  news_announcement?: Maybe<NewsAndAnnouncement>;
  order?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Menus>>>;
};

export type MenusLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MenusAggregator = {
  __typename?: 'MenusAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<MenusAggregatorSum>;
  avg?: Maybe<MenusAggregatorAvg>;
  min?: Maybe<MenusAggregatorMin>;
  max?: Maybe<MenusAggregatorMax>;
};

export type MenusAggregatorAvg = {
  __typename?: 'MenusAggregatorAvg';
  order?: Maybe<Scalars['Float']>;
};

export type MenusAggregatorMax = {
  __typename?: 'MenusAggregatorMax';
  order?: Maybe<Scalars['Float']>;
};

export type MenusAggregatorMin = {
  __typename?: 'MenusAggregatorMin';
  order?: Maybe<Scalars['Float']>;
};

export type MenusAggregatorSum = {
  __typename?: 'MenusAggregatorSum';
  order?: Maybe<Scalars['Float']>;
};

export type MenusConnection = {
  __typename?: 'MenusConnection';
  values?: Maybe<Array<Maybe<Menus>>>;
  groupBy?: Maybe<MenusGroupBy>;
  aggregate?: Maybe<MenusAggregator>;
};

export type MenusConnectionCreatedAt = {
  __typename?: 'MenusConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnectionId = {
  __typename?: 'MenusConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnectionInternal_Page = {
  __typename?: 'MenusConnectionInternal_page';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnectionLocale = {
  __typename?: 'MenusConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnectionMain_Menu = {
  __typename?: 'MenusConnectionMain_menu';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnectionNews_Announcement = {
  __typename?: 'MenusConnectionNews_announcement';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnectionOrder = {
  __typename?: 'MenusConnectionOrder';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnectionTitle = {
  __typename?: 'MenusConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnectionUpdatedAt = {
  __typename?: 'MenusConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnectionUrl = {
  __typename?: 'MenusConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusConnection_Id = {
  __typename?: 'MenusConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenusConnection>;
};

export type MenusGroupBy = {
  __typename?: 'MenusGroupBy';
  id?: Maybe<Array<Maybe<MenusConnectionId>>>;
  _id?: Maybe<Array<Maybe<MenusConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MenusConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MenusConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<MenusConnectionTitle>>>;
  url?: Maybe<Array<Maybe<MenusConnectionUrl>>>;
  main_menu?: Maybe<Array<Maybe<MenusConnectionMain_Menu>>>;
  internal_page?: Maybe<Array<Maybe<MenusConnectionInternal_Page>>>;
  news_announcement?: Maybe<Array<Maybe<MenusConnectionNews_Announcement>>>;
  order?: Maybe<Array<Maybe<MenusConnectionOrder>>>;
  locale?: Maybe<Array<Maybe<MenusConnectionLocale>>>;
};

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | Contact
  | UpdateContactPayload
  | DeleteContactPayload
  | Home
  | UpdateHomePayload
  | DeleteHomePayload
  | MainMenus
  | MainMenusConnection
  | MainMenusAggregator
  | MainMenusAggregatorSum
  | MainMenusAggregatorAvg
  | MainMenusAggregatorMin
  | MainMenusAggregatorMax
  | MainMenusGroupBy
  | MainMenusConnectionId
  | MainMenusConnection_Id
  | MainMenusConnectionCreatedAt
  | MainMenusConnectionUpdatedAt
  | MainMenusConnectionTitle
  | MainMenusConnectionThumbnail
  | MainMenusConnectionMenu_Config
  | MainMenusConnectionOrder
  | MainMenusConnectionLocale
  | CreateMainMenuPayload
  | UpdateMainMenuPayload
  | DeleteMainMenuPayload
  | Menus
  | MenusConnection
  | MenusAggregator
  | MenusAggregatorSum
  | MenusAggregatorAvg
  | MenusAggregatorMin
  | MenusAggregatorMax
  | MenusGroupBy
  | MenusConnectionId
  | MenusConnection_Id
  | MenusConnectionCreatedAt
  | MenusConnectionUpdatedAt
  | MenusConnectionTitle
  | MenusConnectionUrl
  | MenusConnectionMain_Menu
  | MenusConnectionInternal_Page
  | MenusConnectionNews_Announcement
  | MenusConnectionOrder
  | MenusConnectionLocale
  | CreateMenuPayload
  | UpdateMenuPayload
  | DeleteMenuPayload
  | NewsAndAnnouncement
  | NewsAndAnnouncementConnection
  | NewsAndAnnouncementAggregator
  | NewsAndAnnouncementGroupBy
  | NewsAndAnnouncementConnectionId
  | NewsAndAnnouncementConnection_Id
  | NewsAndAnnouncementConnectionCreatedAt
  | NewsAndAnnouncementConnectionUpdatedAt
  | NewsAndAnnouncementConnectionHeader
  | NewsAndAnnouncementConnectionCanvas_Preview
  | NewsAndAnnouncementConnectionSeo_Link
  | NewsAndAnnouncementConnectionDownload
  | NewsAndAnnouncementConnectionLocale
  | NewsAndAnnouncementConnectionPublished_At
  | CreateNewsAndAnnouncementPayload
  | UpdateNewsAndAnnouncementPayload
  | DeleteNewsAndAnnouncementPayload
  | Rooms
  | RoomsConnection
  | RoomsAggregator
  | RoomsGroupBy
  | RoomsConnectionId
  | RoomsConnection_Id
  | RoomsConnectionCreatedAt
  | RoomsConnectionUpdatedAt
  | RoomsConnectionRoom_Id
  | RoomsConnectionTitle
  | RoomsConnectionLocale
  | CreateRoomPayload
  | UpdateRoomPayload
  | DeleteRoomPayload
  | Staffs
  | StaffsConnection
  | StaffsAggregator
  | StaffsAggregatorSum
  | StaffsAggregatorAvg
  | StaffsAggregatorMin
  | StaffsAggregatorMax
  | StaffsGroupBy
  | StaffsConnectionId
  | StaffsConnection_Id
  | StaffsConnectionCreatedAt
  | StaffsConnectionUpdatedAt
  | StaffsConnectionTitle
  | StaffsConnectionName
  | StaffsConnectionAcademic_Position
  | StaffsConnectionPhone_Number
  | StaffsConnectionInfo
  | StaffsConnectionResearch
  | StaffsConnectionProfile_Image
  | StaffsConnectionEmail
  | StaffsConnectionFull_Title
  | StaffsConnectionAcademic_Position_Group
  | StaffsConnectionOrder
  | StaffsConnectionLocale
  | CreateStaffPayload
  | UpdateStaffPayload
  | DeleteStaffPayload
  | Subjects
  | SubjectsConnection
  | SubjectsAggregator
  | SubjectsGroupBy
  | SubjectsConnectionId
  | SubjectsConnection_Id
  | SubjectsConnectionCreatedAt
  | SubjectsConnectionUpdatedAt
  | SubjectsConnectionSubject_Id
  | SubjectsConnectionTitle
  | SubjectsConnectionLocale
  | CreateSubjectPayload
  | UpdateSubjectPayload
  | DeleteSubjectPayload
  | Tag
  | TagConnection
  | TagAggregator
  | TagGroupBy
  | TagConnectionId
  | TagConnection_Id
  | TagConnectionCreatedAt
  | TagConnectionUpdatedAt
  | TagConnectionTag_Id
  | TagConnectionTag_Name
  | TagConnectionSeo_Link
  | TagConnectionLocale
  | CreateTagPayload
  | UpdateTagPayload
  | DeleteTagPayload
  | I18NLocale
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnection_Id
  | UploadFileConnectionCreatedAt
  | UploadFileConnectionUpdatedAt
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | DeleteFilePayload
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnection_Id
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnection_Id
  | UsersPermissionsUserConnectionCreatedAt
  | UsersPermissionsUserConnectionUpdatedAt
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload
  | ComponentCommonFileDownload
  | ComponentCommonInternalPages
  | ComponentCommonMenuConfig
  | ComponentContentSectionsCarousalImage
  | ComponentContentSectionsGridImage
  | ComponentContentSectionsImageWithCaption
  | ComponentContentSectionsTextContent
  | ComponentHomeActivityNAwards
  | ComponentHomeMainCanvas
  | ComponentMenuSubMenu
  | ComponentTagsTags;

export type Mutation = {
  __typename?: 'Mutation';
  updateContact?: Maybe<UpdateContactPayload>;
  deleteContact?: Maybe<DeleteContactPayload>;
  updateHome?: Maybe<UpdateHomePayload>;
  deleteHome?: Maybe<DeleteHomePayload>;
  createMainMenu?: Maybe<CreateMainMenuPayload>;
  updateMainMenu?: Maybe<UpdateMainMenuPayload>;
  deleteMainMenu?: Maybe<DeleteMainMenuPayload>;
  createMenu?: Maybe<CreateMenuPayload>;
  updateMenu?: Maybe<UpdateMenuPayload>;
  deleteMenu?: Maybe<DeleteMenuPayload>;
  createNewsAndAnnouncement?: Maybe<CreateNewsAndAnnouncementPayload>;
  updateNewsAndAnnouncement?: Maybe<UpdateNewsAndAnnouncementPayload>;
  deleteNewsAndAnnouncement?: Maybe<DeleteNewsAndAnnouncementPayload>;
  createRoom?: Maybe<CreateRoomPayload>;
  updateRoom?: Maybe<UpdateRoomPayload>;
  deleteRoom?: Maybe<DeleteRoomPayload>;
  createStaff?: Maybe<CreateStaffPayload>;
  updateStaff?: Maybe<UpdateStaffPayload>;
  deleteStaff?: Maybe<DeleteStaffPayload>;
  createSubject?: Maybe<CreateSubjectPayload>;
  updateSubject?: Maybe<UpdateSubjectPayload>;
  deleteSubject?: Maybe<DeleteSubjectPayload>;
  createTag?: Maybe<CreateTagPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  createContactLocalization: Contact;
  createHomeLocalization: Home;
  createMainMenuLocalization: MainMenus;
  createMenuLocalization: Menus;
  createNewsAndAnnouncementLocalization: NewsAndAnnouncement;
  createRoomLocalization: Rooms;
  createStaffLocalization: Staffs;
  createSubjectLocalization: Subjects;
  createTagLocalization: Tag;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationUpdateContactArgs = {
  input?: Maybe<UpdateContactInput>;
  locale?: Maybe<Scalars['String']>;
};

export type MutationDeleteContactArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type MutationUpdateHomeArgs = {
  input?: Maybe<UpdateHomeInput>;
  locale?: Maybe<Scalars['String']>;
};

export type MutationDeleteHomeArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type MutationCreateMainMenuArgs = {
  input?: Maybe<CreateMainMenuInput>;
};

export type MutationUpdateMainMenuArgs = {
  input?: Maybe<UpdateMainMenuInput>;
};

export type MutationDeleteMainMenuArgs = {
  input?: Maybe<DeleteMainMenuInput>;
};

export type MutationCreateMenuArgs = {
  input?: Maybe<CreateMenuInput>;
};

export type MutationUpdateMenuArgs = {
  input?: Maybe<UpdateMenuInput>;
};

export type MutationDeleteMenuArgs = {
  input?: Maybe<DeleteMenuInput>;
};

export type MutationCreateNewsAndAnnouncementArgs = {
  input?: Maybe<CreateNewsAndAnnouncementInput>;
};

export type MutationUpdateNewsAndAnnouncementArgs = {
  input?: Maybe<UpdateNewsAndAnnouncementInput>;
};

export type MutationDeleteNewsAndAnnouncementArgs = {
  input?: Maybe<DeleteNewsAndAnnouncementInput>;
};

export type MutationCreateRoomArgs = {
  input?: Maybe<CreateRoomInput>;
};

export type MutationUpdateRoomArgs = {
  input?: Maybe<UpdateRoomInput>;
};

export type MutationDeleteRoomArgs = {
  input?: Maybe<DeleteRoomInput>;
};

export type MutationCreateStaffArgs = {
  input?: Maybe<CreateStaffInput>;
};

export type MutationUpdateStaffArgs = {
  input?: Maybe<UpdateStaffInput>;
};

export type MutationDeleteStaffArgs = {
  input?: Maybe<DeleteStaffInput>;
};

export type MutationCreateSubjectArgs = {
  input?: Maybe<CreateSubjectInput>;
};

export type MutationUpdateSubjectArgs = {
  input?: Maybe<UpdateSubjectInput>;
};

export type MutationDeleteSubjectArgs = {
  input?: Maybe<DeleteSubjectInput>;
};

export type MutationCreateTagArgs = {
  input?: Maybe<CreateTagInput>;
};

export type MutationUpdateTagArgs = {
  input?: Maybe<UpdateTagInput>;
};

export type MutationDeleteTagArgs = {
  input?: Maybe<DeleteTagInput>;
};

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type MutationCreateContactLocalizationArgs = {
  input: UpdateContactInput;
};

export type MutationCreateHomeLocalizationArgs = {
  input: UpdateHomeInput;
};

export type MutationCreateMainMenuLocalizationArgs = {
  input: UpdateMainMenuInput;
};

export type MutationCreateMenuLocalizationArgs = {
  input: UpdateMenuInput;
};

export type MutationCreateNewsAndAnnouncementLocalizationArgs = {
  input: UpdateNewsAndAnnouncementInput;
};

export type MutationCreateRoomLocalizationArgs = {
  input: UpdateRoomInput;
};

export type MutationCreateStaffLocalizationArgs = {
  input: UpdateStaffInput;
};

export type MutationCreateSubjectLocalizationArgs = {
  input: UpdateSubjectInput;
};

export type MutationCreateTagLocalizationArgs = {
  input: UpdateTagInput;
};

export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type NewsAndAnnouncement = {
  __typename?: 'NewsAndAnnouncement';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  header: Scalars['String'];
  canvas_preview?: Maybe<UploadFile>;
  dynamic_content?: Maybe<Array<Maybe<NewsAndAnnouncementDynamicContentDynamicZone>>>;
  seo_link: Scalars['String'];
  download?: Maybe<ComponentCommonFileDownload>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  menus?: Maybe<Array<Maybe<Menus>>>;
  localizations?: Maybe<Array<Maybe<NewsAndAnnouncement>>>;
};

export type NewsAndAnnouncementTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type NewsAndAnnouncementMenusArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type NewsAndAnnouncementLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type NewsAndAnnouncementAggregator = {
  __typename?: 'NewsAndAnnouncementAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NewsAndAnnouncementConnection = {
  __typename?: 'NewsAndAnnouncementConnection';
  values?: Maybe<Array<Maybe<NewsAndAnnouncement>>>;
  groupBy?: Maybe<NewsAndAnnouncementGroupBy>;
  aggregate?: Maybe<NewsAndAnnouncementAggregator>;
};

export type NewsAndAnnouncementConnectionCanvas_Preview = {
  __typename?: 'NewsAndAnnouncementConnectionCanvas_preview';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementConnectionCreatedAt = {
  __typename?: 'NewsAndAnnouncementConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementConnectionDownload = {
  __typename?: 'NewsAndAnnouncementConnectionDownload';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementConnectionHeader = {
  __typename?: 'NewsAndAnnouncementConnectionHeader';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementConnectionId = {
  __typename?: 'NewsAndAnnouncementConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementConnectionLocale = {
  __typename?: 'NewsAndAnnouncementConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementConnectionPublished_At = {
  __typename?: 'NewsAndAnnouncementConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementConnectionSeo_Link = {
  __typename?: 'NewsAndAnnouncementConnectionSeo_link';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementConnectionUpdatedAt = {
  __typename?: 'NewsAndAnnouncementConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementConnection_Id = {
  __typename?: 'NewsAndAnnouncementConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<NewsAndAnnouncementConnection>;
};

export type NewsAndAnnouncementDynamicContentDynamicZone =
  | ComponentContentSectionsGridImage
  | ComponentContentSectionsTextContent
  | ComponentContentSectionsCarousalImage;

export type NewsAndAnnouncementGroupBy = {
  __typename?: 'NewsAndAnnouncementGroupBy';
  id?: Maybe<Array<Maybe<NewsAndAnnouncementConnectionId>>>;
  _id?: Maybe<Array<Maybe<NewsAndAnnouncementConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<NewsAndAnnouncementConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<NewsAndAnnouncementConnectionUpdatedAt>>>;
  header?: Maybe<Array<Maybe<NewsAndAnnouncementConnectionHeader>>>;
  canvas_preview?: Maybe<Array<Maybe<NewsAndAnnouncementConnectionCanvas_Preview>>>;
  seo_link?: Maybe<Array<Maybe<NewsAndAnnouncementConnectionSeo_Link>>>;
  download?: Maybe<Array<Maybe<NewsAndAnnouncementConnectionDownload>>>;
  locale?: Maybe<Array<Maybe<NewsAndAnnouncementConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<NewsAndAnnouncementConnectionPublished_At>>>;
};

export type NewsAndAnnouncementInput = {
  header: Scalars['String'];
  canvas_preview?: Maybe<Scalars['ID']>;
  dynamic_content?: Maybe<
    Array<Scalars['NewsAndAnnouncementDynamicContentDynamicZoneInput']>
  >;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  seo_link: Scalars['String'];
  download?: Maybe<ComponentCommonFileDownloadInput>;
  menus?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  contact?: Maybe<Contact>;
  home?: Maybe<Home>;
  mainMenu?: Maybe<MainMenus>;
  mainMenus?: Maybe<Array<Maybe<MainMenus>>>;
  mainMenusConnection?: Maybe<MainMenusConnection>;
  menu?: Maybe<Menus>;
  menus?: Maybe<Array<Maybe<Menus>>>;
  menusConnection?: Maybe<MenusConnection>;
  newsAndAnnouncement?: Maybe<NewsAndAnnouncement>;
  newsAndAnnouncements?: Maybe<Array<Maybe<NewsAndAnnouncement>>>;
  newsAndAnnouncementsConnection?: Maybe<NewsAndAnnouncementConnection>;
  room?: Maybe<Rooms>;
  rooms?: Maybe<Array<Maybe<Rooms>>>;
  roomsConnection?: Maybe<RoomsConnection>;
  staff?: Maybe<Staffs>;
  staffs?: Maybe<Array<Maybe<Staffs>>>;
  staffsConnection?: Maybe<StaffsConnection>;
  subject?: Maybe<Subjects>;
  subjects?: Maybe<Array<Maybe<Subjects>>>;
  subjectsConnection?: Maybe<SubjectsConnection>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsConnection?: Maybe<TagConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};

export type QueryContactArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryHomeArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryMainMenuArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryMainMenusArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryMainMenusConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryMenuArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryMenusArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryMenusConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryNewsAndAnnouncementArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryNewsAndAnnouncementsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryNewsAndAnnouncementsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryRoomArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRoomsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryRoomsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryStaffArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryStaffsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryStaffsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};

export type QuerySubjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QuerySubjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};

export type QuerySubjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryTagArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryTagsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type RoomInput = {
  room_id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Rooms = {
  __typename?: 'Rooms';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  room_id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Rooms>>>;
};

export type RoomsLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoomsAggregator = {
  __typename?: 'RoomsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RoomsConnection = {
  __typename?: 'RoomsConnection';
  values?: Maybe<Array<Maybe<Rooms>>>;
  groupBy?: Maybe<RoomsGroupBy>;
  aggregate?: Maybe<RoomsAggregator>;
};

export type RoomsConnectionCreatedAt = {
  __typename?: 'RoomsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RoomsConnection>;
};

export type RoomsConnectionId = {
  __typename?: 'RoomsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RoomsConnection>;
};

export type RoomsConnectionLocale = {
  __typename?: 'RoomsConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RoomsConnection>;
};

export type RoomsConnectionRoom_Id = {
  __typename?: 'RoomsConnectionRoom_id';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RoomsConnection>;
};

export type RoomsConnectionTitle = {
  __typename?: 'RoomsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RoomsConnection>;
};

export type RoomsConnectionUpdatedAt = {
  __typename?: 'RoomsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RoomsConnection>;
};

export type RoomsConnection_Id = {
  __typename?: 'RoomsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RoomsConnection>;
};

export type RoomsGroupBy = {
  __typename?: 'RoomsGroupBy';
  id?: Maybe<Array<Maybe<RoomsConnectionId>>>;
  _id?: Maybe<Array<Maybe<RoomsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<RoomsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<RoomsConnectionUpdatedAt>>>;
  room_id?: Maybe<Array<Maybe<RoomsConnectionRoom_Id>>>;
  title?: Maybe<Array<Maybe<RoomsConnectionTitle>>>;
  locale?: Maybe<Array<Maybe<RoomsConnectionLocale>>>;
};

export type StaffInput = {
  title?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  academic_position: Scalars['String'];
  rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_number?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  research?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  full_title: Scalars['String'];
  academic_position_group: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Staffs = {
  __typename?: 'Staffs';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  academic_position: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  research?: Maybe<Scalars['String']>;
  profile_image?: Maybe<UploadFile>;
  email?: Maybe<Scalars['String']>;
  full_title: Scalars['String'];
  academic_position_group: Scalars['String'];
  order: Scalars['Int'];
  locale?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<Subjects>>>;
  rooms?: Maybe<Array<Maybe<Rooms>>>;
  localizations?: Maybe<Array<Maybe<Staffs>>>;
};

export type StaffsSubjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StaffsRoomsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StaffsLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StaffsAggregator = {
  __typename?: 'StaffsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<StaffsAggregatorSum>;
  avg?: Maybe<StaffsAggregatorAvg>;
  min?: Maybe<StaffsAggregatorMin>;
  max?: Maybe<StaffsAggregatorMax>;
};

export type StaffsAggregatorAvg = {
  __typename?: 'StaffsAggregatorAvg';
  order?: Maybe<Scalars['Float']>;
};

export type StaffsAggregatorMax = {
  __typename?: 'StaffsAggregatorMax';
  order?: Maybe<Scalars['Float']>;
};

export type StaffsAggregatorMin = {
  __typename?: 'StaffsAggregatorMin';
  order?: Maybe<Scalars['Float']>;
};

export type StaffsAggregatorSum = {
  __typename?: 'StaffsAggregatorSum';
  order?: Maybe<Scalars['Float']>;
};

export type StaffsConnection = {
  __typename?: 'StaffsConnection';
  values?: Maybe<Array<Maybe<Staffs>>>;
  groupBy?: Maybe<StaffsGroupBy>;
  aggregate?: Maybe<StaffsAggregator>;
};

export type StaffsConnectionAcademic_Position = {
  __typename?: 'StaffsConnectionAcademic_position';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionAcademic_Position_Group = {
  __typename?: 'StaffsConnectionAcademic_position_group';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionCreatedAt = {
  __typename?: 'StaffsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionEmail = {
  __typename?: 'StaffsConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionFull_Title = {
  __typename?: 'StaffsConnectionFull_title';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionId = {
  __typename?: 'StaffsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionInfo = {
  __typename?: 'StaffsConnectionInfo';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionLocale = {
  __typename?: 'StaffsConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionName = {
  __typename?: 'StaffsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionOrder = {
  __typename?: 'StaffsConnectionOrder';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionPhone_Number = {
  __typename?: 'StaffsConnectionPhone_number';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionProfile_Image = {
  __typename?: 'StaffsConnectionProfile_image';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionResearch = {
  __typename?: 'StaffsConnectionResearch';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionTitle = {
  __typename?: 'StaffsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnectionUpdatedAt = {
  __typename?: 'StaffsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsConnection_Id = {
  __typename?: 'StaffsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StaffsConnection>;
};

export type StaffsGroupBy = {
  __typename?: 'StaffsGroupBy';
  id?: Maybe<Array<Maybe<StaffsConnectionId>>>;
  _id?: Maybe<Array<Maybe<StaffsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<StaffsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<StaffsConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<StaffsConnectionTitle>>>;
  name?: Maybe<Array<Maybe<StaffsConnectionName>>>;
  academic_position?: Maybe<Array<Maybe<StaffsConnectionAcademic_Position>>>;
  phone_number?: Maybe<Array<Maybe<StaffsConnectionPhone_Number>>>;
  info?: Maybe<Array<Maybe<StaffsConnectionInfo>>>;
  research?: Maybe<Array<Maybe<StaffsConnectionResearch>>>;
  profile_image?: Maybe<Array<Maybe<StaffsConnectionProfile_Image>>>;
  email?: Maybe<Array<Maybe<StaffsConnectionEmail>>>;
  full_title?: Maybe<Array<Maybe<StaffsConnectionFull_Title>>>;
  academic_position_group?: Maybe<Array<Maybe<StaffsConnectionAcademic_Position_Group>>>;
  order?: Maybe<Array<Maybe<StaffsConnectionOrder>>>;
  locale?: Maybe<Array<Maybe<StaffsConnectionLocale>>>;
};

export type SubjectInput = {
  subject_id: Scalars['String'];
  title: Scalars['String'];
  rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Subjects = {
  __typename?: 'Subjects';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  subject_id: Scalars['String'];
  title: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<Rooms>>>;
  localizations?: Maybe<Array<Maybe<Subjects>>>;
};

export type SubjectsRoomsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type SubjectsLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type SubjectsAggregator = {
  __typename?: 'SubjectsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SubjectsConnection = {
  __typename?: 'SubjectsConnection';
  values?: Maybe<Array<Maybe<Subjects>>>;
  groupBy?: Maybe<SubjectsGroupBy>;
  aggregate?: Maybe<SubjectsAggregator>;
};

export type SubjectsConnectionCreatedAt = {
  __typename?: 'SubjectsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SubjectsConnection>;
};

export type SubjectsConnectionId = {
  __typename?: 'SubjectsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SubjectsConnection>;
};

export type SubjectsConnectionLocale = {
  __typename?: 'SubjectsConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SubjectsConnection>;
};

export type SubjectsConnectionSubject_Id = {
  __typename?: 'SubjectsConnectionSubject_id';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SubjectsConnection>;
};

export type SubjectsConnectionTitle = {
  __typename?: 'SubjectsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SubjectsConnection>;
};

export type SubjectsConnectionUpdatedAt = {
  __typename?: 'SubjectsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SubjectsConnection>;
};

export type SubjectsConnection_Id = {
  __typename?: 'SubjectsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SubjectsConnection>;
};

export type SubjectsGroupBy = {
  __typename?: 'SubjectsGroupBy';
  id?: Maybe<Array<Maybe<SubjectsConnectionId>>>;
  _id?: Maybe<Array<Maybe<SubjectsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<SubjectsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<SubjectsConnectionUpdatedAt>>>;
  subject_id?: Maybe<Array<Maybe<SubjectsConnectionSubject_Id>>>;
  title?: Maybe<Array<Maybe<SubjectsConnectionTitle>>>;
  locale?: Maybe<Array<Maybe<SubjectsConnectionLocale>>>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  tag_id: Scalars['String'];
  tag_name?: Maybe<Scalars['String']>;
  seo_link: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  news?: Maybe<Array<Maybe<NewsAndAnnouncement>>>;
  localizations?: Maybe<Array<Maybe<Tag>>>;
};

export type TagNewsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type TagLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type TagAggregator = {
  __typename?: 'TagAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  values?: Maybe<Array<Maybe<Tag>>>;
  groupBy?: Maybe<TagGroupBy>;
  aggregate?: Maybe<TagAggregator>;
};

export type TagConnectionCreatedAt = {
  __typename?: 'TagConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionId = {
  __typename?: 'TagConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionLocale = {
  __typename?: 'TagConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionSeo_Link = {
  __typename?: 'TagConnectionSeo_link';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionTag_Id = {
  __typename?: 'TagConnectionTag_id';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionTag_Name = {
  __typename?: 'TagConnectionTag_name';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionUpdatedAt = {
  __typename?: 'TagConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnection_Id = {
  __typename?: 'TagConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TagConnection>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  id?: Maybe<Array<Maybe<TagConnectionId>>>;
  _id?: Maybe<Array<Maybe<TagConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TagConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<TagConnectionUpdatedAt>>>;
  tag_id?: Maybe<Array<Maybe<TagConnectionTag_Id>>>;
  tag_name?: Maybe<Array<Maybe<TagConnectionTag_Name>>>;
  seo_link?: Maybe<Array<Maybe<TagConnectionSeo_Link>>>;
  locale?: Maybe<Array<Maybe<TagConnectionLocale>>>;
};

export type TagInput = {
  tag_id: Scalars['String'];
  tag_name?: Maybe<Scalars['String']>;
  news?: Maybe<Array<Maybe<Scalars['ID']>>>;
  seo_link: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};

export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateMainMenuInput = {
  data?: Maybe<MainMenuInput>;
};

export type CreateMainMenuPayload = {
  __typename?: 'createMainMenuPayload';
  mainMenu?: Maybe<MainMenus>;
};

export type CreateMenuInput = {
  data?: Maybe<MenuInput>;
};

export type CreateMenuPayload = {
  __typename?: 'createMenuPayload';
  menu?: Maybe<Menus>;
};

export type CreateNewsAndAnnouncementInput = {
  data?: Maybe<NewsAndAnnouncementInput>;
};

export type CreateNewsAndAnnouncementPayload = {
  __typename?: 'createNewsAndAnnouncementPayload';
  newsAndAnnouncement?: Maybe<NewsAndAnnouncement>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateRoomInput = {
  data?: Maybe<RoomInput>;
};

export type CreateRoomPayload = {
  __typename?: 'createRoomPayload';
  room?: Maybe<Rooms>;
};

export type CreateStaffInput = {
  data?: Maybe<StaffInput>;
};

export type CreateStaffPayload = {
  __typename?: 'createStaffPayload';
  staff?: Maybe<Staffs>;
};

export type CreateSubjectInput = {
  data?: Maybe<SubjectInput>;
};

export type CreateSubjectPayload = {
  __typename?: 'createSubjectPayload';
  subject?: Maybe<Subjects>;
};

export type CreateTagInput = {
  data?: Maybe<TagInput>;
};

export type CreateTagPayload = {
  __typename?: 'createTagPayload';
  tag?: Maybe<Tag>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteContactPayload = {
  __typename?: 'deleteContactPayload';
  contact?: Maybe<Contact>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteHomePayload = {
  __typename?: 'deleteHomePayload';
  home?: Maybe<Home>;
};

export type DeleteMainMenuInput = {
  where?: Maybe<InputId>;
};

export type DeleteMainMenuPayload = {
  __typename?: 'deleteMainMenuPayload';
  mainMenu?: Maybe<MainMenus>;
};

export type DeleteMenuInput = {
  where?: Maybe<InputId>;
};

export type DeleteMenuPayload = {
  __typename?: 'deleteMenuPayload';
  menu?: Maybe<Menus>;
};

export type DeleteNewsAndAnnouncementInput = {
  where?: Maybe<InputId>;
};

export type DeleteNewsAndAnnouncementPayload = {
  __typename?: 'deleteNewsAndAnnouncementPayload';
  newsAndAnnouncement?: Maybe<NewsAndAnnouncement>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoomInput = {
  where?: Maybe<InputId>;
};

export type DeleteRoomPayload = {
  __typename?: 'deleteRoomPayload';
  room?: Maybe<Rooms>;
};

export type DeleteStaffInput = {
  where?: Maybe<InputId>;
};

export type DeleteStaffPayload = {
  __typename?: 'deleteStaffPayload';
  staff?: Maybe<Staffs>;
};

export type DeleteSubjectInput = {
  where?: Maybe<InputId>;
};

export type DeleteSubjectPayload = {
  __typename?: 'deleteSubjectPayload';
  subject?: Maybe<Subjects>;
};

export type DeleteTagInput = {
  where?: Maybe<InputId>;
};

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload';
  tag?: Maybe<Tag>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditComponentCommonFileDownloadInput = {
  id?: Maybe<Scalars['ID']>;
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentCommonInternalPageInput = {
  id?: Maybe<Scalars['ID']>;
  internal_pages?: Maybe<Enum_Componentcommoninternalpages_Internal_Pages>;
};

export type EditComponentCommonMenuConfigInput = {
  id?: Maybe<Scalars['ID']>;
  Mobile?: Maybe<Scalars['Boolean']>;
  Desktop?: Maybe<Scalars['Boolean']>;
  Footer?: Maybe<Scalars['Boolean']>;
  DesktopQuickMenu?: Maybe<Scalars['Boolean']>;
  MobileQuickMenu?: Maybe<Scalars['Boolean']>;
};

export type EditComponentContentSectionsCarousalImageInput = {
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<EditComponentContentSectionsImageWithCaptionInput>;
};

export type EditComponentContentSectionsGridImageInput = {
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<EditComponentContentSectionsImageWithCaptionInput>;
};

export type EditComponentContentSectionsImageWithCaptionInput = {
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
};

export type EditComponentContentSectionsTextContentInput = {
  id?: Maybe<Scalars['ID']>;
  body?: Maybe<Scalars['String']>;
};

export type EditComponentHomeActivityNAwardInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  tag?: Maybe<Scalars['ID']>;
};

export type EditComponentHomeMainCanvaInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  news_announcement?: Maybe<Scalars['ID']>;
};

export type EditComponentMenuSubMenuInput = {
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  news_announcement?: Maybe<Scalars['ID']>;
  title_th?: Maybe<Scalars['String']>;
  title_en?: Maybe<Scalars['String']>;
  static_page?: Maybe<EditComponentCommonInternalPageInput>;
};

export type EditComponentTagsTagInput = {
  id?: Maybe<Scalars['ID']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditContactInput = {
  address_content?: Maybe<Scalars['String']>;
  contact_phone?: Maybe<Scalars['String']>;
  google_map_link?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomeInput = {
  main_canvas?: Maybe<Array<Maybe<EditComponentHomeMainCanvaInput>>>;
  activities_n_awards?: Maybe<Array<Maybe<EditComponentHomeActivityNAwardInput>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMainMenuInput = {
  title?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['ID']>;
  menu_config?: Maybe<EditComponentCommonMenuConfigInput>;
  menus?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<Scalars['Int']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMenuInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  main_menu?: Maybe<Scalars['ID']>;
  internal_page?: Maybe<EditComponentCommonInternalPageInput>;
  news_announcement?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['Int']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditNewsAndAnnouncementInput = {
  header?: Maybe<Scalars['String']>;
  canvas_preview?: Maybe<Scalars['ID']>;
  dynamic_content?: Maybe<
    Array<Scalars['NewsAndAnnouncementDynamicContentDynamicZoneInput']>
  >;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  seo_link?: Maybe<Scalars['String']>;
  download?: Maybe<EditComponentCommonFileDownloadInput>;
  menus?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoomInput = {
  room_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditStaffInput = {
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  academic_position?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  phone_number?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  research?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  full_title?: Maybe<Scalars['String']>;
  academic_position_group?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSubjectInput = {
  subject_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTagInput = {
  tag_id?: Maybe<Scalars['String']>;
  tag_name?: Maybe<Scalars['String']>;
  news?: Maybe<Array<Maybe<Scalars['ID']>>>;
  seo_link?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateContactInput = {
  data?: Maybe<EditContactInput>;
};

export type UpdateContactPayload = {
  __typename?: 'updateContactPayload';
  contact?: Maybe<Contact>;
};

export type UpdateHomeInput = {
  data?: Maybe<EditHomeInput>;
};

export type UpdateHomePayload = {
  __typename?: 'updateHomePayload';
  home?: Maybe<Home>;
};

export type UpdateMainMenuInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMainMenuInput>;
};

export type UpdateMainMenuPayload = {
  __typename?: 'updateMainMenuPayload';
  mainMenu?: Maybe<MainMenus>;
};

export type UpdateMenuInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMenuInput>;
};

export type UpdateMenuPayload = {
  __typename?: 'updateMenuPayload';
  menu?: Maybe<Menus>;
};

export type UpdateNewsAndAnnouncementInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditNewsAndAnnouncementInput>;
};

export type UpdateNewsAndAnnouncementPayload = {
  __typename?: 'updateNewsAndAnnouncementPayload';
  newsAndAnnouncement?: Maybe<NewsAndAnnouncement>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoomInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoomInput>;
};

export type UpdateRoomPayload = {
  __typename?: 'updateRoomPayload';
  room?: Maybe<Rooms>;
};

export type UpdateStaffInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditStaffInput>;
};

export type UpdateStaffPayload = {
  __typename?: 'updateStaffPayload';
  staff?: Maybe<Staffs>;
};

export type UpdateSubjectInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSubjectInput>;
};

export type UpdateSubjectPayload = {
  __typename?: 'updateSubjectPayload';
  subject?: Maybe<Subjects>;
};

export type UpdateTagInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTagInput>;
};

export type UpdateTagPayload = {
  __typename?: 'updateTagPayload';
  tag?: Maybe<Tag>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type GetMenuQueryVariables = Exact<{
  locale?: Maybe<Scalars['String']>;
}>;

export type GetMenuQuery = { __typename?: 'Query' } & {
  mainMenus?: Maybe<
    Array<
      Maybe<
        { __typename?: 'MainMenus' } & Pick<MainMenus, 'id' | 'title' | 'order'> & {
            thumbnail?: Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>>;
            menu_config?: Maybe<
              { __typename?: 'ComponentCommonMenuConfig' } & Pick<
                ComponentCommonMenuConfig,
                'Desktop' | 'Mobile' | 'Footer' | 'DesktopQuickMenu' | 'MobileQuickMenu'
              >
            >;
            menus?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Menus' } & Pick<
                    Menus,
                    'id' | 'title' | 'order' | 'url'
                  > & {
                      news_announcement?: Maybe<
                        { __typename?: 'NewsAndAnnouncement' } & Pick<
                          NewsAndAnnouncement,
                          'id' | 'seo_link'
                        >
                      >;
                      internal_page?: Maybe<
                        { __typename?: 'ComponentCommonInternalPages' } & Pick<
                          ComponentCommonInternalPages,
                          'internal_pages'
                        >
                      >;
                    }
                >
              >
            >;
          }
      >
    >
  >;
};

export type GetHomeQueryVariables = Exact<{
  locale?: Maybe<Scalars['String']>;
}>;

export type GetHomeQuery = { __typename?: 'Query' } & {
  home?: Maybe<
    { __typename?: 'Home' } & {
      main_canvas?: Maybe<
        Array<
          Maybe<
            { __typename?: 'ComponentHomeMainCanvas' } & Pick<
              ComponentHomeMainCanvas,
              '_id' | 'title' | 'description'
            > & {
                news_announcement?: Maybe<
                  { __typename?: 'NewsAndAnnouncement' } & Pick<
                    NewsAndAnnouncement,
                    '_id' | 'seo_link'
                  >
                >;
                image?: Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>>;
              }
          >
        >
      >;
      activities_n_awards?: Maybe<
        Array<
          Maybe<
            { __typename?: 'ComponentHomeActivityNAwards' } & Pick<
              ComponentHomeActivityNAwards,
              '_id' | 'title' | 'description'
            > & {
                image?: Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>>;
                tag?: Maybe<{ __typename?: 'Tag' } & Pick<Tag, '_id' | 'tag_name'>>;
              }
          >
        >
      >;
    }
  >;
  newsAndAnnouncements?: Maybe<
    Array<
      Maybe<
        { __typename?: 'NewsAndAnnouncement' } & Pick<
          NewsAndAnnouncement,
          '_id' | 'header' | 'createdAt'
        > & {
            canvas_preview?: Maybe<
              { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
            >;
            tags?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Tag' } & Pick<Tag, 'tag_id' | 'tag_name' | 'seo_link'>
                >
              >
            >;
            dynamic_content?: Maybe<
              Array<
                Maybe<
                  | { __typename: 'ComponentContentSectionsGridImage' }
                  | ({ __typename: 'ComponentContentSectionsTextContent' } & Pick<
                      ComponentContentSectionsTextContent,
                      'body'
                    >)
                  | { __typename: 'ComponentContentSectionsCarousalImage' }
                >
              >
            >;
          }
      >
    >
  >;
};

export type GetNewsByTagSeoLinkQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  locale: Scalars['String'];
  where?: Maybe<Scalars['JSON']>;
}>;

export type GetNewsByTagSeoLinkQuery = { __typename?: 'Query' } & {
  tags?: Maybe<
    Array<Maybe<{ __typename?: 'Tag' } & Pick<Tag, 'tag_id' | 'seo_link' | 'tag_name'>>>
  >;
  newsAndAnnouncements?: Maybe<
    Array<
      Maybe<
        { __typename?: 'NewsAndAnnouncement' } & Pick<
          NewsAndAnnouncement,
          '_id' | 'header' | 'createdAt'
        > & {
            canvas_preview?: Maybe<
              { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
            >;
            dynamic_content?: Maybe<
              Array<
                Maybe<
                  | { __typename: 'ComponentContentSectionsGridImage' }
                  | ({ __typename: 'ComponentContentSectionsTextContent' } & Pick<
                      ComponentContentSectionsTextContent,
                      'body'
                    >)
                  | { __typename: 'ComponentContentSectionsCarousalImage' }
                >
              >
            >;
            tags?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Tag' } & Pick<Tag, 'tag_id' | 'tag_name' | 'seo_link'>
                >
              >
            >;
          }
      >
    >
  >;
};

export type CommonImagesFieldFragment = { __typename?: 'UploadFile' } & Pick<
  UploadFile,
  'id' | 'url' | 'caption' | 'alternativeText'
>;

export type CommonContentSectionFragment = {
  __typename?: 'ComponentContentSectionsTextContent';
} & Pick<ComponentContentSectionsTextContent, 'id' | 'body'>;

export type GetNewsByIdQueryVariables = Exact<{
  Id: Scalars['ID'];
  LocaleConnection: Scalars['String'];
}>;

export type GetNewsByIdQuery = { __typename?: 'Query' } & {
  newsAndAnnouncement?: Maybe<
    { __typename?: 'NewsAndAnnouncement' } & Pick<
      NewsAndAnnouncement,
      '_id' | 'locale' | 'header' | 'createdAt' | 'updatedAt'
    > & {
        canvas_preview?: Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>>;
        tags?: Maybe<
          Array<
            Maybe<
              { __typename?: 'Tag' } & Pick<
                Tag,
                'tag_name' | 'locale' | 'tag_id' | '_id' | 'seo_link'
              >
            >
          >
        >;
        dynamic_content?: Maybe<
          Array<
            Maybe<
              | ({ __typename: 'ComponentContentSectionsGridImage' } & {
                  images?: Maybe<
                    { __typename?: 'ComponentContentSectionsImageWithCaption' } & Pick<
                      ComponentContentSectionsImageWithCaption,
                      '_id' | 'title'
                    > & {
                        images?: Maybe<
                          Array<
                            Maybe<
                              { __typename?: 'UploadFile' } & CommonImagesFieldFragment
                            >
                          >
                        >;
                      }
                  >;
                })
              | ({
                  __typename: 'ComponentContentSectionsTextContent';
                } & CommonContentSectionFragment)
              | ({ __typename: 'ComponentContentSectionsCarousalImage' } & {
                  images?: Maybe<
                    { __typename?: 'ComponentContentSectionsImageWithCaption' } & Pick<
                      ComponentContentSectionsImageWithCaption,
                      '_id' | 'title'
                    > & {
                        images?: Maybe<
                          Array<
                            Maybe<
                              { __typename?: 'UploadFile' } & CommonImagesFieldFragment
                            >
                          >
                        >;
                      }
                  >;
                })
            >
          >
        >;
        download?: Maybe<
          { __typename?: 'ComponentCommonFileDownload' } & {
            files?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UploadFile' } & Pick<
                    UploadFile,
                    'url' | 'name' | '_id' | 'mime'
                  >
                >
              >
            >;
          }
        >;
      }
  >;
  newsAndAnnouncementsConnection?: Maybe<
    { __typename?: 'NewsAndAnnouncementConnection' } & {
      values?: Maybe<
        Array<
          Maybe<
            { __typename?: 'NewsAndAnnouncement' } & Pick<
              NewsAndAnnouncement,
              '_id' | 'header' | 'createdAt'
            > & {
                canvas_preview?: Maybe<
                  { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
                >;
                dynamic_content?: Maybe<
                  Array<
                    Maybe<
                      | { __typename: 'ComponentContentSectionsGridImage' }
                      | ({ __typename: 'ComponentContentSectionsTextContent' } & Pick<
                          ComponentContentSectionsTextContent,
                          'body'
                        >)
                      | { __typename: 'ComponentContentSectionsCarousalImage' }
                    >
                  >
                >;
              }
          >
        >
      >;
    }
  >;
};

export type GetStaffQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
}>;

export type GetStaffQuery = { __typename?: 'Query' } & {
  staffs?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Staffs' } & Pick<
          Staffs,
          | 'id'
          | 'title'
          | 'full_title'
          | 'name'
          | 'academic_position'
          | 'phone_number'
          | 'email'
          | 'info'
          | 'research'
        > & {
            rooms?: Maybe<
              Array<Maybe<{ __typename?: 'Rooms' } & Pick<Rooms, 'room_id' | 'title'>>>
            >;
            profile_image?: Maybe<
              { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
            >;
            subjects?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Subjects' } & Pick<
                    Subjects,
                    'id' | 'subject_id' | 'title'
                  >
                >
              >
            >;
          }
      >
    >
  >;
};

export type GetStaffsQueryVariables = Exact<{
  locale?: Maybe<Scalars['String']>;
}>;

export type GetStaffsQuery = { __typename?: 'Query' } & {
  staffs?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Staffs' } & Pick<
          Staffs,
          | 'id'
          | 'title'
          | 'full_title'
          | 'name'
          | 'academic_position'
          | 'academic_position_group'
          | 'phone_number'
          | 'email'
          | 'order'
        > & {
            profile_image?: Maybe<
              { __typename?: 'UploadFile' } & Pick<UploadFile, 'url'>
            >;
          }
      >
    >
  >;
  staffsConnection?: Maybe<
    { __typename?: 'StaffsConnection' } & {
      groupBy?: Maybe<
        { __typename?: 'StaffsGroupBy' } & {
          academic_position_group?: Maybe<
            Array<
              Maybe<
                { __typename?: 'StaffsConnectionAcademic_position_group' } & Pick<
                  StaffsConnectionAcademic_Position_Group,
                  'key'
                >
              >
            >
          >;
        }
      >;
    }
  >;
};

export type GetContactQueryVariables = Exact<{
  locale?: Maybe<Scalars['String']>;
}>;

export type GetContactQuery = { __typename?: 'Query' } & {
  contact?: Maybe<
    { __typename?: 'Contact' } & Pick<
      Contact,
      'address_content' | 'contact_phone' | 'contact_email' | 'google_map_link'
    >
  >;
};

export const CommonImagesFieldFragmentDoc = gql`
  fragment commonImagesField on UploadFile {
    id
    url
    caption
    alternativeText
  }
`;
export const CommonContentSectionFragmentDoc = gql`
  fragment commonContentSection on ComponentContentSectionsTextContent {
    id
    body
  }
`;
export const GetMenuDocument = gql`
  query GetMenu($locale: String = "th") {
    mainMenus(locale: $locale) {
      id
      title
      order
      thumbnail {
        url
      }
      menu_config {
        Desktop
        Mobile
        Footer
        DesktopQuickMenu
        MobileQuickMenu
      }
      menus {
        id
        title
        order
        url
        news_announcement {
          id
          seo_link
        }
        internal_page {
          internal_pages
        }
      }
    }
  }
`;
export type GetMenuQueryResult = Apollo.QueryResult<GetMenuQuery, GetMenuQueryVariables>;
export const GetHomeDocument = gql`
  query GetHome($locale: String = "th") {
    home(locale: $locale, publicationState: LIVE) {
      main_canvas {
        _id
        title
        news_announcement {
          _id
          seo_link
        }
        description
        image {
          url
        }
      }
      activities_n_awards {
        _id
        title
        description
        image {
          url
        }
        tag {
          _id
          tag_name
        }
      }
    }
    newsAndAnnouncements(
      start: 0
      limit: 3
      publicationState: LIVE
      sort: "createdAt:desc"
      locale: $locale
    ) {
      _id
      header
      canvas_preview {
        url
      }
      tags {
        tag_id
        tag_name
        seo_link
      }
      dynamic_content {
        __typename
        ... on ComponentContentSectionsTextContent {
          body
        }
      }
      createdAt
    }
  }
`;
export type GetHomeQueryResult = Apollo.QueryResult<GetHomeQuery, GetHomeQueryVariables>;
export const GetNewsByTagSeoLinkDocument = gql`
  query GetNewsByTagSeoLink(
    $offset: Int = 0
    $limit: Int = 25
    $locale: String!
    $where: JSON
  ) {
    tags(locale: $locale) {
      tag_id
      seo_link
      tag_name
    }
    newsAndAnnouncements(
      start: $offset
      limit: $limit
      publicationState: LIVE
      sort: "createdAt:desc"
      locale: $locale
      where: $where
    ) {
      _id
      header
      canvas_preview {
        url
      }
      dynamic_content {
        __typename
        ... on ComponentContentSectionsTextContent {
          body
        }
      }
      tags {
        tag_id
        tag_name
        seo_link
      }
      createdAt
    }
  }
`;
export type GetNewsByTagSeoLinkQueryResult = Apollo.QueryResult<
  GetNewsByTagSeoLinkQuery,
  GetNewsByTagSeoLinkQueryVariables
>;
export const GetNewsByIdDocument = gql`
  query GetNewsById($Id: ID!, $LocaleConnection: String!) {
    newsAndAnnouncement(id: $Id) {
      _id
      locale
      header
      canvas_preview {
        url
      }
      tags {
        tag_name
        locale
        tag_id
        _id
        seo_link
      }
      dynamic_content {
        __typename
        ... on ComponentContentSectionsGridImage {
          images {
            _id
            title
            images {
              ...commonImagesField
            }
          }
        }
        ... on ComponentContentSectionsCarousalImage {
          images {
            _id
            title
            images {
              ...commonImagesField
            }
          }
        }
        ... on ComponentContentSectionsTextContent {
          ...commonContentSection
        }
      }
      download {
        files {
          url
          name
          _id
          mime
        }
      }
      createdAt
      updatedAt
    }
    newsAndAnnouncementsConnection(
      sort: "createdAt:desc"
      limit: 3
      locale: $LocaleConnection
    ) {
      values {
        _id
        header
        canvas_preview {
          url
        }
        dynamic_content {
          __typename
          ... on ComponentContentSectionsTextContent {
            body
          }
        }
        createdAt
      }
    }
  }
  ${CommonImagesFieldFragmentDoc}
  ${CommonContentSectionFragmentDoc}
`;
export type GetNewsByIdQueryResult = Apollo.QueryResult<
  GetNewsByIdQuery,
  GetNewsByIdQueryVariables
>;
export const GetStaffDocument = gql`
  query GetStaff($id: String, $locale: String = "th") {
    staffs(locale: $locale, where: { id: $id }) {
      id
      title
      full_title
      name
      academic_position
      phone_number
      email
      rooms {
        room_id
        title
      }
      profile_image {
        url
      }
      subjects {
        id
        subject_id
        title
      }
      info
      research
    }
  }
`;
export type GetStaffQueryResult = Apollo.QueryResult<
  GetStaffQuery,
  GetStaffQueryVariables
>;
export const GetStaffsDocument = gql`
  query GetStaffs($locale: String = "th") {
    staffs(locale: $locale) {
      id
      title
      full_title
      name
      academic_position
      academic_position_group
      phone_number
      email
      profile_image {
        url
      }
      order
    }
    staffsConnection(locale: $locale) {
      groupBy {
        academic_position_group {
          key
        }
      }
    }
  }
`;
export type GetStaffsQueryResult = Apollo.QueryResult<
  GetStaffsQuery,
  GetStaffsQueryVariables
>;
export const GetContactDocument = gql`
  query GetContact($locale: String = "th") {
    contact(locale: $locale, publicationState: LIVE) {
      address_content
      contact_phone
      contact_email
      google_map_link
    }
  }
`;
export type GetContactQueryResult = Apollo.QueryResult<
  GetContactQuery,
  GetContactQueryVariables
>;
