/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  avaliableSlidesClass: Array<Class>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageClass: Array<Class>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  profilePhotoTeacher: Array<Teacher>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetAvaliableSlidesClassArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ClassOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageClassArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ClassOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetProfilePhotoTeacherArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  avaliableSlidesClass?: InputMaybe<ClassCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageClass?: InputMaybe<ClassCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  profilePhotoTeacher?: InputMaybe<TeacherCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avaliableSlidesClass_every?: InputMaybe<ClassWhereInput>;
  avaliableSlidesClass_none?: InputMaybe<ClassWhereInput>;
  avaliableSlidesClass_some?: InputMaybe<ClassWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageClass_every?: InputMaybe<ClassWhereInput>;
  imageClass_none?: InputMaybe<ClassWhereInput>;
  imageClass_some?: InputMaybe<ClassWhereInput>;
  profilePhotoTeacher_every?: InputMaybe<TeacherWhereInput>;
  profilePhotoTeacher_none?: InputMaybe<TeacherWhereInput>;
  profilePhotoTeacher_some?: InputMaybe<TeacherWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  avaliableSlidesClass?: InputMaybe<ClassUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageClass?: InputMaybe<ClassUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  profilePhotoTeacher?: InputMaybe<TeacherUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avaliableSlidesClass_every?: InputMaybe<ClassWhereInput>;
  avaliableSlidesClass_none?: InputMaybe<ClassWhereInput>;
  avaliableSlidesClass_some?: InputMaybe<ClassWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageClass_every?: InputMaybe<ClassWhereInput>;
  imageClass_none?: InputMaybe<ClassWhereInput>;
  imageClass_some?: InputMaybe<ClassWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  profilePhotoTeacher_every?: InputMaybe<TeacherWhereInput>;
  profilePhotoTeacher_none?: InputMaybe<TeacherWhereInput>;
  profilePhotoTeacher_some?: InputMaybe<TeacherWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** It is used to display and archive the class content */
export type Class = Node & {
  __typename?: 'Class';
  archiveLink?: Maybe<Scalars['String']>;
  avaliableSlides?: Maybe<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Class>;
  /** List of Class versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  scheduledTime: Scalars['DateTime'];
  shortDescription?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  teachers: Array<Teacher>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** It is used to display and archive the class content */
export type ClassAvaliableSlidesArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** It is used to display and archive the class content */
export type ClassCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** It is used to display and archive the class content */
export type ClassDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** It is used to display and archive the class content */
export type ClassHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** It is used to display and archive the class content */
export type ClassImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** It is used to display and archive the class content */
export type ClassPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** It is used to display and archive the class content */
export type ClassScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** It is used to display and archive the class content */
export type ClassTeachersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherWhereInput>;
};


/** It is used to display and archive the class content */
export type ClassUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ClassConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ClassWhereUniqueInput;
};

/** A connection to a list of items. */
export type ClassConnection = {
  __typename?: 'ClassConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ClassEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ClassCreateInput = {
  archiveLink?: InputMaybe<Scalars['String']>;
  avaliableSlides?: InputMaybe<AssetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  name: Scalars['String'];
  scheduledTime: Scalars['DateTime'];
  shortDescription?: InputMaybe<Scalars['String']>;
  teachers?: InputMaybe<TeacherCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClassCreateManyInlineInput = {
  /** Connect multiple existing Class documents */
  connect?: InputMaybe<Array<ClassWhereUniqueInput>>;
  /** Create and connect multiple existing Class documents */
  create?: InputMaybe<Array<ClassCreateInput>>;
};

export type ClassCreateOneInlineInput = {
  /** Connect one existing Class document */
  connect?: InputMaybe<ClassWhereUniqueInput>;
  /** Create and connect one Class document */
  create?: InputMaybe<ClassCreateInput>;
};

/** An edge in a connection. */
export type ClassEdge = {
  __typename?: 'ClassEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Class;
};

/** Identifies documents */
export type ClassManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ClassWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ClassWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ClassWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  archiveLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  archiveLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  archiveLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  archiveLink_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  archiveLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  archiveLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  archiveLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  archiveLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  archiveLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  archiveLink_starts_with?: InputMaybe<Scalars['String']>;
  avaliableSlides?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledTime?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  scheduledTime_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  scheduledTime_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  scheduledTime_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  scheduledTime_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  scheduledTime_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  scheduledTime_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  scheduledTime_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortDescription_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  shortDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  shortDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  shortDescription_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  shortDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortDescription_starts_with?: InputMaybe<Scalars['String']>;
  teachers_every?: InputMaybe<TeacherWhereInput>;
  teachers_none?: InputMaybe<TeacherWhereInput>;
  teachers_some?: InputMaybe<TeacherWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ClassOrderByInput {
  ArchiveLinkAsc = 'archiveLink_ASC',
  ArchiveLinkDesc = 'archiveLink_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ScheduledTimeAsc = 'scheduledTime_ASC',
  ScheduledTimeDesc = 'scheduledTime_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ClassUpdateInput = {
  archiveLink?: InputMaybe<Scalars['String']>;
  avaliableSlides?: InputMaybe<AssetUpdateOneInlineInput>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  scheduledTime?: InputMaybe<Scalars['DateTime']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  teachers?: InputMaybe<TeacherUpdateManyInlineInput>;
};

export type ClassUpdateManyInlineInput = {
  /** Connect multiple existing Class documents */
  connect?: InputMaybe<Array<ClassConnectInput>>;
  /** Create and connect multiple Class documents */
  create?: InputMaybe<Array<ClassCreateInput>>;
  /** Delete multiple Class documents */
  delete?: InputMaybe<Array<ClassWhereUniqueInput>>;
  /** Disconnect multiple Class documents */
  disconnect?: InputMaybe<Array<ClassWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Class documents */
  set?: InputMaybe<Array<ClassWhereUniqueInput>>;
  /** Update multiple Class documents */
  update?: InputMaybe<Array<ClassUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Class documents */
  upsert?: InputMaybe<Array<ClassUpsertWithNestedWhereUniqueInput>>;
};

export type ClassUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type ClassUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ClassUpdateManyInput;
  /** Document search */
  where: ClassWhereInput;
};

export type ClassUpdateOneInlineInput = {
  /** Connect existing Class document */
  connect?: InputMaybe<ClassWhereUniqueInput>;
  /** Create and connect one Class document */
  create?: InputMaybe<ClassCreateInput>;
  /** Delete currently connected Class document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Class document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Class document */
  update?: InputMaybe<ClassUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Class document */
  upsert?: InputMaybe<ClassUpsertWithNestedWhereUniqueInput>;
};

export type ClassUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ClassUpdateInput;
  /** Unique document search */
  where: ClassWhereUniqueInput;
};

export type ClassUpsertInput = {
  /** Create document if it didn't exist */
  create: ClassCreateInput;
  /** Update document if it exists */
  update: ClassUpdateInput;
};

export type ClassUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ClassUpsertInput;
  /** Unique document search */
  where: ClassWhereUniqueInput;
};

/** Identifies documents */
export type ClassWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ClassWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ClassWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ClassWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  archiveLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  archiveLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  archiveLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  archiveLink_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  archiveLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  archiveLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  archiveLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  archiveLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  archiveLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  archiveLink_starts_with?: InputMaybe<Scalars['String']>;
  avaliableSlides?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledTime?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  scheduledTime_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  scheduledTime_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  scheduledTime_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  scheduledTime_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  scheduledTime_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  scheduledTime_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  scheduledTime_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortDescription_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  shortDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  shortDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  shortDescription_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  shortDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortDescription_starts_with?: InputMaybe<Scalars['String']>;
  teachers_every?: InputMaybe<TeacherWhereInput>;
  teachers_none?: InputMaybe<TeacherWhereInput>;
  teachers_some?: InputMaybe<TeacherWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Class record uniquely */
