import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import mision from "../assets/img/mision.png";
import vision from "../assets/img/vision.png";
import objetivo from "../assets/img/objetivo.png";

function Dashboard() {
  // Estilos en línea
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%", // Para asegurar que todas las tarjetas tengan la misma altura
  };

  const equalCardHeightStyle = {
    minHeight: "350px", // Ajusta la altura mínima según lo que necesites
  };

  // Estilos para el título
  const cardTitleStyle = {
    textAlign: "center", // Para centrar el texto
    fontSize: "24px", // Tamaño de fuente más grande
    color: "#007bff", // Cambia este valor para usar el color que prefieras
    fontWeight: "bold", // Aumenta el peso de la fuente
  };

  return (
    <div className="content">
      <Row>
        <Col lg="4" md="6" sm="12">
          <Card style={{ ...cardStyle, ...equalCardHeightStyle }}>
            <CardBody>
              <CardTitle style={cardTitleStyle} tag="p">Misión</CardTitle>
              <p className="mision">"En ByteBridge, nuestra misión es transformar ideas en soluciones digitales innovadoras, conectando la creatividad con la tecnología para impulsar el éxito de nuestros clientes."</p>
              <img src={mision} alt="Misión ByteBridge" className="img-fluid mt-3" />
            </CardBody>
            <CardFooter>
              <div className="stats"></div>
            </CardFooter>
          </Card>
        </Col>

        <Col lg="4" md="6" sm="12">
          <Card style={{ ...cardStyle, ...equalCardHeightStyle }}>
            <CardBody>
              <CardTitle style={cardTitleStyle} tag="p">Visión</CardTitle>
              <p className="vision">"En ByteBridge, visualizamos un futuro donde la tecnología y la creatividad se entrelazan para empoderar a las empresas y a las personas."</p>
              <img src={vision} alt="Visión ByteBridge" className="img-fluid mt-3" />
            </CardBody>
            <CardFooter>
              <div className="stats"></div>
            </CardFooter>
          </Card>
        </Col>

        <Col lg="4" md="6" sm="12">
          <Card style={{ ...cardStyle, ...equalCardHeightStyle }}>
            <CardBody>
              <CardTitle style={cardTitleStyle} tag="p">Objetivo</CardTitle>
              <p className="objetivo">"El objetivo de ByteBridge es proporcionar soluciones de desarrollo web y móvil de alta calidad que superen las expectativas de nuestros clientes."</p>
              <img src={objetivo} alt="Objetivo ByteBridge" className="img-fluid mt-3" />
            </CardBody>
            <CardFooter>
              <div className="stats"></div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
