//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
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
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getLocationsDocument: LocationsDocument;
  getLocationsList: LocationsConnection;
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetLocationsDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetLocationsListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentNode = LocationsDocument;

export type LocationsCoords = {
  __typename?: 'LocationsCoords';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type Locations = {
  __typename?: 'Locations';
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  coords?: Maybe<LocationsCoords>;
  coverImage?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type LocationsDocument = Node & Document & {
  __typename?: 'LocationsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Locations;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type LocationsConnectionEdges = {
  __typename?: 'LocationsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<LocationsDocument>;
};

export type LocationsConnection = Connection & {
  __typename?: 'LocationsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<LocationsConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updateLocationsDocument: LocationsDocument;
  createLocationsDocument: LocationsDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateLocationsDocumentArgs = {
  relativePath: Scalars['String'];
  params: LocationsMutation;
};


export type MutationCreateLocationsDocumentArgs = {
  relativePath: Scalars['String'];
  params: LocationsMutation;
};

export type DocumentMutation = {
  locations?: InputMaybe<LocationsMutation>;
};

export type LocationsCoordsMutation = {
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
};

export type LocationsMutation = {
  title?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  coords?: InputMaybe<LocationsCoordsMutation>;
  coverImage?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
};

export type LocationsPartsFragment = { __typename?: 'Locations', title?: string | null, address?: string | null, coverImage?: string | null, body?: string | null, coords?: { __typename: 'LocationsCoords', lat?: number | null, lng?: number | null } | null };

export type GetLocationsDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetLocationsDocumentQuery = { __typename?: 'Query', getLocationsDocument: { __typename?: 'LocationsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Locations', title?: string | null, address?: string | null, coverImage?: string | null, body?: string | null, coords?: { __typename: 'LocationsCoords', lat?: number | null, lng?: number | null } | null } } };

export type GetLocationsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsListQuery = { __typename?: 'Query', getLocationsList: { __typename?: 'LocationsConnection', totalCount: number, edges?: Array<{ __typename?: 'LocationsConnectionEdges', node?: { __typename?: 'LocationsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Locations', title?: string | null, address?: string | null, coverImage?: string | null, body?: string | null, coords?: { __typename: 'LocationsCoords', lat?: number | null, lng?: number | null } | null } } | null } | null> | null } };

export const LocationsPartsFragmentDoc = gql`
    fragment LocationsParts on Locations {
  title
  address
  coords {
    __typename
    lat
    lng
  }
  coverImage
  body
}
    `;
export const GetLocationsDocumentDocument = gql`
    query getLocationsDocument($relativePath: String!) {
  getLocationsDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...LocationsParts
    }
  }
}
    ${LocationsPartsFragmentDoc}`;
export const GetLocationsListDocument = gql`
    query getLocationsList {
  getLocationsList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...LocationsParts
        }
      }
    }
  }
}
    ${LocationsPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getLocationsDocument(variables: GetLocationsDocumentQueryVariables, options?: C): Promise<{data: GetLocationsDocumentQuery, variables: GetLocationsDocumentQueryVariables, query: string}> {
        return requester<{data: GetLocationsDocumentQuery, variables: GetLocationsDocumentQueryVariables, query: string}, GetLocationsDocumentQueryVariables>(GetLocationsDocumentDocument, variables, options);
      },
    getLocationsList(variables?: GetLocationsListQueryVariables, options?: C): Promise<{data: GetLocationsListQuery, variables: GetLocationsListQueryVariables, query: string}> {
        return requester<{data: GetLocationsListQuery, variables: GetLocationsListQueryVariables, query: string}, GetLocationsListQueryVariables>(GetLocationsListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { staticRequest } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  let data = {}
  try {
    data = await staticRequest({
      query: doc,
      variables: vars,
    })
  } catch (e) {
    // swallow errors related to document creation
    console.warn('Warning: There was an error when fetching data')
    console.warn(e)
  }

  return { data, query: doc, variables: vars || {} }
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)
