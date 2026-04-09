import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient, type Variables } from "graphql-request";
import { getGraphqlEndpoint } from "@/utils/graph";

type RequestFn = <T, V extends Variables>(document: TypedDocumentNode<T, V>, variables: V) => Promise<T>;

let _client: GraphQLClient | null = null;

function getClient(): GraphQLClient {
  if (!_client) {
    _client = new GraphQLClient(getGraphqlEndpoint());
  }
  return _client;
}

/**
 * graphql-request v7 `VariablesAndRequestHeadersArgs` is a complex conditional; our operations
 * always pass a variables object (possibly `{}` for no-arg queries).
 */
export function graphqlRequest<TResult, V extends Variables = Variables>(
  document: TypedDocumentNode<TResult, V>,
  variables?: V
): Promise<TResult> {
  const client = getClient();
  const vars = (variables ?? {}) as V;
  return (client.request as RequestFn)(document, vars);
}
