import React, { useState } from 'react';
import './App.css';

import { Layout, Typography } from 'antd';


import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { Products } from './Products';


const { Header, Content } = Layout;
const { Title } = Typography;

 const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
    }),
    cache: new InMemoryCache(),
  });
 };

function App() {

  const [client] = useState(createApolloClient());

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Layout style={{ height: '100vh' }}>
          <Header style={{ display: 'flex', alignItems: 'center'}}>
            <Title style={{ color: 'white', margin: 0, textAlign: 'left' }}>Inventory App</Title>
          </Header>
          <Content style={{ padding: '1em'}}>
            <Products />
          </Content>
        </Layout>
      </div>
    </ApolloProvider>
  );
}

export default App;
