import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: "https://a777-106-101-65-90.jp.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
