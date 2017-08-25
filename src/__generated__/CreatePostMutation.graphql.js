/**
 * @flow
 * @relayHash d3f871e5ea687aeeeb91af5f074024b1
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreatePostMutationVariables = {|
  input: {
    body: string;
    title: string;
    authorId?: ?string;
    author?: ?{
      email: string;
      name: string;
      commentsIds?: ?$ReadOnlyArray<string>;
      comments?: ?$ReadOnlyArray<{
        text: string;
        postId?: ?string;
        post?: ?{
          body: string;
          title: string;
          authorId?: ?string;
          commentsIds?: ?$ReadOnlyArray<string>;
        };
      }>;
      postsIds?: ?$ReadOnlyArray<string>;
      posts?: ?$ReadOnlyArray<{
        body: string;
        title: string;
        commentsIds?: ?$ReadOnlyArray<string>;
        comments?: ?$ReadOnlyArray<{
          text: string;
          authorId?: ?string;
          postId?: ?string;
        }>;
      }>;
    };
    commentsIds?: ?$ReadOnlyArray<string>;
    comments?: ?$ReadOnlyArray<{
      text: string;
      authorId?: ?string;
      author?: ?{
        email: string;
        name: string;
        commentsIds?: ?$ReadOnlyArray<string>;
        comments?: ?$ReadOnlyArray<{
          text: string;
          authorId?: ?string;
          postId?: ?string;
        }>;
        postsIds?: ?$ReadOnlyArray<string>;
        posts?: ?$ReadOnlyArray<{
          body: string;
          title: string;
          authorId?: ?string;
          commentsIds?: ?$ReadOnlyArray<string>;
        }>;
      };
    }>;
    clientMutationId: string;
  };
|};

export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +post: ?{|
      +id: string;
      +title: string;
      +body: string;
    |};
  |};
|};
*/


/*
mutation CreatePostMutation(
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    post {
      id
      title
      body
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreatePostInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePostMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreatePostInput!"
          }
        ],
        "concreteType": "CreatePostPayload",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "name": "post",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "body",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreatePostMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreatePostInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreatePostMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreatePostInput!"
          }
        ],
        "concreteType": "CreatePostPayload",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "name": "post",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "body",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreatePostMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    post {\n      id\n      title\n      body\n    }\n  }\n}\n"
};

module.exports = batch;