export type ClassWhereUniqueInput = {
  archiveLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  scheduledTime?: InputMaybe<Scalars['DateTime']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export type CurrentCourseDate = Node & {
  __typename?: 'CurrentCourseDate';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CurrentCourseDate>;
  finalDate: Scalars['Date'];
  /** List of CurrentCourseDate versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  initialDate: Scalars['Date'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quantityOfStudents?: Maybe<Scalars['Int']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CurrentCourseDateCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CurrentCourseDateDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CurrentCourseDateHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CurrentCourseDatePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CurrentCourseDateScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CurrentCourseDateUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CurrentCourseDateConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CurrentCourseDateWhereUniqueInput;
};

/** A connection to a list of items. */
export type CurrentCourseDateConnection = {
  __typename?: 'CurrentCourseDateConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CurrentCourseDateEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CurrentCourseDateCreateInput = {
  cl3q77aih80a301xi5p4y9nl1?: InputMaybe<HomepageCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  finalDate: Scalars['Date'];
  initialDate: Scalars['Date'];
  quantityOfStudents?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CurrentCourseDateCreateManyInlineInput = {
  /** Connect multiple existing CurrentCourseDate documents */
  connect?: InputMaybe<Array<CurrentCourseDateWhereUniqueInput>>;
  /** Create and connect multiple existing CurrentCourseDate documents */
  create?: InputMaybe<Array<CurrentCourseDateCreateInput>>;
};

export type CurrentCourseDateCreateOneInlineInput = {
  /** Connect one existing CurrentCourseDate document */
  connect?: InputMaybe<CurrentCourseDateWhereUniqueInput>;
  /** Create and connect one CurrentCourseDate document */
  create?: InputMaybe<CurrentCourseDateCreateInput>;
};

/** An edge in a connection. */
export type CurrentCourseDateEdge = {
  __typename?: 'CurrentCourseDateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CurrentCourseDate;
};

/** Identifies documents */
export type CurrentCourseDateManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrentCourseDateWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrentCourseDateWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrentCourseDateWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  finalDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  finalDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  finalDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  finalDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  finalDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  finalDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  finalDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  finalDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  initialDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  initialDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  initialDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  initialDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  initialDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  initialDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  initialDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  initialDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantityOfStudents?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantityOfStudents_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantityOfStudents_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantityOfStudents_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantityOfStudents_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantityOfStudents_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantityOfStudents_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantityOfStudents_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CurrentCourseDateOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FinalDateAsc = 'finalDate_ASC',
  FinalDateDesc = 'finalDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InitialDateAsc = 'initialDate_ASC',
  InitialDateDesc = 'initialDate_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuantityOfStudentsAsc = 'quantityOfStudents_ASC',
  QuantityOfStudentsDesc = 'quantityOfStudents_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CurrentCourseDateUpdateInput = {
  cl3q77aih80a301xi5p4y9nl1?: InputMaybe<HomepageUpdateManyInlineInput>;
  finalDate?: InputMaybe<Scalars['Date']>;
  initialDate?: InputMaybe<Scalars['Date']>;
  quantityOfStudents?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CurrentCourseDateUpdateManyInlineInput = {
  /** Connect multiple existing CurrentCourseDate documents */
  connect?: InputMaybe<Array<CurrentCourseDateConnectInput>>;
  /** Create and connect multiple CurrentCourseDate documents */
  create?: InputMaybe<Array<CurrentCourseDateCreateInput>>;
  /** Delete multiple CurrentCourseDate documents */
  delete?: InputMaybe<Array<CurrentCourseDateWhereUniqueInput>>;
  /** Disconnect multiple CurrentCourseDate documents */
  disconnect?: InputMaybe<Array<CurrentCourseDateWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CurrentCourseDate documents */
  set?: InputMaybe<Array<CurrentCourseDateWhereUniqueInput>>;
  /** Update multiple CurrentCourseDate documents */
  update?: InputMaybe<Array<CurrentCourseDateUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CurrentCourseDate documents */
  upsert?: InputMaybe<Array<CurrentCourseDateUpsertWithNestedWhereUniqueInput>>;
};

export type CurrentCourseDateUpdateManyInput = {
  finalDate?: InputMaybe<Scalars['Date']>;
  initialDate?: InputMaybe<Scalars['Date']>;
  quantityOfStudents?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CurrentCourseDateUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CurrentCourseDateUpdateManyInput;
  /** Document search */
  where: CurrentCourseDateWhereInput;
};

export type CurrentCourseDateUpdateOneInlineInput = {
  /** Connect existing CurrentCourseDate document */
  connect?: InputMaybe<CurrentCourseDateWhereUniqueInput>;
  /** Create and connect one CurrentCourseDate document */
  create?: InputMaybe<CurrentCourseDateCreateInput>;
  /** Delete currently connected CurrentCourseDate document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CurrentCourseDate document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CurrentCourseDate document */
  update?: InputMaybe<CurrentCourseDateUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CurrentCourseDate document */
  upsert?: InputMaybe<CurrentCourseDateUpsertWithNestedWhereUniqueInput>;
};

export type CurrentCourseDateUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CurrentCourseDateUpdateInput;
  /** Unique document search */
  where: CurrentCourseDateWhereUniqueInput;
};

export type CurrentCourseDateUpsertInput = {
  /** Create document if it didn't exist */
  create: CurrentCourseDateCreateInput;
  /** Update document if it exists */
  update: CurrentCourseDateUpdateInput;
};

export type CurrentCourseDateUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CurrentCourseDateUpsertInput;
  /** Unique document search */
  where: CurrentCourseDateWhereUniqueInput;
};

/** Identifies documents */
export type CurrentCourseDateWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrentCourseDateWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrentCourseDateWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrentCourseDateWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  finalDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  finalDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  finalDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  finalDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  finalDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  finalDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  finalDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  finalDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  initialDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  initialDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  initialDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  initialDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  initialDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  initialDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  initialDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  initialDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantityOfStudents?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantityOfStudents_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantityOfStudents_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantityOfStudents_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantityOfStudents_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantityOfStudents_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantityOfStudents_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantityOfStudents_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References CurrentCourseDate record uniquely */
export type CurrentCourseDateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Homepage = Node & {
  __typename?: 'Homepage';
  courseClassPlataform?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  currentCourseDate?: Maybe<CurrentCourseDate>;
  /** Get the document in other stages */
  documentInStages: Array<Homepage>;
  /** List of Homepage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Display a message if is possible to subscribe at the course */
  possibleSubscriptions?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slogan?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  subscriptionDate?: Maybe<SubscriptionDate>;
  teachers: Array<Teacher>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  valuePerMonth: Scalars['Int'];
};


export type HomepageCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type HomepageCurrentCourseDateArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type HomepageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type HomepageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type HomepagePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type HomepageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type HomepageSubscriptionDateArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type HomepageTeachersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherWhereInput>;
};


export type HomepageUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type HomepageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomepageWhereUniqueInput;
};

