import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cpu = {
  __typename: 'Cpu';
  Name: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CpuEntity = {
  __typename: 'CpuEntity';
  attributes?: Maybe<Cpu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CpuEntityResponse = {
  __typename: 'CpuEntityResponse';
  data?: Maybe<CpuEntity>;
};

export type CpuEntityResponseCollection = {
  __typename: 'CpuEntityResponseCollection';
  data: Array<CpuEntity>;
  meta: ResponseCollectionMeta;
};

export type CpuFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CpuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CpuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CpuFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CpuInput = {
  Name?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DisplaySize = {
  __typename: 'DisplaySize';
  Size: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DisplaySizeEntity = {
  __typename: 'DisplaySizeEntity';
  attributes?: Maybe<DisplaySize>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DisplaySizeEntityResponse = {
  __typename: 'DisplaySizeEntityResponse';
  data?: Maybe<DisplaySizeEntity>;
};

export type DisplaySizeEntityResponseCollection = {
  __typename: 'DisplaySizeEntityResponseCollection';
  data: Array<DisplaySizeEntity>;
  meta: ResponseCollectionMeta;
};

export type DisplaySizeFiltersInput = {
  Size?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<DisplaySizeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<DisplaySizeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DisplaySizeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DisplaySizeInput = {
  Size?: InputMaybe<Scalars['String']['input']>;
};

export enum Enum_Order_State {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Created = 'CREATED',
  Paid = 'PAID'
}

export enum Enum_Product_Grade {
  A = 'A',
  B = 'B',
  C = 'C'
}

export enum Enum_Product_Type {
  Laptop = 'laptop',
  Monitor = 'monitor',
  Other = 'other',
  Tower = 'tower'
}

export enum Enum_Repair_Repairtype {
  Laptop = 'laptop',
  Monitor = 'monitor',
  Other = 'other',
  Tower = 'tower'
}

export type Eshop = {
  __typename: 'Eshop';
  Enabled: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EshopEntity = {
  __typename: 'EshopEntity';
  attributes?: Maybe<Eshop>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type EshopEntityResponse = {
  __typename: 'EshopEntityResponse';
  data?: Maybe<EshopEntity>;
};

export type EshopEntityResponseCollection = {
  __typename: 'EshopEntityResponseCollection';
  data: Array<EshopEntity>;
  meta: ResponseCollectionMeta;
};

export type EshopFiltersInput = {
  Enabled?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<EshopFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EshopFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EshopFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EshopInput = {
  Enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FacebookPost = {
  __typename: 'FacebookPost';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  product?: Maybe<ProductEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FacebookPostEntity = {
  __typename: 'FacebookPostEntity';
  attributes?: Maybe<FacebookPost>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FacebookPostEntityResponse = {
  __typename: 'FacebookPostEntityResponse';
  data?: Maybe<FacebookPostEntity>;
};

export type FacebookPostEntityResponseCollection = {
  __typename: 'FacebookPostEntityResponseCollection';
  data: Array<FacebookPostEntity>;
  meta: ResponseCollectionMeta;
};

export type FacebookPostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FacebookPostFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FacebookPostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FacebookPostFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FacebookPostInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Cpu | DisplaySize | Eshop | FacebookPost | Gpu | I18NLocale | Manufacturer | OperatingSystem | Order | OtherProductType | Product | Ram | RecommendedProduct | Repair | Resolution | Storage | StorageHdd | UnregisteredUser | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Warranty;

export type Gpu = {
  __typename: 'Gpu';
  GPU: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GpuEntity = {
  __typename: 'GpuEntity';
  attributes?: Maybe<Gpu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GpuEntityResponse = {
  __typename: 'GpuEntityResponse';
  data?: Maybe<GpuEntity>;
};

export type GpuEntityResponseCollection = {
  __typename: 'GpuEntityResponseCollection';
  data: Array<GpuEntity>;
  meta: ResponseCollectionMeta;
};

export type GpuFiltersInput = {
  GPU?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GpuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<GpuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GpuFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GpuInput = {
  GPU?: InputMaybe<Scalars['String']['input']>;
};

export type I18NLocale = {
  __typename: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Manufacturer = {
  __typename: 'Manufacturer';
  Name: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ManufacturerEntity = {
  __typename: 'ManufacturerEntity';
  attributes?: Maybe<Manufacturer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ManufacturerEntityResponse = {
  __typename: 'ManufacturerEntityResponse';
  data?: Maybe<ManufacturerEntity>;
};

export type ManufacturerEntityResponseCollection = {
  __typename: 'ManufacturerEntityResponseCollection';
  data: Array<ManufacturerEntity>;
  meta: ResponseCollectionMeta;
};

export type ManufacturerFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ManufacturerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ManufacturerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ManufacturerFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ManufacturerInput = {
  Name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename: 'Mutation';
  createCpu?: Maybe<CpuEntityResponse>;
  createDisplaySize?: Maybe<DisplaySizeEntityResponse>;
  createEshop?: Maybe<EshopEntityResponse>;
  createFacebookPost?: Maybe<FacebookPostEntityResponse>;
  createGpu?: Maybe<GpuEntityResponse>;
  createManufacturer?: Maybe<ManufacturerEntityResponse>;
  createOperatingSystem?: Maybe<OperatingSystemEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createOtherProductType?: Maybe<OtherProductTypeEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createRam?: Maybe<RamEntityResponse>;
  createRecommendedProduct?: Maybe<RecommendedProductEntityResponse>;
  createRepair?: Maybe<RepairEntityResponse>;
  createResolution?: Maybe<ResolutionEntityResponse>;
  createStorage?: Maybe<StorageEntityResponse>;
  createStorageHdd?: Maybe<StorageHddEntityResponse>;
  createUnregisteredUser?: Maybe<UnregisteredUserEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWarranty?: Maybe<WarrantyEntityResponse>;
  deleteCpu?: Maybe<CpuEntityResponse>;
  deleteDisplaySize?: Maybe<DisplaySizeEntityResponse>;
  deleteEshop?: Maybe<EshopEntityResponse>;
  deleteFacebookPost?: Maybe<FacebookPostEntityResponse>;
  deleteGpu?: Maybe<GpuEntityResponse>;
  deleteManufacturer?: Maybe<ManufacturerEntityResponse>;
  deleteOperatingSystem?: Maybe<OperatingSystemEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deleteOtherProductType?: Maybe<OtherProductTypeEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteRam?: Maybe<RamEntityResponse>;
  deleteRecommendedProduct?: Maybe<RecommendedProductEntityResponse>;
  deleteRepair?: Maybe<RepairEntityResponse>;
  deleteResolution?: Maybe<ResolutionEntityResponse>;
  deleteStorage?: Maybe<StorageEntityResponse>;
  deleteStorageHdd?: Maybe<StorageHddEntityResponse>;
  deleteUnregisteredUser?: Maybe<UnregisteredUserEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWarranty?: Maybe<WarrantyEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCpu?: Maybe<CpuEntityResponse>;
  updateDisplaySize?: Maybe<DisplaySizeEntityResponse>;
  updateEshop?: Maybe<EshopEntityResponse>;
  updateFacebookPost?: Maybe<FacebookPostEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGpu?: Maybe<GpuEntityResponse>;
  updateManufacturer?: Maybe<ManufacturerEntityResponse>;
  updateOperatingSystem?: Maybe<OperatingSystemEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updateOtherProductType?: Maybe<OtherProductTypeEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateRam?: Maybe<RamEntityResponse>;
  updateRecommendedProduct?: Maybe<RecommendedProductEntityResponse>;
  updateRepair?: Maybe<RepairEntityResponse>;
  updateResolution?: Maybe<ResolutionEntityResponse>;
  updateStorage?: Maybe<StorageEntityResponse>;
  updateStorageHdd?: Maybe<StorageHddEntityResponse>;
  updateUnregisteredUser?: Maybe<UnregisteredUserEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWarranty?: Maybe<WarrantyEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationCreateCpuArgs = {
  data: CpuInput;
};


export type MutationCreateDisplaySizeArgs = {
  data: DisplaySizeInput;
};


export type MutationCreateEshopArgs = {
  data: EshopInput;
};


export type MutationCreateFacebookPostArgs = {
  data: FacebookPostInput;
};


export type MutationCreateGpuArgs = {
  data: GpuInput;
};


export type MutationCreateManufacturerArgs = {
  data: ManufacturerInput;
};


export type MutationCreateOperatingSystemArgs = {
  data: OperatingSystemInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreateOtherProductTypeArgs = {
  data: OtherProductTypeInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateRamArgs = {
  data: RamInput;
};


export type MutationCreateRecommendedProductArgs = {
  data: RecommendedProductInput;
};


export type MutationCreateRepairArgs = {
  data: RepairInput;
};


export type MutationCreateResolutionArgs = {
  data: ResolutionInput;
};


export type MutationCreateStorageArgs = {
  data: StorageInput;
};


export type MutationCreateStorageHddArgs = {
  data: StorageHddInput;
};


export type MutationCreateUnregisteredUserArgs = {
  data: UnregisteredUserInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWarrantyArgs = {
  data: WarrantyInput;
};


export type MutationDeleteCpuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDisplaySizeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEshopArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFacebookPostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGpuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteManufacturerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOperatingSystemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOtherProductTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRamArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRecommendedProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRepairArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteResolutionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStorageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStorageHddArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUnregisteredUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWarrantyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateCpuArgs = {
  data: CpuInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateDisplaySizeArgs = {
  data: DisplaySizeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEshopArgs = {
  data: EshopInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFacebookPostArgs = {
  data: FacebookPostInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGpuArgs = {
  data: GpuInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateManufacturerArgs = {
  data: ManufacturerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOperatingSystemArgs = {
  data: OperatingSystemInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOtherProductTypeArgs = {
  data: OtherProductTypeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRamArgs = {
  data: RamInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRecommendedProductArgs = {
  data: RecommendedProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRepairArgs = {
  data: RepairInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateResolutionArgs = {
  data: ResolutionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateStorageArgs = {
  data: StorageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateStorageHddArgs = {
  data: StorageHddInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUnregisteredUserArgs = {
  data: UnregisteredUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWarrantyArgs = {
  data: WarrantyInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type OperatingSystem = {
  __typename: 'OperatingSystem';
  Name: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OperatingSystemEntity = {
  __typename: 'OperatingSystemEntity';
  attributes?: Maybe<OperatingSystem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type OperatingSystemEntityResponse = {
  __typename: 'OperatingSystemEntityResponse';
  data?: Maybe<OperatingSystemEntity>;
};

export type OperatingSystemEntityResponseCollection = {
  __typename: 'OperatingSystemEntityResponseCollection';
  data: Array<OperatingSystemEntity>;
  meta: ResponseCollectionMeta;
};

export type OperatingSystemFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<OperatingSystemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OperatingSystemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OperatingSystemFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OperatingSystemInput = {
  Name?: InputMaybe<Scalars['String']['input']>;
};

export type Order = {
  __typename: 'Order';
  Invoice_url?: Maybe<Scalars['String']['output']>;
  Kompservisas_id?: Maybe<Scalars['String']['output']>;
  Order_description?: Maybe<Scalars['String']['output']>;
  Shipping: Scalars['Boolean']['output'];
  State: Enum_Order_State;
  Total?: Maybe<Scalars['Int']['output']>;
  UID?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  products?: Maybe<ProductRelationResponseCollection>;
  quantity: Scalars['Int']['output'];
  unregistered_user?: Maybe<UnregisteredUserEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type OrderProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderEntity = {
  __typename: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderEntityResponse = {
  __typename: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  Invoice_url?: InputMaybe<StringFilterInput>;
  Kompservisas_id?: InputMaybe<StringFilterInput>;
  Order_description?: InputMaybe<StringFilterInput>;
  Shipping?: InputMaybe<BooleanFilterInput>;
  State?: InputMaybe<StringFilterInput>;
  Total?: InputMaybe<IntFilterInput>;
  UID?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  quantity?: InputMaybe<IntFilterInput>;
  unregistered_user?: InputMaybe<UnregisteredUserFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type OrderInput = {
  Invoice_url?: InputMaybe<Scalars['String']['input']>;
  Kompservisas_id?: InputMaybe<Scalars['String']['input']>;
  Order_description?: InputMaybe<Scalars['String']['input']>;
  Shipping?: InputMaybe<Scalars['Boolean']['input']>;
  State?: InputMaybe<Enum_Order_State>;
  Total?: InputMaybe<Scalars['Int']['input']>;
  UID?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  unregistered_user?: InputMaybe<Scalars['ID']['input']>;
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderRelationResponseCollection = {
  __typename: 'OrderRelationResponseCollection';
  data: Array<OrderEntity>;
};

export type OtherProductType = {
  __typename: 'OtherProductType';
  Type: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OtherProductTypeEntity = {
  __typename: 'OtherProductTypeEntity';
  attributes?: Maybe<OtherProductType>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type OtherProductTypeEntityResponse = {
  __typename: 'OtherProductTypeEntityResponse';
  data?: Maybe<OtherProductTypeEntity>;
};

export type OtherProductTypeEntityResponseCollection = {
  __typename: 'OtherProductTypeEntityResponseCollection';
  data: Array<OtherProductTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type OtherProductTypeFiltersInput = {
  Type?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<OtherProductTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OtherProductTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OtherProductTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OtherProductTypeInput = {
  Type?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  __typename: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Product = {
  __typename: 'Product';
  CPU?: Maybe<CpuEntityResponse>;
  Image: UploadFileRelationResponseCollection;
  Other_product_model?: Maybe<Scalars['String']['output']>;
  Price: Scalars['Int']['output'];
  Product_Description?: Maybe<Scalars['String']['output']>;
  Product_Name: Scalars['String']['output'];
  Quantity: Scalars['Int']['output'];
  Type: Enum_Product_Type;
  WebCam?: Maybe<Scalars['Boolean']['output']>;
  Wifi?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  display_size?: Maybe<DisplaySizeEntityResponse>;
  gpu?: Maybe<GpuEntityResponse>;
  grade?: Maybe<Enum_Product_Grade>;
  manufacturer?: Maybe<ManufacturerEntityResponse>;
  operating_system?: Maybe<OperatingSystemEntityResponse>;
  other_product_type?: Maybe<OtherProductTypeEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  ram?: Maybe<RamEntityResponse>;
  resolution?: Maybe<ResolutionEntityResponse>;
  slug?: Maybe<Scalars['String']['output']>;
  storage_hdd?: Maybe<StorageHddEntityResponse>;
  storage_ssd?: Maybe<StorageEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  warranty?: Maybe<WarrantyEntityResponse>;
};


export type ProductImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntity = {
  __typename: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  __typename: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  CPU?: InputMaybe<CpuFiltersInput>;
  Other_product_model?: InputMaybe<StringFilterInput>;
  Price?: InputMaybe<IntFilterInput>;
  Product_Description?: InputMaybe<StringFilterInput>;
  Product_Name?: InputMaybe<StringFilterInput>;
  Quantity?: InputMaybe<IntFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  WebCam?: InputMaybe<BooleanFilterInput>;
  Wifi?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  display_size?: InputMaybe<DisplaySizeFiltersInput>;
  gpu?: InputMaybe<GpuFiltersInput>;
  grade?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  manufacturer?: InputMaybe<ManufacturerFiltersInput>;
  not?: InputMaybe<ProductFiltersInput>;
  operating_system?: InputMaybe<OperatingSystemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  other_product_type?: InputMaybe<OtherProductTypeFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  ram?: InputMaybe<RamFiltersInput>;
  resolution?: InputMaybe<ResolutionFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  storage_hdd?: InputMaybe<StorageHddFiltersInput>;
  storage_ssd?: InputMaybe<StorageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  uuid?: InputMaybe<StringFilterInput>;
  warranty?: InputMaybe<WarrantyFiltersInput>;
};

export type ProductInput = {
  CPU?: InputMaybe<Scalars['ID']['input']>;
  Image?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  Other_product_model?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['Int']['input']>;
  Product_Description?: InputMaybe<Scalars['String']['input']>;
  Product_Name?: InputMaybe<Scalars['String']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  Type?: InputMaybe<Enum_Product_Type>;
  WebCam?: InputMaybe<Scalars['Boolean']['input']>;
  Wifi?: InputMaybe<Scalars['Boolean']['input']>;
  display_size?: InputMaybe<Scalars['ID']['input']>;
  gpu?: InputMaybe<Scalars['ID']['input']>;
  grade?: InputMaybe<Enum_Product_Grade>;
  manufacturer?: InputMaybe<Scalars['ID']['input']>;
  operating_system?: InputMaybe<Scalars['ID']['input']>;
  other_product_type?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  ram?: InputMaybe<Scalars['ID']['input']>;
  resolution?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storage_hdd?: InputMaybe<Scalars['ID']['input']>;
  storage_ssd?: InputMaybe<Scalars['ID']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  warranty?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductRelationResponseCollection = {
  __typename: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename: 'Query';
  cpu?: Maybe<CpuEntityResponse>;
  cpus?: Maybe<CpuEntityResponseCollection>;
  displaySize?: Maybe<DisplaySizeEntityResponse>;
  displaySizes?: Maybe<DisplaySizeEntityResponseCollection>;
  eshop?: Maybe<EshopEntityResponse>;
  eshops?: Maybe<EshopEntityResponseCollection>;
  facebookPost?: Maybe<FacebookPostEntityResponse>;
  facebookPosts?: Maybe<FacebookPostEntityResponseCollection>;
  findByUID?: Maybe<OrderEntityResponse>;
  gpu?: Maybe<GpuEntityResponse>;
  gpus?: Maybe<GpuEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  manufacturer?: Maybe<ManufacturerEntityResponse>;
  manufacturers?: Maybe<ManufacturerEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  operatingSystem?: Maybe<OperatingSystemEntityResponse>;
  operatingSystems?: Maybe<OperatingSystemEntityResponseCollection>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  otherProductType?: Maybe<OtherProductTypeEntityResponse>;
  otherProductTypes?: Maybe<OtherProductTypeEntityResponseCollection>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  ram?: Maybe<RamEntityResponse>;
  rams?: Maybe<RamEntityResponseCollection>;
  recommendedProduct?: Maybe<RecommendedProductEntityResponse>;
  recommendedProducts?: Maybe<RecommendedProductEntityResponseCollection>;
  repair?: Maybe<RepairEntityResponse>;
  repairs?: Maybe<RepairEntityResponseCollection>;
  resolution?: Maybe<ResolutionEntityResponse>;
  resolutions?: Maybe<ResolutionEntityResponseCollection>;
  storage?: Maybe<StorageEntityResponse>;
  storageHdd?: Maybe<StorageHddEntityResponse>;
  storageHdds?: Maybe<StorageHddEntityResponseCollection>;
  storages?: Maybe<StorageEntityResponseCollection>;
  unregisteredUser?: Maybe<UnregisteredUserEntityResponse>;
  unregisteredUsers?: Maybe<UnregisteredUserEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  warranties?: Maybe<WarrantyEntityResponseCollection>;
  warranty?: Maybe<WarrantyEntityResponse>;
};


export type QueryCpuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCpusArgs = {
  filters?: InputMaybe<CpuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDisplaySizeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDisplaySizesArgs = {
  filters?: InputMaybe<DisplaySizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEshopArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEshopsArgs = {
  filters?: InputMaybe<EshopFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFacebookPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFacebookPostsArgs = {
  filters?: InputMaybe<FacebookPostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFindByUidArgs = {
  UID?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGpuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGpusArgs = {
  filters?: InputMaybe<GpuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryManufacturerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryManufacturersArgs = {
  filters?: InputMaybe<ManufacturerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOperatingSystemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOperatingSystemsArgs = {
  filters?: InputMaybe<OperatingSystemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOtherProductTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOtherProductTypesArgs = {
  filters?: InputMaybe<OtherProductTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRamArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRamsArgs = {
  filters?: InputMaybe<RamFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRecommendedProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRecommendedProductsArgs = {
  filters?: InputMaybe<RecommendedProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRepairArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRepairsArgs = {
  filters?: InputMaybe<RepairFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryResolutionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryResolutionsArgs = {
  filters?: InputMaybe<ResolutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStorageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStorageHddArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStorageHddsArgs = {
  filters?: InputMaybe<StorageHddFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStoragesArgs = {
  filters?: InputMaybe<StorageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUnregisteredUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUnregisteredUsersArgs = {
  filters?: InputMaybe<UnregisteredUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWarrantiesArgs = {
  filters?: InputMaybe<WarrantyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWarrantyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Ram = {
  __typename: 'Ram';
  RAM: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RamEntity = {
  __typename: 'RamEntity';
  attributes?: Maybe<Ram>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RamEntityResponse = {
  __typename: 'RamEntityResponse';
  data?: Maybe<RamEntity>;
};

export type RamEntityResponseCollection = {
  __typename: 'RamEntityResponseCollection';
  data: Array<RamEntity>;
  meta: ResponseCollectionMeta;
};

export type RamFiltersInput = {
  RAM?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<RamFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RamFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RamFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RamInput = {
  RAM?: InputMaybe<Scalars['String']['input']>;
};

export type RecommendedProduct = {
  __typename: 'RecommendedProduct';
  Position: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<ProductEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RecommendedProductEntity = {
  __typename: 'RecommendedProductEntity';
  attributes?: Maybe<RecommendedProduct>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RecommendedProductEntityResponse = {
  __typename: 'RecommendedProductEntityResponse';
  data?: Maybe<RecommendedProductEntity>;
};

export type RecommendedProductEntityResponseCollection = {
  __typename: 'RecommendedProductEntityResponseCollection';
  data: Array<RecommendedProductEntity>;
  meta: ResponseCollectionMeta;
};

export type RecommendedProductFiltersInput = {
  Position?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<RecommendedProductFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RecommendedProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RecommendedProductFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RecommendedProductInput = {
  Position?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
};

export type Repair = {
  __typename: 'Repair';
  Description: Scalars['String']['output'];
  Price: Scalars['Int']['output'];
  RepairType: Enum_Repair_Repairtype;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RepairEntity = {
  __typename: 'RepairEntity';
  attributes?: Maybe<Repair>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RepairEntityResponse = {
  __typename: 'RepairEntityResponse';
  data?: Maybe<RepairEntity>;
};

export type RepairEntityResponseCollection = {
  __typename: 'RepairEntityResponseCollection';
  data: Array<RepairEntity>;
  meta: ResponseCollectionMeta;
};

export type RepairFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Price?: InputMaybe<IntFilterInput>;
  RepairType?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<RepairFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RepairFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RepairFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RepairInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['Int']['input']>;
  RepairType?: InputMaybe<Enum_Repair_Repairtype>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Resolution = {
  __typename: 'Resolution';
  Resolution: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ResolutionEntity = {
  __typename: 'ResolutionEntity';
  attributes?: Maybe<Resolution>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ResolutionEntityResponse = {
  __typename: 'ResolutionEntityResponse';
  data?: Maybe<ResolutionEntity>;
};

export type ResolutionEntityResponseCollection = {
  __typename: 'ResolutionEntityResponseCollection';
  data: Array<ResolutionEntity>;
  meta: ResponseCollectionMeta;
};

export type ResolutionFiltersInput = {
  Resolution?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ResolutionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ResolutionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ResolutionFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ResolutionInput = {
  Resolution?: InputMaybe<Scalars['String']['input']>;
};

export type ResponseCollectionMeta = {
  __typename: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Storage = {
  __typename: 'Storage';
  Size: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StorageEntity = {
  __typename: 'StorageEntity';
  attributes?: Maybe<Storage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type StorageEntityResponse = {
  __typename: 'StorageEntityResponse';
  data?: Maybe<StorageEntity>;
};

export type StorageEntityResponseCollection = {
  __typename: 'StorageEntityResponseCollection';
  data: Array<StorageEntity>;
  meta: ResponseCollectionMeta;
};

export type StorageFiltersInput = {
  Size?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<StorageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<StorageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StorageFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StorageHdd = {
  __typename: 'StorageHdd';
  Size: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StorageHddEntity = {
  __typename: 'StorageHddEntity';
  attributes?: Maybe<StorageHdd>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type StorageHddEntityResponse = {
  __typename: 'StorageHddEntityResponse';
  data?: Maybe<StorageHddEntity>;
};

export type StorageHddEntityResponseCollection = {
  __typename: 'StorageHddEntityResponseCollection';
  data: Array<StorageHddEntity>;
  meta: ResponseCollectionMeta;
};

export type StorageHddFiltersInput = {
  Size?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<StorageHddFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<StorageHddFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StorageHddFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StorageHddInput = {
  Size?: InputMaybe<Scalars['String']['input']>;
};

export type StorageInput = {
  Size?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UnregisteredUser = {
  __typename: 'UnregisteredUser';
  Address: Scalars['String']['output'];
  City: Scalars['String']['output'];
  Company_id?: Maybe<Scalars['String']['output']>;
  Company_name?: Maybe<Scalars['String']['output']>;
  Email: Scalars['String']['output'];
  Last_name: Scalars['String']['output'];
  Name: Scalars['String']['output'];
  Phone: Scalars['Long']['output'];
  Postal_code: Scalars['Long']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  orders?: Maybe<OrderRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UnregisteredUserOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UnregisteredUserEntity = {
  __typename: 'UnregisteredUserEntity';
  attributes?: Maybe<UnregisteredUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UnregisteredUserEntityResponse = {
  __typename: 'UnregisteredUserEntityResponse';
  data?: Maybe<UnregisteredUserEntity>;
};

export type UnregisteredUserEntityResponseCollection = {
  __typename: 'UnregisteredUserEntityResponseCollection';
  data: Array<UnregisteredUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UnregisteredUserFiltersInput = {
  Address?: InputMaybe<StringFilterInput>;
  City?: InputMaybe<StringFilterInput>;
  Company_id?: InputMaybe<StringFilterInput>;
  Company_name?: InputMaybe<StringFilterInput>;
  Email?: InputMaybe<StringFilterInput>;
  Last_name?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Phone?: InputMaybe<LongFilterInput>;
  Postal_code?: InputMaybe<LongFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UnregisteredUserFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UnregisteredUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UnregisteredUserFiltersInput>>>;
  orders?: InputMaybe<OrderFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UnregisteredUserInput = {
  Address?: InputMaybe<Scalars['String']['input']>;
  City?: InputMaybe<Scalars['String']['input']>;
  Company_id?: InputMaybe<Scalars['String']['input']>;
  Company_name?: InputMaybe<Scalars['String']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  Last_name?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Phone?: InputMaybe<Scalars['Long']['input']>;
  Postal_code?: InputMaybe<Scalars['Long']['input']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UploadFile = {
  __typename: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename: 'UsersPermissionsUser';
  Company_id?: Maybe<Scalars['String']['output']>;
  Company_name?: Maybe<Scalars['String']['output']>;
  Last_name: Scalars['String']['output'];
  Name: Scalars['String']['output'];
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  Company_id?: InputMaybe<StringFilterInput>;
  Company_name?: InputMaybe<StringFilterInput>;
  Last_name?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  Company_id?: InputMaybe<Scalars['String']['input']>;
  Company_name?: InputMaybe<Scalars['String']['input']>;
  Last_name?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Warranty = {
  __typename: 'Warranty';
  Warranty: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WarrantyEntity = {
  __typename: 'WarrantyEntity';
  attributes?: Maybe<Warranty>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WarrantyEntityResponse = {
  __typename: 'WarrantyEntityResponse';
  data?: Maybe<WarrantyEntity>;
};

export type WarrantyEntityResponseCollection = {
  __typename: 'WarrantyEntityResponseCollection';
  data: Array<WarrantyEntity>;
  meta: ResponseCollectionMeta;
};

export type WarrantyFiltersInput = {
  Warranty?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<WarrantyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<WarrantyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WarrantyFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WarrantyInput = {
  Warranty?: InputMaybe<Scalars['String']['input']>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', attributes?: { __typename: 'Product', createdAt?: any | null, Product_Name: string, Type: Enum_Product_Type, CPU?: { __typename: 'CpuEntityResponse', data?: { __typename: 'CpuEntity', attributes?: { __typename: 'Cpu', Name: string } | null } | null } | null } | null }> } | null };

export type ManufacturersQueryVariables = Exact<{ [key: string]: never; }>;


export type ManufacturersQuery = { __typename: 'Query', manufacturers?: { __typename: 'ManufacturerEntityResponseCollection', data: Array<{ __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null }> } | null };

export type GetFilteredLaptopsQueryVariables = Exact<{
  manufacturer?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  cpu?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  storage_ssd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  display_size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
}>;


export type GetFilteredLaptopsQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', id?: string | null, attributes?: { __typename: 'Product', Product_Name: string, slug?: string | null, grade?: Enum_Product_Grade | null, Price: number, Quantity: number, ram?: { __typename: 'RamEntityResponse', data?: { __typename: 'RamEntity', attributes?: { __typename: 'Ram', RAM: string } | null } | null } | null, gpu?: { __typename: 'GpuEntityResponse', data?: { __typename: 'GpuEntity', attributes?: { __typename: 'Gpu', GPU: string } | null } | null } | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null }> }, display_size?: { __typename: 'DisplaySizeEntityResponse', data?: { __typename: 'DisplaySizeEntity', attributes?: { __typename: 'DisplaySize', Size: string } | null } | null } | null, CPU?: { __typename: 'CpuEntityResponse', data?: { __typename: 'CpuEntity', attributes?: { __typename: 'Cpu', Name: string } | null } | null } | null, storage_ssd?: { __typename: 'StorageEntityResponse', data?: { __typename: 'StorageEntity', attributes?: { __typename: 'Storage', Size: string } | null } | null } | null, storage_hdd?: { __typename: 'StorageHddEntityResponse', data?: { __typename: 'StorageHddEntity', attributes?: { __typename: 'StorageHdd', Size: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null } | null }>, meta: { __typename: 'ResponseCollectionMeta', pagination: { __typename: 'Pagination', page: number, pageCount: number, total: number } } } | null };

export type LaptopsMinimizedQueryVariables = Exact<{ [key: string]: never; }>;


export type LaptopsMinimizedQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', attributes?: { __typename: 'Product', display_size?: { __typename: 'DisplaySizeEntityResponse', data?: { __typename: 'DisplaySizeEntity', attributes?: { __typename: 'DisplaySize', Size: string } | null } | null } | null, CPU?: { __typename: 'CpuEntityResponse', data?: { __typename: 'CpuEntity', attributes?: { __typename: 'Cpu', Name: string } | null } | null } | null, storage_ssd?: { __typename: 'StorageEntityResponse', data?: { __typename: 'StorageEntity', attributes?: { __typename: 'Storage', Size: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null } | null }> } | null };

export type GetLaptopBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetLaptopBySlugQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', id?: string | null, attributes?: { __typename: 'Product', Product_Name: string, Product_Description?: string | null, slug?: string | null, grade?: Enum_Product_Grade | null, Price: number, Quantity: number, Wifi?: boolean | null, WebCam?: boolean | null, createdAt?: any | null, resolution?: { __typename: 'ResolutionEntityResponse', data?: { __typename: 'ResolutionEntity', attributes?: { __typename: 'Resolution', Resolution: string } | null } | null } | null, warranty?: { __typename: 'WarrantyEntityResponse', data?: { __typename: 'WarrantyEntity', attributes?: { __typename: 'Warranty', Warranty: string } | null } | null } | null, ram?: { __typename: 'RamEntityResponse', data?: { __typename: 'RamEntity', attributes?: { __typename: 'Ram', RAM: string } | null } | null } | null, gpu?: { __typename: 'GpuEntityResponse', data?: { __typename: 'GpuEntity', attributes?: { __typename: 'Gpu', GPU: string } | null } | null } | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string, name: string, caption?: string | null, width?: number | null, height?: number | null, hash: string, formats?: any | null, alternativeText?: string | null } | null }> }, display_size?: { __typename: 'DisplaySizeEntityResponse', data?: { __typename: 'DisplaySizeEntity', attributes?: { __typename: 'DisplaySize', Size: string } | null } | null } | null, CPU?: { __typename: 'CpuEntityResponse', data?: { __typename: 'CpuEntity', attributes?: { __typename: 'Cpu', Name: string } | null } | null } | null, storage_ssd?: { __typename: 'StorageEntityResponse', data?: { __typename: 'StorageEntity', attributes?: { __typename: 'Storage', Size: string } | null } | null } | null, storage_hdd?: { __typename: 'StorageHddEntityResponse', data?: { __typename: 'StorageHddEntity', attributes?: { __typename: 'StorageHdd', Size: string } | null } | null } | null, operating_system?: { __typename: 'OperatingSystemEntityResponse', data?: { __typename: 'OperatingSystemEntity', attributes?: { __typename: 'OperatingSystem', Name: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null } | null }> } | null };

export type GetFilteredTowersQueryVariables = Exact<{
  manufacturer?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  cpu?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
}>;


export type GetFilteredTowersQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', id?: string | null, attributes?: { __typename: 'Product', Product_Name: string, slug?: string | null, grade?: Enum_Product_Grade | null, Price: number, Quantity: number, ram?: { __typename: 'RamEntityResponse', data?: { __typename: 'RamEntity', attributes?: { __typename: 'Ram', RAM: string } | null } | null } | null, gpu?: { __typename: 'GpuEntityResponse', data?: { __typename: 'GpuEntity', attributes?: { __typename: 'Gpu', GPU: string } | null } | null } | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null }> }, display_size?: { __typename: 'DisplaySizeEntityResponse', data?: { __typename: 'DisplaySizeEntity', attributes?: { __typename: 'DisplaySize', Size: string } | null } | null } | null, CPU?: { __typename: 'CpuEntityResponse', data?: { __typename: 'CpuEntity', attributes?: { __typename: 'Cpu', Name: string } | null } | null } | null, storage_ssd?: { __typename: 'StorageEntityResponse', data?: { __typename: 'StorageEntity', attributes?: { __typename: 'Storage', Size: string } | null } | null } | null, storage_hdd?: { __typename: 'StorageHddEntityResponse', data?: { __typename: 'StorageHddEntity', attributes?: { __typename: 'StorageHdd', Size: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null } | null }>, meta: { __typename: 'ResponseCollectionMeta', pagination: { __typename: 'Pagination', page: number, pageCount: number, total: number } } } | null };

export type TowersMinimizedQueryVariables = Exact<{ [key: string]: never; }>;


export type TowersMinimizedQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', attributes?: { __typename: 'Product', CPU?: { __typename: 'CpuEntityResponse', data?: { __typename: 'CpuEntity', attributes?: { __typename: 'Cpu', Name: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null } | null }> } | null };

export type GetTowerBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetTowerBySlugQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', id?: string | null, attributes?: { __typename: 'Product', Product_Name: string, Product_Description?: string | null, slug?: string | null, grade?: Enum_Product_Grade | null, Price: number, Quantity: number, createdAt?: any | null, warranty?: { __typename: 'WarrantyEntityResponse', data?: { __typename: 'WarrantyEntity', attributes?: { __typename: 'Warranty', Warranty: string } | null } | null } | null, ram?: { __typename: 'RamEntityResponse', data?: { __typename: 'RamEntity', attributes?: { __typename: 'Ram', RAM: string } | null } | null } | null, gpu?: { __typename: 'GpuEntityResponse', data?: { __typename: 'GpuEntity', attributes?: { __typename: 'Gpu', GPU: string } | null } | null } | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string, name: string, caption?: string | null, width?: number | null, height?: number | null, hash: string, formats?: any | null, alternativeText?: string | null } | null }> }, CPU?: { __typename: 'CpuEntityResponse', data?: { __typename: 'CpuEntity', attributes?: { __typename: 'Cpu', Name: string } | null } | null } | null, storage_ssd?: { __typename: 'StorageEntityResponse', data?: { __typename: 'StorageEntity', attributes?: { __typename: 'Storage', Size: string } | null } | null } | null, storage_hdd?: { __typename: 'StorageHddEntityResponse', data?: { __typename: 'StorageHddEntity', attributes?: { __typename: 'StorageHdd', Size: string } | null } | null } | null, operating_system?: { __typename: 'OperatingSystemEntityResponse', data?: { __typename: 'OperatingSystemEntity', attributes?: { __typename: 'OperatingSystem', Name: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null } | null }> } | null };

export type MonitorsQueryVariables = Exact<{ [key: string]: never; }>;


export type MonitorsQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', id?: string | null, attributes?: { __typename: 'Product', Product_Description?: string | null, Product_Name: string, slug?: string | null, grade?: Enum_Product_Grade | null, Price: number, Quantity: number, createdAt?: any | null, resolution?: { __typename: 'ResolutionEntityResponse', data?: { __typename: 'ResolutionEntity', attributes?: { __typename: 'Resolution', Resolution: string } | null } | null } | null, warranty?: { __typename: 'WarrantyEntityResponse', data?: { __typename: 'WarrantyEntity', attributes?: { __typename: 'Warranty', Warranty: string } | null } | null } | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string, name: string, caption?: string | null, width?: number | null, height?: number | null, hash: string, formats?: any | null, alternativeText?: string | null } | null }> }, display_size?: { __typename: 'DisplaySizeEntityResponse', data?: { __typename: 'DisplaySizeEntity', attributes?: { __typename: 'DisplaySize', Size: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null } | null }> } | null };

export type GetMonitorsBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetMonitorsBySlugQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', id?: string | null, attributes?: { __typename: 'Product', Product_Name: string, Product_Description?: string | null, slug?: string | null, grade?: Enum_Product_Grade | null, Price: number, Quantity: number, createdAt?: any | null, resolution?: { __typename: 'ResolutionEntityResponse', data?: { __typename: 'ResolutionEntity', attributes?: { __typename: 'Resolution', Resolution: string } | null } | null } | null, warranty?: { __typename: 'WarrantyEntityResponse', data?: { __typename: 'WarrantyEntity', attributes?: { __typename: 'Warranty', Warranty: string } | null } | null } | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string, name: string, caption?: string | null, width?: number | null, height?: number | null, hash: string, formats?: any | null, alternativeText?: string | null } | null }> }, display_size?: { __typename: 'DisplaySizeEntityResponse', data?: { __typename: 'DisplaySizeEntity', attributes?: { __typename: 'DisplaySize', Size: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null } | null }> } | null };

export type OtherProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type OtherProductsQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', id?: string | null, attributes?: { __typename: 'Product', Product_Name: string, Product_Description?: string | null, Other_product_model?: string | null, slug?: string | null, grade?: Enum_Product_Grade | null, Price: number, Quantity: number, createdAt?: any | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string, name: string, caption?: string | null, width?: number | null, height?: number | null, hash: string, formats?: any | null, alternativeText?: string | null } | null }> }, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null, other_product_type?: { __typename: 'OtherProductTypeEntityResponse', data?: { __typename: 'OtherProductTypeEntity', attributes?: { __typename: 'OtherProductType', Type: string } | null } | null } | null, warranty?: { __typename: 'WarrantyEntityResponse', data?: { __typename: 'WarrantyEntity', attributes?: { __typename: 'Warranty', Warranty: string } | null } | null } | null } | null }> } | null };

export type GetOtherProductsBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetOtherProductsBySlugQuery = { __typename: 'Query', products?: { __typename: 'ProductEntityResponseCollection', data: Array<{ __typename: 'ProductEntity', id?: string | null, attributes?: { __typename: 'Product', Product_Name: string, Product_Description?: string | null, Other_product_model?: string | null, slug?: string | null, grade?: Enum_Product_Grade | null, Price: number, Quantity: number, createdAt?: any | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string, name: string, caption?: string | null, width?: number | null, height?: number | null, hash: string, formats?: any | null, alternativeText?: string | null } | null }> }, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null, other_product_type?: { __typename: 'OtherProductTypeEntityResponse', data?: { __typename: 'OtherProductTypeEntity', attributes?: { __typename: 'OtherProductType', Type: string } | null } | null } | null, warranty?: { __typename: 'WarrantyEntityResponse', data?: { __typename: 'WarrantyEntity', attributes?: { __typename: 'Warranty', Warranty: string } | null } | null } | null } | null }> } | null };

export type GetRecommendedProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecommendedProductsQuery = { __typename: 'Query', recommendedProducts?: { __typename: 'RecommendedProductEntityResponseCollection', data: Array<{ __typename: 'RecommendedProductEntity', id?: string | null, attributes?: { __typename: 'RecommendedProduct', Position: number, product?: { __typename: 'ProductEntityResponse', data?: { __typename: 'ProductEntity', id?: string | null, attributes?: { __typename: 'Product', Product_Name: string, Type: Enum_Product_Type, Price: number, Quantity: number, slug?: string | null, grade?: Enum_Product_Grade | null, Product_Description?: string | null, CPU?: { __typename: 'CpuEntityResponse', data?: { __typename: 'CpuEntity', attributes?: { __typename: 'Cpu', Name: string } | null } | null } | null, storage_ssd?: { __typename: 'StorageEntityResponse', data?: { __typename: 'StorageEntity', attributes?: { __typename: 'Storage', Size: string } | null } | null } | null, storage_hdd?: { __typename: 'StorageHddEntityResponse', data?: { __typename: 'StorageHddEntity', attributes?: { __typename: 'StorageHdd', Size: string } | null } | null } | null, operating_system?: { __typename: 'OperatingSystemEntityResponse', data?: { __typename: 'OperatingSystemEntity', attributes?: { __typename: 'OperatingSystem', Name: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, formats?: any | null } | null }> }, display_size?: { __typename: 'DisplaySizeEntityResponse', data?: { __typename: 'DisplaySizeEntity', attributes?: { __typename: 'DisplaySize', Size: string } | null } | null } | null } | null } | null } | null } | null }> } | null };

export type GetRepairsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRepairsListQuery = { __typename: 'Query', repairs?: { __typename: 'RepairEntityResponseCollection', data: Array<{ __typename: 'RepairEntity', id?: string | null, attributes?: { __typename: 'Repair', Description: string, RepairType: Enum_Repair_Repairtype, Price: number } | null }> } | null };

export type GetOrderbyUidQueryVariables = Exact<{
  UID: Scalars['String']['input'];
}>;


export type GetOrderbyUidQuery = { __typename: 'Query', findByUID?: { __typename: 'OrderEntityResponse', data?: { __typename: 'OrderEntity', attributes?: { __typename: 'Order', State: Enum_Order_State, Kompservisas_id?: string | null, Order_description?: string | null, products?: { __typename: 'ProductRelationResponseCollection', data: Array<{ __typename: 'ProductEntity', attributes?: { __typename: 'Product', Product_Name: string, Type: Enum_Product_Type, grade?: Enum_Product_Grade | null, Price: number, Product_Description?: string | null, Wifi?: boolean | null, WebCam?: boolean | null, CPU?: { __typename: 'CpuEntityResponse', data?: { __typename: 'CpuEntity', attributes?: { __typename: 'Cpu', Name: string } | null } | null } | null, storage_ssd?: { __typename: 'StorageEntityResponse', data?: { __typename: 'StorageEntity', attributes?: { __typename: 'Storage', Size: string } | null } | null } | null, storage_hdd?: { __typename: 'StorageHddEntityResponse', data?: { __typename: 'StorageHddEntity', attributes?: { __typename: 'StorageHdd', Size: string } | null } | null } | null, operating_system?: { __typename: 'OperatingSystemEntityResponse', data?: { __typename: 'OperatingSystemEntity', attributes?: { __typename: 'OperatingSystem', Name: string } | null } | null } | null, manufacturer?: { __typename: 'ManufacturerEntityResponse', data?: { __typename: 'ManufacturerEntity', attributes?: { __typename: 'Manufacturer', Name: string } | null } | null } | null, Image: { __typename: 'UploadFileRelationResponseCollection', data: Array<{ __typename: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, formats?: any | null, url: string } | null }> }, display_size?: { __typename: 'DisplaySizeEntityResponse', data?: { __typename: 'DisplaySizeEntity', attributes?: { __typename: 'DisplaySize', Size: string } | null } | null } | null, resolution?: { __typename: 'ResolutionEntityResponse', data?: { __typename: 'ResolutionEntity', attributes?: { __typename: 'Resolution', Resolution: string } | null } | null } | null, ram?: { __typename: 'RamEntityResponse', data?: { __typename: 'RamEntity', attributes?: { __typename: 'Ram', RAM: string } | null } | null } | null, gpu?: { __typename: 'GpuEntityResponse', data?: { __typename: 'GpuEntity', attributes?: { __typename: 'Gpu', GPU: string } | null } | null } | null, warranty?: { __typename: 'WarrantyEntityResponse', data?: { __typename: 'WarrantyEntity', attributes?: { __typename: 'Warranty', Warranty: string } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type GetEshopStateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEshopStateQuery = { __typename: 'Query', eshops?: { __typename: 'EshopEntityResponseCollection', data: Array<{ __typename: 'EshopEntity', attributes?: { __typename: 'Eshop', Enabled: boolean } | null }> } | null };


export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"CPU"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const ManufacturersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Manufacturers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manufacturers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ManufacturersQuery, ManufacturersQueryVariables>;
export const GetFilteredLaptopsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFilteredLaptops"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"manufacturer"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cpu"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storage_ssd"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"display_size"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"laptop","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"manufacturer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"manufacturer"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"CPU"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cpu"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"storage_ssd"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Size"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storage_ssd"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"display_size"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Size"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"display_size"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Quantity"}},{"kind":"Field","name":{"kind":"Name","value":"ram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RAM"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gpu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GPU"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"display_size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CPU"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_ssd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_hdd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageCount"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFilteredLaptopsQuery, GetFilteredLaptopsQueryVariables>;
export const LaptopsMinimizedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LaptopsMinimized"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"laptop","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CPU"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_ssd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LaptopsMinimizedQuery, LaptopsMinimizedQueryVariables>;
export const GetLaptopBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLaptopBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"laptop","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"Product_Description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Quantity"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Resolution"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"warranty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Warranty"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RAM"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gpu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GPU"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Wifi"}},{"kind":"Field","name":{"kind":"Name","value":"WebCam"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"display_size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CPU"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_ssd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_hdd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"operating_system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLaptopBySlugQuery, GetLaptopBySlugQueryVariables>;
export const GetFilteredTowersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFilteredTowers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"manufacturer"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cpu"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"tower","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"manufacturer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"manufacturer"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"CPU"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cpu"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Quantity"}},{"kind":"Field","name":{"kind":"Name","value":"ram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RAM"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gpu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GPU"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"display_size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CPU"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_ssd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_hdd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageCount"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFilteredTowersQuery, GetFilteredTowersQueryVariables>;
export const TowersMinimizedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TowersMinimized"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"tower","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CPU"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TowersMinimizedQuery, TowersMinimizedQueryVariables>;
export const GetTowerBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTowerBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"tower","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"Product_Description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Quantity"}},{"kind":"Field","name":{"kind":"Name","value":"warranty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Warranty"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RAM"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gpu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GPU"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"CPU"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_ssd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_hdd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"operating_system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTowerBySlugQuery, GetTowerBySlugQueryVariables>;
export const MonitorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Monitors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"monitor","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Description"}},{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Quantity"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Resolution"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"warranty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Warranty"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"display_size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MonitorsQuery, MonitorsQueryVariables>;
export const GetMonitorsBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMonitorsBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"monitor","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"Product_Description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Quantity"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Resolution"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"warranty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Warranty"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"display_size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMonitorsBySlugQuery, GetMonitorsBySlugQueryVariables>;
export const OtherProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OtherProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"other","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"Product_Description"}},{"kind":"Field","name":{"kind":"Name","value":"Other_product_model"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Quantity"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"other_product_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"warranty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Warranty"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OtherProductsQuery, OtherProductsQueryVariables>;
export const GetOtherProductsBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOtherProductsBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"other","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"Product_Description"}},{"kind":"Field","name":{"kind":"Name","value":"Other_product_model"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Quantity"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"other_product_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"warranty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Warranty"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOtherProductsBySlugQuery, GetOtherProductsBySlugQueryVariables>;
export const GetRecommendedProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecommendedProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recommendedProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Position"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Quantity"}},{"kind":"Field","name":{"kind":"Name","value":"CPU"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_ssd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_hdd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"operating_system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"display_size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Product_Description"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRecommendedProductsQuery, GetRecommendedProductsQueryVariables>;
export const GetRepairsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRepairsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repairs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"RepairType"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRepairsListQuery, GetRepairsListQueryVariables>;
export const GetOrderbyUidDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderbyUID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"UID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findByUID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"UID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"UID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"State"}},{"kind":"Field","name":{"kind":"Name","value":"Kompservisas_id"}},{"kind":"Field","name":{"kind":"Name","value":"Order_description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product_Name"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"CPU"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_ssd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"storage_hdd"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"operating_system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"display_size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Product_Description"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Resolution"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RAM"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gpu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GPU"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"warranty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Warranty"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Wifi"}},{"kind":"Field","name":{"kind":"Name","value":"WebCam"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderbyUidQuery, GetOrderbyUidQueryVariables>;
export const GetEshopStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEshopState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eshops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Enabled"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEshopStateQuery, GetEshopStateQueryVariables>;