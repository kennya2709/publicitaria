import React, { useState, useRef } from "react";
// react plugin used to create charts
import hombre from "hombre.png";
import vid1 from "../assets/img/vid1.mp4";
import logo from "../assets/img/logo.png";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

function Dashboard() {
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef(null);

  // Función para mostrar el video y reproducirlo
  const toggleVideo = () => {
    setVideoVisible(!videoVisible);
    if (!videoVisible) {
      // Si el video se muestra, comenzará a reproducirse automáticamente
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 100); // pequeño retraso para asegurarse de que el video esté montado
    }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="text-center">
                      {/* Imagen del logo */}
                      <img src={logo} alt="Imagen de hombre" width="100%" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Bandero Insight</p>
                      <CardTitle tag="p">Sitio web y aplicación móvil</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  {/* Mostrar botón en pantallas pequeñas */}
                  <div className="d-block d-md-none">
                    <Button color="primary" onClick={toggleVideo}>
                      {videoVisible ? "Ocultar video" : "Ver video"}
                    </Button>
                  </div>
                  {/* Mostrar video solo si videoVisible es true */}
                  {videoVisible && (
                    <div className="d-block d-md-none mt-3">
                      <video
                        ref={vid1}
                        src={vid1}
                        muted
                        loop
                        controls
                        width="100%"
                      >
                        Tu navegador no soporta videos.
                      </video>
                    </div>
                  )}
                  {/* Video siempre visible en pantallas grandes */}
                  <div className="d-none d-md-block">
                    <video src={vid1} autoPlay muted loop controls width="100%">
                      Tu navegador no soporta videos.
                    </video>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
