import { gql } from "@apollo/client";

export const countQuery = gql`
  query CountQuery {
    products_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const TOTAL_PRICE = gql`
  query TOTAL_PRICE {
    products_aggregate {
      aggregate {
        sum {
          price
        }
      }
    }
  }
`;