/** A connection to a list of items. */
export type HomepageConnection = {
  __typename?: 'HomepageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomepageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HomepageCreateInput = {
  courseClassPlataform?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currentCourseDate?: InputMaybe<CurrentCourseDateCreateOneInlineInput>;
  possibleSubscriptions?: InputMaybe<Scalars['Boolean']>;
  slogan?: InputMaybe<Scalars['String']>;
  subscriptionDate?: InputMaybe<SubscriptionDateCreateOneInlineInput>;
  teachers?: InputMaybe<TeacherCreateManyInlineInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  valuePerMonth: Scalars['Int'];
};

export type HomepageCreateManyInlineInput = {
  /** Connect multiple existing Homepage documents */
  connect?: InputMaybe<Array<HomepageWhereUniqueInput>>;
  /** Create and connect multiple existing Homepage documents */
  create?: InputMaybe<Array<HomepageCreateInput>>;
};

export type HomepageCreateOneInlineInput = {
  /** Connect one existing Homepage document */
  connect?: InputMaybe<HomepageWhereUniqueInput>;
  /** Create and connect one Homepage document */
  create?: InputMaybe<HomepageCreateInput>;
};

/** An edge in a connection. */
export type HomepageEdge = {
  __typename?: 'HomepageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Homepage;
};

/** Identifies documents */
export type HomepageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomepageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomepageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomepageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  courseClassPlataform?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  courseClassPlataform_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  courseClassPlataform_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  courseClassPlataform_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  courseClassPlataform_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  courseClassPlataform_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  courseClassPlataform_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  courseClassPlataform_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  courseClassPlataform_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  courseClassPlataform_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  currentCourseDate?: InputMaybe<CurrentCourseDateWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  possibleSubscriptions?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  possibleSubscriptions_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slogan?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slogan_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slogan_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slogan_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slogan_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slogan_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slogan_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slogan_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slogan_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slogan_starts_with?: InputMaybe<Scalars['String']>;
  subscriptionDate?: InputMaybe<SubscriptionDateWhereInput>;
  teachers_every?: InputMaybe<TeacherWhereInput>;
  teachers_none?: InputMaybe<TeacherWhereInput>;
  teachers_some?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  valuePerMonth?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  valuePerMonth_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  valuePerMonth_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  valuePerMonth_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  valuePerMonth_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  valuePerMonth_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  valuePerMonth_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  valuePerMonth_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum HomepageOrderByInput {
  CourseClassPlataformAsc = 'courseClassPlataform_ASC',
  CourseClassPlataformDesc = 'courseClassPlataform_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PossibleSubscriptionsAsc = 'possibleSubscriptions_ASC',
  PossibleSubscriptionsDesc = 'possibleSubscriptions_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SloganAsc = 'slogan_ASC',
  SloganDesc = 'slogan_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValuePerMonthAsc = 'valuePerMonth_ASC',
  ValuePerMonthDesc = 'valuePerMonth_DESC'
}

export type HomepageUpdateInput = {
  courseClassPlataform?: InputMaybe<Scalars['String']>;
  currentCourseDate?: InputMaybe<CurrentCourseDateUpdateOneInlineInput>;
  possibleSubscriptions?: InputMaybe<Scalars['Boolean']>;
  slogan?: InputMaybe<Scalars['String']>;
  subscriptionDate?: InputMaybe<SubscriptionDateUpdateOneInlineInput>;
  teachers?: InputMaybe<TeacherUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  valuePerMonth?: InputMaybe<Scalars['Int']>;
};

export type HomepageUpdateManyInlineInput = {
  /** Connect multiple existing Homepage documents */
  connect?: InputMaybe<Array<HomepageConnectInput>>;
  /** Create and connect multiple Homepage documents */
  create?: InputMaybe<Array<HomepageCreateInput>>;
  /** Delete multiple Homepage documents */
  delete?: InputMaybe<Array<HomepageWhereUniqueInput>>;
  /** Disconnect multiple Homepage documents */
  disconnect?: InputMaybe<Array<HomepageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Homepage documents */
  set?: InputMaybe<Array<HomepageWhereUniqueInput>>;
  /** Update multiple Homepage documents */
  update?: InputMaybe<Array<HomepageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Homepage documents */
  upsert?: InputMaybe<Array<HomepageUpsertWithNestedWhereUniqueInput>>;
};

export type HomepageUpdateManyInput = {
  courseClassPlataform?: InputMaybe<Scalars['String']>;
  possibleSubscriptions?: InputMaybe<Scalars['Boolean']>;
  slogan?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  valuePerMonth?: InputMaybe<Scalars['Int']>;
};

export type HomepageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomepageUpdateManyInput;
  /** Document search */
  where: HomepageWhereInput;
};

export type HomepageUpdateOneInlineInput = {
  /** Connect existing Homepage document */
  connect?: InputMaybe<HomepageWhereUniqueInput>;
  /** Create and connect one Homepage document */
  create?: InputMaybe<HomepageCreateInput>;
  /** Delete currently connected Homepage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Homepage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Homepage document */
  update?: InputMaybe<HomepageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Homepage document */
  upsert?: InputMaybe<HomepageUpsertWithNestedWhereUniqueInput>;
};

export type HomepageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomepageUpdateInput;
  /** Unique document search */
  where: HomepageWhereUniqueInput;
};

export type HomepageUpsertInput = {
  /** Create document if it didn't exist */
  create: HomepageCreateInput;
  /** Update document if it exists */
  update: HomepageUpdateInput;
};

export type HomepageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomepageUpsertInput;
  /** Unique document search */
  where: HomepageWhereUniqueInput;
};

/** Identifies documents */
export type HomepageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomepageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomepageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomepageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  courseClassPlataform?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  courseClassPlataform_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  courseClassPlataform_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  courseClassPlataform_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  courseClassPlataform_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  courseClassPlataform_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  courseClassPlataform_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  courseClassPlataform_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  courseClassPlataform_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  courseClassPlataform_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  currentCourseDate?: InputMaybe<CurrentCourseDateWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  possibleSubscriptions?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  possibleSubscriptions_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slogan?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slogan_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slogan_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slogan_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slogan_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slogan_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slogan_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slogan_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slogan_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slogan_starts_with?: InputMaybe<Scalars['String']>;
  subscriptionDate?: InputMaybe<SubscriptionDateWhereInput>;
  teachers_every?: InputMaybe<TeacherWhereInput>;
  teachers_none?: InputMaybe<TeacherWhereInput>;
  teachers_some?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  valuePerMonth?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  valuePerMonth_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  valuePerMonth_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  valuePerMonth_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  valuePerMonth_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  valuePerMonth_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  valuePerMonth_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  valuePerMonth_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

