import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 4, mt: 'auto', borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2025 William Hogg. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton 
              color="inherit" 
              href="https://github.com/williamhogg" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GitHub />
            </IconButton>
            <IconButton 
              color="inherit" 
              href="https://linkedin.com/in/williamhogg" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedIn />
            </IconButton>
            <IconButton 
              color="inherit" 
              href="mailto:WilliamWHogg@gmail.com"
              aria-label="Email Contact"
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;