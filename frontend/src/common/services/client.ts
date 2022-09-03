import {
  ApolloClient,
  createHttpLink,
  DefaultOptions,
  from,
  InMemoryCache,
  ServerError,
} from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';

import HttpStatusCode from './constants/httpStatusCode';

// FIXME: not integrate with out react app
//FIXME: missing env injection
export const END_POINT = process.env.APP_GRAPHQL_ENDPOINT || 'http://strapi:1337/graphql';

const httpLink = createHttpLink({
  uri: END_POINT,
});

const logoutLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors) {
    console.error(graphQLErrors[0]);
    if (graphQLErrors[0].extensions) {
      switch (graphQLErrors[0].extensions?.code) {
        case 'GRAPHQL_VALIDATION_FAILED':
          //alert('GRAPHQL_VALIDATION_FAILED');
          break;
        case 'INTERNAL_SERVER_ERROR':
          //alert('Invalid email or password');
          break;
        case 'UNAUTHENICATED':
          //TODO: need to implement refresh token
          //alert('UNAUTHENICATED');
          //window.location.replace('/login');
          break;
        default:
          console.error(
            `[GraphQL error]: Message: ${graphQLErrors[0].message}, Location: ${graphQLErrors[0].locations}, Path: ${graphQLErrors[0].path}`,
          );
          break;
      }
    }
  }

  if (networkError) {
    if ((networkError as ServerError)?.statusCode === HttpStatusCode.UNAUTHORIZED)
      window.location.replace('/logout');
    else if (
      (networkError as ServerError)?.statusCode === HttpStatusCode.NOT_IMPLEMENTED
    ) {
      alert(networkError?.message);
      window.location.replace('/');
    }
  }
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  link: from([logoutLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