/** References Homepage record uniquely */
export type HomepageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one class */
  createClass?: Maybe<Class>;
  /** Create one currentCourseDate */
  createCurrentCourseDate?: Maybe<CurrentCourseDate>;
  /** Create one homepage */
  createHomepage?: Maybe<Homepage>;
  /** Create one nextUser */
  createNextUser?: Maybe<NextUser>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one subscriptionDate */
  createSubscriptionDate?: Maybe<SubscriptionDate>;
  /** Create one teacher */
  createTeacher?: Maybe<Teacher>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one class from _all_ existing stages. Returns deleted document. */
  deleteClass?: Maybe<Class>;
  /** Delete one currentCourseDate from _all_ existing stages. Returns deleted document. */
  deleteCurrentCourseDate?: Maybe<CurrentCourseDate>;
  /** Delete one homepage from _all_ existing stages. Returns deleted document. */
  deleteHomepage?: Maybe<Homepage>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Class documents
   * @deprecated Please use the new paginated many mutation (deleteManyClassesConnection)
   */
  deleteManyClasses: BatchPayload;
  /** Delete many Class documents, return deleted documents */
  deleteManyClassesConnection: ClassConnection;
  /**
   * Delete many CurrentCourseDate documents
   * @deprecated Please use the new paginated many mutation (deleteManyCurrentCourseDatesConnection)
   */
  deleteManyCurrentCourseDates: BatchPayload;
  /** Delete many CurrentCourseDate documents, return deleted documents */
  deleteManyCurrentCourseDatesConnection: CurrentCourseDateConnection;
  /**
   * Delete many Homepage documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomepagesConnection)
   */
  deleteManyHomepages: BatchPayload;
  /** Delete many Homepage documents, return deleted documents */
  deleteManyHomepagesConnection: HomepageConnection;
  /**
   * Delete many NextUser documents
   * @deprecated Please use the new paginated many mutation (deleteManyNextUsersConnection)
   */
  deleteManyNextUsers: BatchPayload;
  /** Delete many NextUser documents, return deleted documents */
  deleteManyNextUsersConnection: NextUserConnection;
  /**
   * Delete many SubscriptionDate documents
   * @deprecated Please use the new paginated many mutation (deleteManySubscriptionDatesConnection)
   */
  deleteManySubscriptionDates: BatchPayload;
  /** Delete many SubscriptionDate documents, return deleted documents */
  deleteManySubscriptionDatesConnection: SubscriptionDateConnection;
  /**
   * Delete many Teacher documents
   * @deprecated Please use the new paginated many mutation (deleteManyTeachersConnection)
   */
  deleteManyTeachers: BatchPayload;
  /** Delete many Teacher documents, return deleted documents */
  deleteManyTeachersConnection: TeacherConnection;
  /** Delete one nextUser from _all_ existing stages. Returns deleted document. */
  deleteNextUser?: Maybe<NextUser>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one subscriptionDate from _all_ existing stages. Returns deleted document. */
  deleteSubscriptionDate?: Maybe<SubscriptionDate>;
  /** Delete one teacher from _all_ existing stages. Returns deleted document. */
  deleteTeacher?: Maybe<Teacher>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one class */
  publishClass?: Maybe<Class>;
  /** Publish one currentCourseDate */
  publishCurrentCourseDate?: Maybe<CurrentCourseDate>;
  /** Publish one homepage */
  publishHomepage?: Maybe<Homepage>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Class documents
   * @deprecated Please use the new paginated many mutation (publishManyClassesConnection)
   */
  publishManyClasses: BatchPayload;
  /** Publish many Class documents */
  publishManyClassesConnection: ClassConnection;
  /**
   * Publish many CurrentCourseDate documents
   * @deprecated Please use the new paginated many mutation (publishManyCurrentCourseDatesConnection)
   */
  publishManyCurrentCourseDates: BatchPayload;
  /** Publish many CurrentCourseDate documents */
  publishManyCurrentCourseDatesConnection: CurrentCourseDateConnection;
  /**
   * Publish many Homepage documents
   * @deprecated Please use the new paginated many mutation (publishManyHomepagesConnection)
   */
  publishManyHomepages: BatchPayload;
  /** Publish many Homepage documents */
  publishManyHomepagesConnection: HomepageConnection;
  /**
   * Publish many NextUser documents
   * @deprecated Please use the new paginated many mutation (publishManyNextUsersConnection)
   */
  publishManyNextUsers: BatchPayload;
  /** Publish many NextUser documents */
  publishManyNextUsersConnection: NextUserConnection;
  /**
   * Publish many SubscriptionDate documents
   * @deprecated Please use the new paginated many mutation (publishManySubscriptionDatesConnection)
   */
  publishManySubscriptionDates: BatchPayload;
  /** Publish many SubscriptionDate documents */
  publishManySubscriptionDatesConnection: SubscriptionDateConnection;
  /**
   * Publish many Teacher documents
   * @deprecated Please use the new paginated many mutation (publishManyTeachersConnection)
   */
  publishManyTeachers: BatchPayload;
  /** Publish many Teacher documents */
  publishManyTeachersConnection: TeacherConnection;
  /** Publish one nextUser */
  publishNextUser?: Maybe<NextUser>;
  /** Publish one subscriptionDate */
  publishSubscriptionDate?: Maybe<SubscriptionDate>;
  /** Publish one teacher */
  publishTeacher?: Maybe<Teacher>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one class */
  schedulePublishClass?: Maybe<Class>;
  /** Schedule to publish one currentCourseDate */
  schedulePublishCurrentCourseDate?: Maybe<CurrentCourseDate>;
  /** Schedule to publish one homepage */
  schedulePublishHomepage?: Maybe<Homepage>;
  /** Schedule to publish one nextUser */
  schedulePublishNextUser?: Maybe<NextUser>;
  /** Schedule to publish one subscriptionDate */
  schedulePublishSubscriptionDate?: Maybe<SubscriptionDate>;
  /** Schedule to publish one teacher */
  schedulePublishTeacher?: Maybe<Teacher>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one class from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishClass?: Maybe<Class>;
  /** Unpublish one currentCourseDate from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCurrentCourseDate?: Maybe<CurrentCourseDate>;
  /** Unpublish one homepage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHomepage?: Maybe<Homepage>;
  /** Unpublish one nextUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNextUser?: Maybe<NextUser>;
  /** Unpublish one subscriptionDate from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSubscriptionDate?: Maybe<SubscriptionDate>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTeacher?: Maybe<Teacher>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one class from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishClass?: Maybe<Class>;
  /** Unpublish one currentCourseDate from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCurrentCourseDate?: Maybe<CurrentCourseDate>;
  /** Unpublish one homepage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHomepage?: Maybe<Homepage>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Class documents
   * @deprecated Please use the new paginated many mutation (unpublishManyClassesConnection)
   */
  unpublishManyClasses: BatchPayload;
  /** Find many Class documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyClassesConnection: ClassConnection;
  /**
   * Unpublish many CurrentCourseDate documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCurrentCourseDatesConnection)
   */
  unpublishManyCurrentCourseDates: BatchPayload;
  /** Find many CurrentCourseDate documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCurrentCourseDatesConnection: CurrentCourseDateConnection;
  /**
   * Unpublish many Homepage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomepagesConnection)
   */
  unpublishManyHomepages: BatchPayload;
  /** Find many Homepage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomepagesConnection: HomepageConnection;
  /**
   * Unpublish many NextUser documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNextUsersConnection)
   */
  unpublishManyNextUsers: BatchPayload;
  /** Find many NextUser documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNextUsersConnection: NextUserConnection;
  /**
   * Unpublish many SubscriptionDate documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubscriptionDatesConnection)
   */
  unpublishManySubscriptionDates: BatchPayload;
  /** Find many SubscriptionDate documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubscriptionDatesConnection: SubscriptionDateConnection;
  /**
   * Unpublish many Teacher documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTeachersConnection)
   */
  unpublishManyTeachers: BatchPayload;
  /** Find many Teacher documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTeachersConnection: TeacherConnection;
  /** Unpublish one nextUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNextUser?: Maybe<NextUser>;
  /** Unpublish one subscriptionDate from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubscriptionDate?: Maybe<SubscriptionDate>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTeacher?: Maybe<Teacher>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one class */
  updateClass?: Maybe<Class>;
  /** Update one currentCourseDate */
  updateCurrentCourseDate?: Maybe<CurrentCourseDate>;
  /** Update one homepage */
  updateHomepage?: Maybe<Homepage>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many classes
   * @deprecated Please use the new paginated many mutation (updateManyClassesConnection)
   */
  updateManyClasses: BatchPayload;
  /** Update many Class documents */
  updateManyClassesConnection: ClassConnection;
  /**
   * Update many currentCourseDates
   * @deprecated Please use the new paginated many mutation (updateManyCurrentCourseDatesConnection)
   */
  updateManyCurrentCourseDates: BatchPayload;
  /** Update many CurrentCourseDate documents */
  updateManyCurrentCourseDatesConnection: CurrentCourseDateConnection;
  /**
   * Update many homepages
   * @deprecated Please use the new paginated many mutation (updateManyHomepagesConnection)
   */
  updateManyHomepages: BatchPayload;
  /** Update many Homepage documents */
  updateManyHomepagesConnection: HomepageConnection;
  /**
   * Update many nextUsers
   * @deprecated Please use the new paginated many mutation (updateManyNextUsersConnection)
   */
  updateManyNextUsers: BatchPayload;
  /** Update many NextUser documents */
  updateManyNextUsersConnection: NextUserConnection;
  /**
   * Update many subscriptionDates
   * @deprecated Please use the new paginated many mutation (updateManySubscriptionDatesConnection)
   */
  updateManySubscriptionDates: BatchPayload;
  /** Update many SubscriptionDate documents */
  updateManySubscriptionDatesConnection: SubscriptionDateConnection;
  /**
   * Update many teachers
   * @deprecated Please use the new paginated many mutation (updateManyTeachersConnection)
   */
  updateManyTeachers: BatchPayload;
  /** Update many Teacher documents */
  updateManyTeachersConnection: TeacherConnection;
  /** Update one nextUser */
  updateNextUser?: Maybe<NextUser>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one subscriptionDate */
  updateSubscriptionDate?: Maybe<SubscriptionDate>;
  /** Update one teacher */
  updateTeacher?: Maybe<Teacher>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one class */
  upsertClass?: Maybe<Class>;
  /** Upsert one currentCourseDate */
  upsertCurrentCourseDate?: Maybe<CurrentCourseDate>;
  /** Upsert one homepage */
  upsertHomepage?: Maybe<Homepage>;
  /** Upsert one nextUser */
  upsertNextUser?: Maybe<NextUser>;
  /** Upsert one subscriptionDate */
  upsertSubscriptionDate?: Maybe<SubscriptionDate>;
  /** Upsert one teacher */
  upsertTeacher?: Maybe<Teacher>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateClassArgs = {
  data: ClassCreateInput;
};


