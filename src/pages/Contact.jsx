import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { TextField, Button, Typography, Box, Container, Grid } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_xqyyd8h', 'template_gjboxow', formData, 's0UOw42Vf-nEqDXbs')
      .then((result) => {
        alert('Message Sent Successfully!');
      }, (error) => {
        alert('Failed to send message, please try again.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="contact-container">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Suggest a feature upgrade! Please fill out the form below to get in touch.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className="contact-form">
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth className="send-button">
          Send
        </Button>
      </Box>

      <Grid container spacing={2} className="contact-info">
        <Grid item xs={12} sm={4}>
          <LocationOn className="contact-icon" />
          <Typography variant="body1">25 Nerva Traian, Bucharest, RO</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Phone className="contact-icon" />
          <Typography variant="body1">+40 743 872 996</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Email className="contact-icon" />
          <Typography variant="body1">deacuradu@gmail.com</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact
