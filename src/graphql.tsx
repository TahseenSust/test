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

export const GET_PRODUCTS = gql`
  query GET_ALL_PRODUCT {
    products {
      id
      description
      name
      price
      stock
    }
  }
`;
