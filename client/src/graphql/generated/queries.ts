import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Blog = {
  __typename?: 'Blog';
  author: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewBlog: Blog;
};


export type MutationAddNewBlogArgs = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getBlogs?: Maybe<Array<Blog>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newBlog: Blog;
};

export type BloggggsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BloggggsQuery = { __typename?: 'Query', getBlogs?: Array<{ __typename?: 'Blog', id: string }> | null };

export type GetAllBlogsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllBlogsQuery = { __typename?: 'Query', getBlogs?: Array<{ __typename?: 'Blog', id: string, content: string, author: string }> | null };


export const BloggggsDocument = gql`
    query Bloggggs {
  getBlogs {
    id
  }
}
    `;

/**
 * __useBloggggsQuery__
 *
 * To run a query within a React component, call `useBloggggsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBloggggsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBloggggsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBloggggsQuery(baseOptions?: Apollo.QueryHookOptions<Types.BloggggsQuery, Types.BloggggsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.BloggggsQuery, Types.BloggggsQueryVariables>(BloggggsDocument, options);
      }
export function useBloggggsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.BloggggsQuery, Types.BloggggsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.BloggggsQuery, Types.BloggggsQueryVariables>(BloggggsDocument, options);
        }
export type BloggggsQueryHookResult = ReturnType<typeof useBloggggsQuery>;
export type BloggggsLazyQueryHookResult = ReturnType<typeof useBloggggsLazyQuery>;
export type BloggggsQueryResult = Apollo.QueryResult<Types.BloggggsQuery, Types.BloggggsQueryVariables>;
export const GetAllBlogsDocument = gql`
    query GetAllBlogs {
  getBlogs {
    id
    content
    author
  }
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetAllBlogsQuery, Types.GetAllBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetAllBlogsQuery, Types.GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAllBlogsQuery, Types.GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetAllBlogsQuery, Types.GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<Types.GetAllBlogsQuery, Types.GetAllBlogsQueryVariables>;