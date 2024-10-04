import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";
import web from "../assets/img/web.png";
import movil from "../assets/img/movil.png";
import bd from "../assets/img/bd.png";

// Estilos en línea
const cardTitleStyle = {
  textAlign: "center",
  fontSize: "24px",
  color: "#007bff",
  fontWeight: "bold",
  marginBottom: "10px"
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f8f9fa",
  height: "90%" // Hace que las tarjetas ocupen el 100% de la altura
};

const imageStyle = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  display: "block",
  margin: "10px auto",
  borderRadius: "50%"
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "20px",
  padding: "10px 20px",
  marginTop: "15px",
  cursor: "pointer",
  transition: "all 0.3s ease"
};

const cardFooterStyle = {
  borderTop: "1px solid #dee2e6",
  paddingTop: "15px",
  marginTop: "15px",
  textAlign: "center"
};

const containerStyle = {
  height: "100vh", // Asegura que el contenedor ocupe toda la pantalla
  display: "flex",
  alignItems: "stretch", // Alinea las tarjetas de forma uniforme
  flexDirection: "column"
};

const margenBottom = {
  marginBottom: '15px'
};

function Dashboard() {
  return (
    <>
      <div className="content" style={containerStyle}>
        <Row style={{ height: "100%" }}> {/* Asegura que el Row ocupe toda la altura */}
          {/* Tarjeta de Desarrollo Web */}
          <Col lg="4" md="6" sm="12" className="d-flex" style={{marginBottom: "30px"}}>
            <Card className="card-stats" style={cardStyle}>
              <CardBody>
                <Row>
                  <Col md="12" className="text-center">
                    <img src={web} alt="Desarrollo Web" style={imageStyle} />
                    <CardTitle style={cardTitleStyle} tag="h5">
                      Desarrollo Web
                    </CardTitle>
                    <p className="card-description">
                      Soluciones de desarrollo web optimizadas para una experiencia de usuario eficiente y moderna.
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", textAlign: "left" }}>
                      <li style={margenBottom}>Diseño responsivo</li>
                      <li style={margenBottom}>Desarrollo de aplicaciones web progresivas (PWA)</li>
                      <li style={margenBottom}>Optimización SEO y rendimiento</li>
                      <li style={margenBottom}>Integración con servicios de terceros y APIs</li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter style={cardFooterStyle}>
                <Button style={buttonStyle}>Ver más detalles</Button>
              </CardFooter>
            </Card>
          </Col>

          {/* Tarjeta de Desarrollo Móvil */}
          <Col lg="4" md="6" sm="12" className="d-flex" style={{marginBottom: "30px"}}>
            <Card className="card-stats" style={cardStyle}>
              <CardBody>
                <Row>
                  <Col md="12" className="text-center">
                    <img src={movil} alt="Desarrollo Móvil" style={imageStyle} />
                    <CardTitle style={cardTitleStyle} tag="h5">
                      Desarrollo Móvil
                    </CardTitle>
                    <p className="card-description">
                      Creación de aplicaciones móviles nativas y multiplataforma con interfaces atractivas y eficientes.
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", textAlign: "left" }}>
                      <li style={margenBottom}>Aplicaciones nativas (iOS y Android)</li>
                      <li style={margenBottom}>Aplicaciones multiplataforma (React Native, Angular)</li>
                      <li style={margenBottom}>Optimización de rendimiento móvil</li>
                      <li style={margenBottom}>Integración con funcionalidades del dispositivo</li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter style={cardFooterStyle}>
                <Button style={buttonStyle}>Ver más detalles</Button>
              </CardFooter>
            </Card>
          </Col>

          {/* Tarjeta de Bases de Datos */}
          <Col lg="4" md="6" sm="12" className="d-flex" style={{marginBottom: "30px"}}>
            <Card className="card-stats" style={cardStyle}>
              <CardBody>
                <Row>
                  <Col md="12" className="text-center">
                    <img src={bd} alt="Bases de Datos" style={imageStyle} />
                    <CardTitle style={cardTitleStyle} tag="h5">
                      Bases de Datos
                    </CardTitle>
                    <p className="card-description">
                      Soluciones completas en diseño, implementación y mantenimiento de bases de datos escalables.
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", textAlign: "left" }}>
                      <li style={margenBottom}>Diseño de bases de datos relacionales (SQL)</li>
                      <li style={margenBottom}>Gestión de bases de datos NoSQL (MongoDB, Firebase)</li>
                      <li style={margenBottom}>Optimización de consultas y rendimiento</li>
                      <li style={margenBottom}>Seguridad y respaldo de datos</li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter style={cardFooterStyle}>
                <Button style={buttonStyle}>Ver más detalles</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
