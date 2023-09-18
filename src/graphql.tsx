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

export const ADD_PRODUCT = gql`
  mutation ADD_PRODUCT(
    $description: String = ""
    $name: String = ""
    $price: numeric = ""
    $stock: Int = 0
  ) {
    insert_products(
      objects: {
        description: $description
        name: $name
        price: $price
        stock: $stock
      }
    ) {
      returning {
        description
        id
        name
        price
        stock
      }
    }
  }
`;