export type MutationCreateCurrentCourseDateArgs = {
  data: CurrentCourseDateCreateInput;
};


export type MutationCreateHomepageArgs = {
  data: HomepageCreateInput;
};


export type MutationCreateNextUserArgs = {
  data: NextUserCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSubscriptionDateArgs = {
  data: SubscriptionDateCreateInput;
};


export type MutationCreateTeacherArgs = {
  data: TeacherCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteClassArgs = {
  where: ClassWhereUniqueInput;
};


export type MutationDeleteCurrentCourseDateArgs = {
  where: CurrentCourseDateWhereUniqueInput;
};


export type MutationDeleteHomepageArgs = {
  where: HomepageWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyClassesArgs = {
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationDeleteManyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationDeleteManyCurrentCourseDatesArgs = {
  where?: InputMaybe<CurrentCourseDateManyWhereInput>;
};


export type MutationDeleteManyCurrentCourseDatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrentCourseDateManyWhereInput>;
};


export type MutationDeleteManyHomepagesArgs = {
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationDeleteManyHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationDeleteManyNextUsersArgs = {
  where?: InputMaybe<NextUserManyWhereInput>;
};


export type MutationDeleteManyNextUsersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NextUserManyWhereInput>;
};


export type MutationDeleteManySubscriptionDatesArgs = {
  where?: InputMaybe<SubscriptionDateManyWhereInput>;
};


export type MutationDeleteManySubscriptionDatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionDateManyWhereInput>;
};


export type MutationDeleteManyTeachersArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationDeleteManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationDeleteNextUserArgs = {
  where: NextUserWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSubscriptionDateArgs = {
  where: SubscriptionDateWhereUniqueInput;
};


export type MutationDeleteTeacherArgs = {
  where: TeacherWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishClassArgs = {
  to?: Array<Stage>;
  where: ClassWhereUniqueInput;
};


export type MutationPublishCurrentCourseDateArgs = {
  to?: Array<Stage>;
  where: CurrentCourseDateWhereUniqueInput;
};


export type MutationPublishHomepageArgs = {
  to?: Array<Stage>;
  where: HomepageWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyClassesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationPublishManyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationPublishManyCurrentCourseDatesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CurrentCourseDateManyWhereInput>;
};


export type MutationPublishManyCurrentCourseDatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CurrentCourseDateManyWhereInput>;
};


export type MutationPublishManyHomepagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationPublishManyHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationPublishManyNextUsersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NextUserManyWhereInput>;
};


export type MutationPublishManyNextUsersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<NextUserManyWhereInput>;
};


export type MutationPublishManySubscriptionDatesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SubscriptionDateManyWhereInput>;
};


export type MutationPublishManySubscriptionDatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SubscriptionDateManyWhereInput>;
};


export type MutationPublishManyTeachersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationPublishManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationPublishNextUserArgs = {
  to?: Array<Stage>;
  where: NextUserWhereUniqueInput;
};


export type MutationPublishSubscriptionDateArgs = {
  to?: Array<Stage>;
  where: SubscriptionDateWhereUniqueInput;
};


export type MutationPublishTeacherArgs = {
  to?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishClassArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ClassWhereUniqueInput;
};


export type MutationSchedulePublishCurrentCourseDateArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CurrentCourseDateWhereUniqueInput;
};


export type MutationSchedulePublishHomepageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: HomepageWhereUniqueInput;
};


export type MutationSchedulePublishNextUserArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NextUserWhereUniqueInput;
};


export type MutationSchedulePublishSubscriptionDateArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SubscriptionDateWhereUniqueInput;
};


export type MutationSchedulePublishTeacherArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishClassArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ClassWhereUniqueInput;
};


export type MutationScheduleUnpublishCurrentCourseDateArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CurrentCourseDateWhereUniqueInput;
};


export type MutationScheduleUnpublishHomepageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: HomepageWhereUniqueInput;
};


export type MutationScheduleUnpublishNextUserArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: NextUserWhereUniqueInput;
};


export type MutationScheduleUnpublishSubscriptionDateArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: SubscriptionDateWhereUniqueInput;
};


export type MutationScheduleUnpublishTeacherArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TeacherWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishClassArgs = {
  from?: Array<Stage>;
  where: ClassWhereUniqueInput;
};


export type MutationUnpublishCurrentCourseDateArgs = {
  from?: Array<Stage>;
  where: CurrentCourseDateWhereUniqueInput;
};


export type MutationUnpublishHomepageArgs = {
  from?: Array<Stage>;
  where: HomepageWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyClassesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationUnpublishManyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationUnpublishManyCurrentCourseDatesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CurrentCourseDateManyWhereInput>;
};


export type MutationUnpublishManyCurrentCourseDatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CurrentCourseDateManyWhereInput>;
};


export type MutationUnpublishManyHomepagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationUnpublishManyHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationUnpublishManyNextUsersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NextUserManyWhereInput>;
};


export type MutationUnpublishManyNextUsersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NextUserManyWhereInput>;
};


export type MutationUnpublishManySubscriptionDatesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SubscriptionDateManyWhereInput>;
};


export type MutationUnpublishManySubscriptionDatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SubscriptionDateManyWhereInput>;
};


export type MutationUnpublishManyTeachersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUnpublishManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUnpublishNextUserArgs = {
  from?: Array<Stage>;
  where: NextUserWhereUniqueInput;
};


export type MutationUnpublishSubscriptionDateArgs = {
  from?: Array<Stage>;
  where: SubscriptionDateWhereUniqueInput;
};


export type MutationUnpublishTeacherArgs = {
  from?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateClassArgs = {
  data: ClassUpdateInput;
  where: ClassWhereUniqueInput;
};


export type MutationUpdateCurrentCourseDateArgs = {
  data: CurrentCourseDateUpdateInput;
  where: CurrentCourseDateWhereUniqueInput;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageUpdateInput;
  where: HomepageWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyClassesArgs = {
  data: ClassUpdateManyInput;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationUpdateManyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ClassUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationUpdateManyCurrentCourseDatesArgs = {
  data: CurrentCourseDateUpdateManyInput;
  where?: InputMaybe<CurrentCourseDateManyWhereInput>;
};


export type MutationUpdateManyCurrentCourseDatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CurrentCourseDateUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrentCourseDateManyWhereInput>;
};


export type MutationUpdateManyHomepagesArgs = {
  data: HomepageUpdateManyInput;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationUpdateManyHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: HomepageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationUpdateManyNextUsersArgs = {
  data: NextUserUpdateManyInput;
  where?: InputMaybe<NextUserManyWhereInput>;
};


export type MutationUpdateManyNextUsersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: NextUserUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NextUserManyWhereInput>;
};


export type MutationUpdateManySubscriptionDatesArgs = {
  data: SubscriptionDateUpdateManyInput;
  where?: InputMaybe<SubscriptionDateManyWhereInput>;
};


export type MutationUpdateManySubscriptionDatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SubscriptionDateUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionDateManyWhereInput>;
};


export type MutationUpdateManyTeachersArgs = {
  data: TeacherUpdateManyInput;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUpdateManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TeacherUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUpdateNextUserArgs = {
  data: NextUserUpdateInput;
  where: NextUserWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSubscriptionDateArgs = {
  data: SubscriptionDateUpdateInput;
  where: SubscriptionDateWhereUniqueInput;
};


export type MutationUpdateTeacherArgs = {
  data: TeacherUpdateInput;
  where: TeacherWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertClassArgs = {
  upsert: ClassUpsertInput;
  where: ClassWhereUniqueInput;
};


export type MutationUpsertCurrentCourseDateArgs = {
  upsert: CurrentCourseDateUpsertInput;
  where: CurrentCourseDateWhereUniqueInput;
};


export type MutationUpsertHomepageArgs = {
  upsert: HomepageUpsertInput;
  where: HomepageWhereUniqueInput;
};


export type MutationUpsertNextUserArgs = {
  upsert: NextUserUpsertInput;
  where: NextUserWhereUniqueInput;
};


export type MutationUpsertSubscriptionDateArgs = {
  upsert: SubscriptionDateUpsertInput;
  where: SubscriptionDateWhereUniqueInput;
};


export type MutationUpsertTeacherArgs = {
  upsert: TeacherUpsertInput;
  where: TeacherWhereUniqueInput;
};

export type NextUser = Node & {
  __typename?: 'NextUser';
  active?: Maybe<Scalars['Boolean']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<NextUser>;
  email: Scalars['String'];
  /** List of NextUser versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  surname?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NextUserCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type NextUserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type NextUserHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type NextUserPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type NextUserScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NextUserUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type NextUserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NextUserWhereUniqueInput;
};

/** A connection to a list of items. */
export type NextUserConnection = {
  __typename?: 'NextUserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NextUserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NextUserCreateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NextUserCreateManyInlineInput = {
  /** Connect multiple existing NextUser documents */
  connect?: InputMaybe<Array<NextUserWhereUniqueInput>>;
  /** Create and connect multiple existing NextUser documents */
  create?: InputMaybe<Array<NextUserCreateInput>>;
};

export type NextUserCreateOneInlineInput = {
  /** Connect one existing NextUser document */
  connect?: InputMaybe<NextUserWhereUniqueInput>;
  /** Create and connect one NextUser document */
  create?: InputMaybe<NextUserCreateInput>;
};

/** An edge in a connection. */
export type NextUserEdge = {
  __typename?: 'NextUserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: NextUser;
};

/** Identifies documents */
export type NextUserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NextUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NextUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NextUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  active_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  surname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  surname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  surname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  surname_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  surname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  surname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  surname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  surname_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  surname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  surname_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NextUserOrderByInput {
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SurnameAsc = 'surname_ASC',
  SurnameDesc = 'surname_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NextUserUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
};

export type NextUserUpdateManyInlineInput = {
  /** Connect multiple existing NextUser documents */
  connect?: InputMaybe<Array<NextUserConnectInput>>;
  /** Create and connect multiple NextUser documents */
  create?: InputMaybe<Array<NextUserCreateInput>>;
  /** Delete multiple NextUser documents */
  delete?: InputMaybe<Array<NextUserWhereUniqueInput>>;
  /** Disconnect multiple NextUser documents */
  disconnect?: InputMaybe<Array<NextUserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NextUser documents */
  set?: InputMaybe<Array<NextUserWhereUniqueInput>>;
  /** Update multiple NextUser documents */
  update?: InputMaybe<Array<NextUserUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NextUser documents */
  upsert?: InputMaybe<Array<NextUserUpsertWithNestedWhereUniqueInput>>;
};

export type NextUserUpdateManyInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
};

export type NextUserUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NextUserUpdateManyInput;
  /** Document search */
  where: NextUserWhereInput;
};

export type NextUserUpdateOneInlineInput = {
  /** Connect existing NextUser document */
  connect?: InputMaybe<NextUserWhereUniqueInput>;
  /** Create and connect one NextUser document */
  create?: InputMaybe<NextUserCreateInput>;
  /** Delete currently connected NextUser document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected NextUser document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single NextUser document */
  update?: InputMaybe<NextUserUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NextUser document */
  upsert?: InputMaybe<NextUserUpsertWithNestedWhereUniqueInput>;
};

export type NextUserUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NextUserUpdateInput;
  /** Unique document search */
  where: NextUserWhereUniqueInput;
};

export type NextUserUpsertInput = {
  /** Create document if it didn't exist */
  create: NextUserCreateInput;
  /** Update document if it exists */
  update: NextUserUpdateInput;
};

export type NextUserUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NextUserUpsertInput;
  /** Unique document search */
  where: NextUserWhereUniqueInput;
};

/** Identifies documents */
export type NextUserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NextUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NextUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NextUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  active_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  surname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  surname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  surname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  surname_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  surname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  surname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  surname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  surname_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  surname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  surname_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References NextUser record uniquely */
export type NextUserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single class */
  class?: Maybe<Class>;
  /** Retrieve document version */
  classVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple classes */
  classes: Array<Class>;
  /** Retrieve multiple classes using the Relay connection interface */
  classesConnection: ClassConnection;
  /** Retrieve a single currentCourseDate */
  currentCourseDate?: Maybe<CurrentCourseDate>;
  /** Retrieve document version */
  currentCourseDateVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple currentCourseDates */
  currentCourseDates: Array<CurrentCourseDate>;
  /** Retrieve multiple currentCourseDates using the Relay connection interface */
  currentCourseDatesConnection: CurrentCourseDateConnection;
  /** Retrieve a single homepage */
  homepage?: Maybe<Homepage>;
  /** Retrieve document version */
  homepageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple homepages */
  homepages: Array<Homepage>;
  /** Retrieve multiple homepages using the Relay connection interface */
  homepagesConnection: HomepageConnection;
  /** Retrieve a single nextUser */
  nextUser?: Maybe<NextUser>;
  /** Retrieve document version */
  nextUserVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple nextUsers */
  nextUsers: Array<NextUser>;
  /** Retrieve multiple nextUsers using the Relay connection interface */
  nextUsersConnection: NextUserConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single subscriptionDate */
  subscriptionDate?: Maybe<SubscriptionDate>;
  /** Retrieve document version */
  subscriptionDateVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple subscriptionDates */
  subscriptionDates: Array<SubscriptionDate>;
  /** Retrieve multiple subscriptionDates using the Relay connection interface */
  subscriptionDatesConnection: SubscriptionDateConnection;
  /** Retrieve a single teacher */
  teacher?: Maybe<Teacher>;
  /** Retrieve document version */
  teacherVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple teachers */
  teachers: Array<Teacher>;
  /** Retrieve multiple teachers using the Relay connection interface */
  teachersConnection: TeacherConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryClassArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ClassWhereUniqueInput;
};


