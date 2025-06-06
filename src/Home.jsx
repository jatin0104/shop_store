import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import productsData from './products.json';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const grouped = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Product Categories</h2>
      {Object.keys(grouped).map((category) => (
        <div key={category} className="mb-5">
          <h4>{category}</h4>
          <Row>
            {grouped[category].map((product) => (
              <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Home;
