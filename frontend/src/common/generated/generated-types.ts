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

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
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
  | TagConnectionNews
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
  | ComponentContentSectionsCarousalImage
  | ComponentContentSectionsGridImage
  | ComponentContentSectionsImageWithCaption
  | ComponentContentSectionsTextContent
  | ComponentTagsTags;

export type Mutation = {
  __typename?: 'Mutation';
  createNewsAndAnnouncement?: Maybe<CreateNewsAndAnnouncementPayload>;
  updateNewsAndAnnouncement?: Maybe<UpdateNewsAndAnnouncementPayload>;
  deleteNewsAndAnnouncement?: Maybe<DeleteNewsAndAnnouncementPayload>;
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
  createNewsAndAnnouncementLocalization: NewsAndAnnouncement;
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

export type MutationCreateNewsAndAnnouncementArgs = {
  input?: Maybe<CreateNewsAndAnnouncementInput>;
};

export type MutationUpdateNewsAndAnnouncementArgs = {
  input?: Maybe<UpdateNewsAndAnnouncementInput>;
};

export type MutationDeleteNewsAndAnnouncementArgs = {
  input?: Maybe<DeleteNewsAndAnnouncementInput>;
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

export type MutationCreateNewsAndAnnouncementLocalizationArgs = {
  input: UpdateNewsAndAnnouncementInput;
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
  localizations?: Maybe<Array<Maybe<NewsAndAnnouncement>>>;
};

export type NewsAndAnnouncementTagsArgs = {
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
  newsAndAnnouncement?: Maybe<NewsAndAnnouncement>;
  newsAndAnnouncements?: Maybe<Array<Maybe<NewsAndAnnouncement>>>;
  newsAndAnnouncementsConnection?: Maybe<NewsAndAnnouncementConnection>;
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

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  tag_id: Scalars['String'];
  tag_name?: Maybe<Scalars['String']>;
  news?: Maybe<NewsAndAnnouncement>;
  seo_link: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Tag>>>;
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

export type TagConnectionNews = {
  __typename?: 'TagConnectionNews';
  key?: Maybe<Scalars['ID']>;
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
  news?: Maybe<Array<Maybe<TagConnectionNews>>>;
  seo_link?: Maybe<Array<Maybe<TagConnectionSeo_Link>>>;
  locale?: Maybe<Array<Maybe<TagConnectionLocale>>>;
};

export type TagInput = {
  tag_id: Scalars['String'];
  tag_name?: Maybe<Scalars['String']>;
  news?: Maybe<Scalars['ID']>;
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

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
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

export type EditComponentTagsTagInput = {
  id?: Maybe<Scalars['ID']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
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

export type EditTagInput = {
  tag_id?: Maybe<Scalars['String']>;
  tag_name?: Maybe<Scalars['String']>;
  news?: Maybe<Scalars['ID']>;
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

export type GetNewsQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
}>;

export type GetNewsQuery = { __typename?: 'Query' } & {
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
                  | { __typename?: 'ComponentContentSectionsGridImage' }
                  | ({ __typename?: 'ComponentContentSectionsTextContent' } & Pick<
                      ComponentContentSectionsTextContent,
                      'body'
                    >)
                  | { __typename?: 'ComponentContentSectionsCarousalImage' }
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

export type GetNewsByIdQueryVariables = Exact<{
  Id: Scalars['ID'];
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
              | ({ __typename: 'ComponentContentSectionsTextContent' } & Pick<
                  ComponentContentSectionsTextContent,
                  'id' | 'body'
                >)
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
};

export const CommonImagesFieldFragmentDoc = gql`
  fragment commonImagesField on UploadFile {
    id
    url
    caption
    alternativeText
  }
`;
export const GetNewsDocument = gql`
  query GetNews($offset: Int = 0, $limit: Int = 25, $locale: String = "en") {
    newsAndAnnouncements(
      start: $offset
      limit: $limit
      publicationState: LIVE
      sort: "createdAt:desc"
      locale: $locale
    ) {
      _id
      header
      canvas_preview {
        url
      }
      dynamic_content {
        ... on ComponentContentSectionsTextContent {
          body
        }
      }
      createdAt
    }
  }
`;
export type GetNewsQueryResult = Apollo.QueryResult<GetNewsQuery, GetNewsQueryVariables>;
export const GetNewsByIdDocument = gql`
  query GetNewsById($Id: ID!) {
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
          id
          body
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
  }
  ${CommonImagesFieldFragmentDoc}
`;
export type GetNewsByIdQueryResult = Apollo.QueryResult<
  GetNewsByIdQuery,
  GetNewsByIdQueryVariables
>;