export type QueryClassVersionArgs = {
  where: VersionWhereInput;
};


export type QueryClassesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ClassOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ClassWhereInput>;
};


export type QueryClassesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ClassOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ClassWhereInput>;
};


export type QueryCurrentCourseDateArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CurrentCourseDateWhereUniqueInput;
};


export type QueryCurrentCourseDateVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCurrentCourseDatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CurrentCourseDateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CurrentCourseDateWhereInput>;
};


export type QueryCurrentCourseDatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CurrentCourseDateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CurrentCourseDateWhereInput>;
};


export type QueryHomepageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HomepageWhereUniqueInput;
};


export type QueryHomepageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHomepagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomepageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HomepageWhereInput>;
};


export type QueryHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomepageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HomepageWhereInput>;
};


export type QueryNextUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NextUserWhereUniqueInput;
};


export type QueryNextUserVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNextUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NextUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NextUserWhereInput>;
};


export type QueryNextUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NextUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NextUserWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySubscriptionDateArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SubscriptionDateWhereUniqueInput;
};


export type QuerySubscriptionDateVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySubscriptionDatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscriptionDateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscriptionDateWhereInput>;
};


export type QuerySubscriptionDatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscriptionDateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscriptionDateWhereInput>;
};


export type QueryTeacherArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TeacherWhereUniqueInput;
};


export type QueryTeacherVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTeachersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Class | CurrentCourseDate | Homepage | NextUser | SubscriptionDate | Teacher;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

/** Insert here the subscriptions dates (even the course has started, please insert the next class avaliable subscription dates) */
export type SubscriptionDate = Node & {
  __typename?: 'SubscriptionDate';
  /** Inserte here the name of the class */
  class: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<SubscriptionDate>;
  finalDate: Scalars['Date'];
  /** List of SubscriptionDate versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  initialDate: Scalars['Date'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Insert here the subscriptions dates (even the course has started, please insert the next class avaliable subscription dates) */
export type SubscriptionDateCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Insert here the subscriptions dates (even the course has started, please insert the next class avaliable subscription dates) */
export type SubscriptionDateDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Insert here the subscriptions dates (even the course has started, please insert the next class avaliable subscription dates) */
export type SubscriptionDateHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Insert here the subscriptions dates (even the course has started, please insert the next class avaliable subscription dates) */
export type SubscriptionDatePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Insert here the subscriptions dates (even the course has started, please insert the next class avaliable subscription dates) */
export type SubscriptionDateScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Insert here the subscriptions dates (even the course has started, please insert the next class avaliable subscription dates) */
export type SubscriptionDateUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type SubscriptionDateConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SubscriptionDateWhereUniqueInput;
};

/** A connection to a list of items. */
export type SubscriptionDateConnection = {
  __typename?: 'SubscriptionDateConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SubscriptionDateEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SubscriptionDateCreateInput = {
  cl3q6znny7uxd01z1g95q90tq?: InputMaybe<HomepageCreateManyInlineInput>;
  class: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  finalDate: Scalars['Date'];
  initialDate: Scalars['Date'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscriptionDateCreateManyInlineInput = {
  /** Connect multiple existing SubscriptionDate documents */
  connect?: InputMaybe<Array<SubscriptionDateWhereUniqueInput>>;
  /** Create and connect multiple existing SubscriptionDate documents */
  create?: InputMaybe<Array<SubscriptionDateCreateInput>>;
};

export type SubscriptionDateCreateOneInlineInput = {
  /** Connect one existing SubscriptionDate document */
  connect?: InputMaybe<SubscriptionDateWhereUniqueInput>;
  /** Create and connect one SubscriptionDate document */
  create?: InputMaybe<SubscriptionDateCreateInput>;
};

/** An edge in a connection. */
export type SubscriptionDateEdge = {
  __typename?: 'SubscriptionDateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SubscriptionDate;
};

/** Identifies documents */
export type SubscriptionDateManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriptionDateWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriptionDateWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriptionDateWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  class_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  class_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  class_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  class_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  class_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  class_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  class_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  class_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  class_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  finalDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  finalDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  finalDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  finalDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  finalDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  finalDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  finalDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  finalDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  initialDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  initialDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  initialDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  initialDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  initialDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  initialDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  initialDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  initialDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SubscriptionDateOrderByInput {
  ClassAsc = 'class_ASC',
  ClassDesc = 'class_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FinalDateAsc = 'finalDate_ASC',
  FinalDateDesc = 'finalDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InitialDateAsc = 'initialDate_ASC',
  InitialDateDesc = 'initialDate_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SubscriptionDateUpdateInput = {
  cl3q6znny7uxd01z1g95q90tq?: InputMaybe<HomepageUpdateManyInlineInput>;
  class?: InputMaybe<Scalars['String']>;
  finalDate?: InputMaybe<Scalars['Date']>;
  initialDate?: InputMaybe<Scalars['Date']>;
};

export type SubscriptionDateUpdateManyInlineInput = {
  /** Connect multiple existing SubscriptionDate documents */
  connect?: InputMaybe<Array<SubscriptionDateConnectInput>>;
  /** Create and connect multiple SubscriptionDate documents */
  create?: InputMaybe<Array<SubscriptionDateCreateInput>>;
  /** Delete multiple SubscriptionDate documents */
  delete?: InputMaybe<Array<SubscriptionDateWhereUniqueInput>>;
  /** Disconnect multiple SubscriptionDate documents */
  disconnect?: InputMaybe<Array<SubscriptionDateWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SubscriptionDate documents */
  set?: InputMaybe<Array<SubscriptionDateWhereUniqueInput>>;
  /** Update multiple SubscriptionDate documents */
  update?: InputMaybe<Array<SubscriptionDateUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SubscriptionDate documents */
  upsert?: InputMaybe<Array<SubscriptionDateUpsertWithNestedWhereUniqueInput>>;
};

export type SubscriptionDateUpdateManyInput = {
  class?: InputMaybe<Scalars['String']>;
  finalDate?: InputMaybe<Scalars['Date']>;
  initialDate?: InputMaybe<Scalars['Date']>;
};

export type SubscriptionDateUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SubscriptionDateUpdateManyInput;
  /** Document search */
  where: SubscriptionDateWhereInput;
};

export type SubscriptionDateUpdateOneInlineInput = {
  /** Connect existing SubscriptionDate document */
  connect?: InputMaybe<SubscriptionDateWhereUniqueInput>;
  /** Create and connect one SubscriptionDate document */
  create?: InputMaybe<SubscriptionDateCreateInput>;
  /** Delete currently connected SubscriptionDate document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected SubscriptionDate document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single SubscriptionDate document */
  update?: InputMaybe<SubscriptionDateUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SubscriptionDate document */
  upsert?: InputMaybe<SubscriptionDateUpsertWithNestedWhereUniqueInput>;
};

export type SubscriptionDateUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SubscriptionDateUpdateInput;
  /** Unique document search */
  where: SubscriptionDateWhereUniqueInput;
};

