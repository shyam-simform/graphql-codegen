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

export type AddNewBlogMutationVariables = Types.Exact<{
  content: Types.Scalars['String']['input'];
  author: Types.Scalars['String']['input'];
}>;


export type AddNewBlogMutation = { __typename?: 'Mutation', addNewBlog: { __typename?: 'Blog', author: string, content: string } };


export const AddNewBlogDocument = gql`
    mutation addNewBlog($content: String!, $author: String!) {
  addNewBlog(content: $content, author: $author) {
    author
    content
  }
}
    `;
export type AddNewBlogMutationFn = Apollo.MutationFunction<AddNewBlogMutation, AddNewBlogMutationVariables>;

/**
 * __useAddNewBlogMutation__
 *
 * To run a mutation, you first call `useAddNewBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewBlogMutation, { data, loading, error }] = useAddNewBlogMutation({
 *   variables: {
 *      content: // value for 'content'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useAddNewBlogMutation(baseOptions?: Apollo.MutationHookOptions<AddNewBlogMutation, AddNewBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewBlogMutation, AddNewBlogMutationVariables>(AddNewBlogDocument, options);
      }
export type AddNewBlogMutationHookResult = ReturnType<typeof useAddNewBlogMutation>;
export type AddNewBlogMutationResult = Apollo.MutationResult<AddNewBlogMutation>;
export type AddNewBlogMutationOptions = Apollo.BaseMutationOptions<AddNewBlogMutation, AddNewBlogMutationVariables>;