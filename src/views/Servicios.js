import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import web from "../assets/img/web.png";
import movil from "../assets/img/movil.png";
import bd from "../assets/img/bd.png";

// Estilos en línea
const cardTitleStyle = {
  textAlign: "center", // Centrado
  fontSize: "24px",    // Tamaño de fuente más grande
  color: "#007bff",    // Cambia este valor por el color que prefieras
  fontWeight: "bold"   // Negrita
};

// Estilo para asegurar que las tarjetas tengan la misma altura
const cardStyle = {
  minHeight: "350px", // Altura mínima para todas las tarjetas
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

// Estilo para ajustar el tamaño de las imágenes
const imageStyle = {
  width: "100px",  // Ancho fijo
  height: "100px", // Altura fija
  objectFit: "cover", // Ajusta la imagen sin deformarla
  display: "block",  // Asegura que la imagen se muestre como bloque
  margin: "0 auto"   // Centrar la imagen
};

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" style={cardStyle}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="text-center">
                      <i />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <CardTitle style={cardTitleStyle} tag="p">Desarrollo web</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats"></div>
                <p className="card-category">- Diseño y desarrollo de sitios web </p>
                <p className="card-category">- Aplicaciones web progresivas</p>
                
                <p className="card-category">- Integración de APIs y servicios terceros</p>
                <img src={web} alt="Objetivo ByteBridge" style={imageStyle} />
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" style={cardStyle}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="text-center">
                      <i />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <CardTitle style={cardTitleStyle} tag="p">Desarrollo móvil</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats"></div>
                <p className="card-category">- Aplicaciones nativas</p>
                <p className="card-category">- Diseño de interfaces de usuario</p>
                <img src={movil} alt="Objetivo ByteBridge" style={imageStyle} />
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" style={cardStyle}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="text-center">
                      <i />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <CardTitle style={cardTitleStyle} tag="p">Base de datos</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats"></div>
                <p className="card-category">- Diseño de Base de datos</p>
                <p className="card-category">- Base de datos relacional</p>
                <p className="card-category">- Base de datos NO relacional</p>
                <img src={bd} alt="Objetivo ByteBridge" style={imageStyle} />
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
