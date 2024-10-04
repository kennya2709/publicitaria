import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Contact.css"; // Asegúrate de tener este archivo CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault(); // Prevenir el envío del formulario por defecto
    const { name, email, phone, message } = formData;
    const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AMensaje: ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6181885645&text=${whatsappMessage}`; // Número predefinido
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-form-container">
      <h4 className="text-center">Contáctanos</h4>
      <Form onSubmit={handleWhatsApp}>
        <FormGroup>
          <Label for="name">Nombre:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Correo Electrónico:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Número de Teléfono:</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Mensaje:</Label>
          <Input
            type="textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button color="primary" type="submit" block>Enviar a WhatsApp</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
