import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Box, Grid, Typography, Button, Avatar, Chip, Fade
} from '@mui/material';
import {
  KeyboardArrowDown, Rocket, ChevronRight, Engineering, Code, Build
} from '@mui/icons-material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #252525 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(197, 48, 48, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 149, 156, 0.1) 0%, transparent 50%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Fade in timeout={1000}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box>
                <Typography variant="h5" color="primary" sx={{ mb: 2, fontWeight: 600 }}>
                  👋 Hello, I'm
                </Typography>
                <Typography variant="h1" sx={{ mb: 3, fontWeight: 700 }}>
                  William Hogg
                </Typography>
                <Typography variant="h4" color="text.secondary" sx={{ mb: 3, fontWeight: 400 }}>
                  Mechanical Engineering Graduate & Research Specialist
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, maxWidth: '600px' }}>
                  Specialized in additive manufacturing, biomechanical materials research, and innovative 
                  manufacturing processes. Passionate about developing solutions for medical and industrial applications.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    variant="contained" 
                    size="large" 
                    component={Link} 
                    to="/projects"
                    endIcon={<Rocket />}
                    sx={{ fontSize: '1.1rem', px: 4, py: 1.5 }}
                  >
                    View My Projects
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large" 
                    component={Link} 
                    to="/contact"
                    endIcon={<ChevronRight />}
                    sx={{ fontSize: '1.1rem', px: 4, py: 1.5 }}
                  >
                    Get In Touch
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 280,
                    height: 280,
                    mx: 'auto',
                    mb: 2,
                    background: 'linear-gradient(45deg, #c53030, #8b959c)',
                    fontSize: '4rem',
                    fontWeight: 700,
                    boxShadow: '0px 12px 40px rgba(197, 48, 48, 0.3)',
                  }}
                >
                  WH
                </Avatar>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Chip icon={<Engineering />} label="Additive Manufacturing" color="primary" variant="outlined" />
                  <Chip icon={<Code />} label="Materials Research" color="secondary" variant="outlined" />
                  <Chip icon={<Build />} label="Biomechanical Design" color="primary" variant="outlined" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '40%': { transform: 'translateX(-50%) translateY(-10px)' },
            '60%': { transform: 'translateX(-50%) translateY(-5px)' },
          },
        }}
      >
        <KeyboardArrowDown sx={{ fontSize: 40, color: 'primary.main', opacity: 0.8 }} />
      </Box>
    </Box>
  );
};

export default HeroSection;