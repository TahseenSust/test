import { useMutation } from "@apollo/client";
import { ADD_PRODUCT, GET_PRODUCTS, TOTAL_PRICE, countQuery } from "./graphql";
import { Form, Input, Button } from "antd";
import { useForm } from "antd/lib/form/Form";

const ProductForm = () => {
  const [addProduct] = useMutation(ADD_PRODUCT, {
    refetchQueries: [
      { query: GET_PRODUCTS },
      { query: countQuery },
      { query: TOTAL_PRICE },
    ], // Refetch queries after mutation
  });
  const [form] = useForm();

  const onFinish = async (values: any) => {
    // Calling the GraphQL mutation to add the product
    try {
      await addProduct({ variables: values });
      form.resetFields(); // Reset the form fields
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Product Name"
        rules={[{ required: true, message: "Please enter the product name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: "Please enter the price" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        name="stock"
        label="Stock"
        rules={[{ required: true, message: "Please enter the stock" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
