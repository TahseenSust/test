import { useQuery } from "@apollo/client";
import Statistic from "antd/es/statistic/Statistic";
import { TOTAL_PRICE, countQuery } from "./graphql";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

export function Products(): JSX.Element {
  const { data: countData } = useQuery(countQuery); // total number of products
  const { data: totalPriceData } = useQuery(TOTAL_PRICE); // total price of all products

  return (
    <div>
      <Statistic
        title="Total products"
        value={countData?.products_aggregate?.aggregate.count}
      />
      <Statistic
        title="Total value"
        value={totalPriceData?.products_aggregate?.aggregate.sum.price}
      />
      <ProductList />
      <ProductForm />
    </div>
  );
}
