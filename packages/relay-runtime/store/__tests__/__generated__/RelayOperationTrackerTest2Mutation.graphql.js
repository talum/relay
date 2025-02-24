/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<c3efc34c87369de06fb7d8bc6a1fcf83>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type CommentDeleteInput = {|
  commentId?: ?string,
|};
export type RelayOperationTrackerTest2Mutation$variables = {|
  input?: ?CommentDeleteInput,
|};
export type RelayOperationTrackerTest2Mutation$data = {|
  +commentDelete: ?{|
    +__typename: string,
  |},
|};
export type RelayOperationTrackerTest2Mutation = {|
  response: RelayOperationTrackerTest2Mutation$data,
  variables: RelayOperationTrackerTest2Mutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CommentDeleteResponsePayload",
    "kind": "LinkedField",
    "name": "commentDelete",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayOperationTrackerTest2Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayOperationTrackerTest2Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "508bc0c312f801d0dbadea41836e7e4f",
    "id": null,
    "metadata": {},
    "name": "RelayOperationTrackerTest2Mutation",
    "operationKind": "mutation",
    "text": "mutation RelayOperationTrackerTest2Mutation(\n  $input: CommentDeleteInput\n) {\n  commentDelete(input: $input) {\n    __typename\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "e9dad29ed57988cb37c5a266d488dc06";
}

module.exports = ((node/*: any*/)/*: Mutation<
  RelayOperationTrackerTest2Mutation$variables,
  RelayOperationTrackerTest2Mutation$data,
>*/);
