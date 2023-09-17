import { gql, useQuery } from '@apollo/client';
import Statistic from 'antd/es/statistic/Statistic';
import React from 'react';

const countQuery = gql`
  query CountQuery {
    products_aggregate {
      aggregate {
        count
      }
    }
  }
`

export function Products(): JSX.Element {

  const { data } = useQuery(countQuery);

  return (
    <div>
      <Statistic title="Total products" value={data?.products_aggregate?.aggregate.count} />
    </div>
  );
}