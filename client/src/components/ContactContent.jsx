import React from 'react';
import {
  Container, Box, Grid, Typography, Paper, TextField, Button, IconButton, Chip
} from '@mui/material';
import {
  Email, GitHub, LinkedIn
} from '@mui/icons-material';

const ContactForm = () => {
  return (
    <Paper sx={{ p: 4, background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)' }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Send a Message
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField 
              label="First Name" 
              variant="outlined" 
              required 
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              label="Last Name" 
              variant="outlined" 
              required 
              fullWidth
            />
          </Grid>
        </Grid>
        <TextField 
          label="Email Address" 
          variant="outlined" 
          required 
          type="email" 
          fullWidth
        />
        <TextField 
          label="Subject" 
          variant="outlined" 
          required 
          fullWidth
        />
        <TextField 
          label="Message" 
          variant="outlined" 
          required 
          multiline 
          rows={5} 
          fullWidth
        />
        <Button 
          variant="contained" 
          size="large" 
          sx={{ py: 1.5, fontSize: '1.1rem' }}
          disabled
        >
          Send Message (Demo)
        </Button>
      </Box>
    </Paper>
  );
};

const ContactInfo = () => {
  const contactCards = [
    {
      icon: <Email sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
      title: 'Email Me',
      content: 'will.cary@example.com',
      action: { text: 'Send Email', href: 'mailto:will.cary@example.com' }
    }
  ];

  const socialLinks = [
    { icon: <GitHub />, href: 'https://github.com/williamhogg' },
    { icon: <LinkedIn />, href: 'https://linkedin.com/in/will-hogg' }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Email */}
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Email sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Email Me
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          WilliamWHogg@gmail.com
        </Typography>
        <Button variant="outlined" size="small" href="mailto:WilliamWHogg@gmail.com">
          Send Email
        </Button>
      </Paper>

      {/* Social Links */}
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          Connect With Me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          {socialLinks.map((social, idx) => (
            <IconButton
              key={idx}
              href={social.href}
              target="_blank"
              sx={{ 
                bgcolor: 'background.paper',
                '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-2px)' }
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Paper>

      {/* Availability */}
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Availability
        </Typography>
        <Chip 
          label="Open to Opportunities" 
          color="success" 
          sx={{ mb: 2 }}
        />
        <Typography variant="body2" color="text.secondary">
          Available for full-time opportunities in materials research, additive manufacturing, and biomedical engineering.
        </Typography>
      </Paper>
    </Box>
  );
};

const ContactContent = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Let's Connect
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <ContactForm />
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <ContactInfo />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactContent;