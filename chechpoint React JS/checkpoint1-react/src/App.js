import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import product from "./products";
import ProductName from "./component/name";
import ProductPrice from "./component/price";
import ProductDescription from "./component/description";
import ProductImage from "./component/image";

function App() {
  // Définir le prénom
  const firstName = prompt("Enter votre nom:");

  return (
    <Container
      className="rounded text-white fs-5"
      style={{
        maxWidth: "500px",
        margin: "15px auto",
      }}
    >
      <Row className="mt-3 fs-2 fw-bolder">
        <Col>
          {/* Afficher un message avec le prénom */}
          {firstName ? (
            <p className="text-center">Hello, {firstName} !</p>
          ) : (
            <p className="text-center">Hello, là !</p>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="text-center">
          {/* Afficher une image si le prénom est fourni */}
          {firstName && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src="https://images.unsplash.com/photo-1510903117032-f1596c327647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              className="img-fluid rounded"
            />
          )}
        </Col>
      </Row>
      <Col>
        <Card className="shadow ">
          <Card.Body>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ProductName />
              <ProductPrice />
            </div>
            <ProductDescription />
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}

export default App;
