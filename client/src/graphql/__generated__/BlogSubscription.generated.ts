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

export type BlogStreamSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type BlogStreamSubscription = { __typename?: 'Subscription', newBlog: { __typename?: 'Blog', content: string, id: string, author: string } };


export const BlogStreamDocument = gql`
    subscription BlogStream {
  newBlog {
    content
    id
    author
  }
}
    `;

/**
 * __useBlogStreamSubscription__
 *
 * To run a query within a React component, call `useBlogStreamSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBlogStreamSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogStreamSubscription({
 *   variables: {
 *   },
 * });
 */
export function useBlogStreamSubscription(baseOptions?: Apollo.SubscriptionHookOptions<BlogStreamSubscription, BlogStreamSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BlogStreamSubscription, BlogStreamSubscriptionVariables>(BlogStreamDocument, options);
      }
export type BlogStreamSubscriptionHookResult = ReturnType<typeof useBlogStreamSubscription>;
export type BlogStreamSubscriptionResult = Apollo.SubscriptionResult<BlogStreamSubscription>;