export type SubscriptionDateUpsertInput = {
  /** Create document if it didn't exist */
  create: SubscriptionDateCreateInput;
  /** Update document if it exists */
  update: SubscriptionDateUpdateInput;
};

export type SubscriptionDateUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SubscriptionDateUpsertInput;
  /** Unique document search */
  where: SubscriptionDateWhereUniqueInput;
};

/** Identifies documents */
export type SubscriptionDateWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriptionDateWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriptionDateWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriptionDateWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  class_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  class_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  class_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  class_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  class_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  class_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  class_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  class_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  class_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  finalDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  finalDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  finalDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  finalDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  finalDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  finalDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  finalDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  finalDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  initialDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  initialDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  initialDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  initialDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  initialDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  initialDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  initialDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  initialDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References SubscriptionDate record uniquely */
export type SubscriptionDateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

/** Archive the information of the teacher */
export type Teacher = Node & {
  __typename?: 'Teacher';
  /** Rich text about the teacher */
  about?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Teacher>;
  facebookLink?: Maybe<Scalars['String']>;
  /** List of Teacher versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  instagramLink?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  profilePhoto?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Use this field to put your scholar formation */
  scholarExperience: Array<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Archive the information of the teacher */
export type TeacherCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Archive the information of the teacher */
export type TeacherDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Archive the information of the teacher */
export type TeacherHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Archive the information of the teacher */
export type TeacherProfilePhotoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Archive the information of the teacher */
export type TeacherPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Archive the information of the teacher */
export type TeacherScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Archive the information of the teacher */
export type TeacherUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TeacherConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TeacherWhereUniqueInput;
};

/** A connection to a list of items. */
export type TeacherConnection = {
  __typename?: 'TeacherConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TeacherEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TeacherCreateInput = {
  about?: InputMaybe<Scalars['RichTextAST']>;
  cl3p97zsr766401xk2ko7huzy?: InputMaybe<HomepageCreateManyInlineInput>;
  cl39f341p17xz01xsc9dg1q3g?: InputMaybe<ClassCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  profilePhoto?: InputMaybe<AssetCreateOneInlineInput>;
  scholarExperience?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeacherCreateManyInlineInput = {
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Create and connect multiple existing Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
};

export type TeacherCreateOneInlineInput = {
  /** Connect one existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
};

/** An edge in a connection. */
export type TeacherEdge = {
  __typename?: 'TeacherEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Teacher;
};

/** Identifies documents */
export type TeacherManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  facebookLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebookLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebookLink_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  facebookLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebookLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  facebookLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  facebookLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebookLink_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  instagramLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagramLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagramLink_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  instagramLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagramLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagramLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  instagramLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  instagramLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagramLink_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  profilePhoto?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  scholarExperience?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  scholarExperience_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  scholarExperience_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  scholarExperience_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  scholarExperience_not?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TeacherOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ScholarExperienceAsc = 'scholarExperience_ASC',
  ScholarExperienceDesc = 'scholarExperience_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TeacherUpdateInput = {
  about?: InputMaybe<Scalars['RichTextAST']>;
  cl3p97zsr766401xk2ko7huzy?: InputMaybe<HomepageUpdateManyInlineInput>;
  cl39f341p17xz01xsc9dg1q3g?: InputMaybe<ClassUpdateManyInlineInput>;
  facebookLink?: InputMaybe<Scalars['String']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  profilePhoto?: InputMaybe<AssetUpdateOneInlineInput>;
  scholarExperience?: InputMaybe<Array<Scalars['String']>>;
};

export type TeacherUpdateManyInlineInput = {
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherConnectInput>>;
  /** Create and connect multiple Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
  /** Delete multiple Teacher documents */
  delete?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Disconnect multiple Teacher documents */
  disconnect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Teacher documents */
  set?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Update multiple Teacher documents */
  update?: InputMaybe<Array<TeacherUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Teacher documents */
  upsert?: InputMaybe<Array<TeacherUpsertWithNestedWhereUniqueInput>>;
};

export type TeacherUpdateManyInput = {
  about?: InputMaybe<Scalars['RichTextAST']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  scholarExperience?: InputMaybe<Array<Scalars['String']>>;
};

export type TeacherUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TeacherUpdateManyInput;
  /** Document search */
  where: TeacherWhereInput;
};

export type TeacherUpdateOneInlineInput = {
  /** Connect existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
  /** Delete currently connected Teacher document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Teacher document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Teacher document */
  update?: InputMaybe<TeacherUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Teacher document */
  upsert?: InputMaybe<TeacherUpsertWithNestedWhereUniqueInput>;
};

export type TeacherUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TeacherUpdateInput;
  /** Unique document search */
  where: TeacherWhereUniqueInput;
};

export type TeacherUpsertInput = {
  /** Create document if it didn't exist */
  create: TeacherCreateInput;
  /** Update document if it exists */
  update: TeacherUpdateInput;
};

export type TeacherUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TeacherUpsertInput;
  /** Unique document search */
  where: TeacherWhereUniqueInput;
};

/** Identifies documents */
export type TeacherWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  facebookLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebookLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebookLink_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  facebookLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebookLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  facebookLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  facebookLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebookLink_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  instagramLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagramLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagramLink_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  instagramLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagramLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagramLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  instagramLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  instagramLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagramLink_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  profilePhoto?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  scholarExperience?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  scholarExperience_contains_all?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  scholarExperience_contains_none?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  scholarExperience_contains_some?: InputMaybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  scholarExperience_not?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Teacher record uniquely */
export type TeacherWhereUniqueInput = {
  facebookLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  instagramLink?: InputMaybe<Scalars['String']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type NewStudentMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  surname?: InputMaybe<Scalars['String']>;
}>;


export type NewStudentMutation = { __typename?: 'Mutation', createNextUser?: { __typename?: 'NextUser', name: string, surname?: string | null, email: string } | null };

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'Query', classes: Array<{ __typename?: 'Class', id: string }> };

export type CourseHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type CourseHomepageQuery = { __typename?: 'Query', homepages: Array<{ __typename?: 'Homepage', id: string, courseClassPlataform?: string | null, possibleSubscriptions?: boolean | null, title: string, slogan?: string | null, valuePerMonth: number, subscriptionDate?: { __typename?: 'SubscriptionDate', initialDate: any, finalDate: any } | null, teachers: Array<{ __typename?: 'Teacher', name: string, scholarExperience: Array<string>, about?: { __typename?: 'RichText', html: string } | null, profilePhoto?: { __typename?: 'Asset', url: string } | null }> }> };
