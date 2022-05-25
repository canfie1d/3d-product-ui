import { gql } from 'graphql-request';

export const NAV_LINK_QUERY = gql`
  {
    repository(owner: "assembleinc", name: "documentation") {
      object(expression: "main:") {
        ... on Tree {
          entries {
            path
            name
          }
        }
      }
    }
  }
`;

export const POST_ID_QUERY = gql`
  query ($folder: String!) {
    repository(owner: "assembleinc", name: "documentation") {
      object(expression: $folder) {
        ... on Tree {
          entries {
            path
            name
          }
        }
      }
    }
  }
`;

export const GET_POST_DATA_QUERY = gql`
  query ($file: String!) {
    repository(owner: "assembleinc", name: "documentation") {
      object(expression: $file) {
        ... on Blob {
          text
        }
      }
    }
  }
`;

export const GET_SECTIONS_QUERY = gql`
  query ($folder: String!) {
    repository(owner: "assembleinc", name: "documentation") {
      object(expression: $folder) {
        ... on Tree {
          entries {
            path
            name
          }
        }
      }
    }
  }
`;
