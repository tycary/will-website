import React from 'react';
import {
  Container, Box, Grid, Typography, Card, CardContent, Grow
} from '@mui/material';
import {
  Engineering, Rocket, Star
} from '@mui/icons-material';

const FeatureCards = () => {
  const features = [
    {
      icon: <Engineering sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />,
      title: 'Research Excellence',
      description: 'Published researcher in additive manufacturing and biomechanical materials with 4.0 GPA in graduate studies.',
      delay: 1000
    },
    {
      icon: <Rocket sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />,
      title: 'Advanced Manufacturing',
      description: 'Expert in additive manufacturing processes, materials characterization, and novel alloy development.',
      delay: 1200
    },
    {
      icon: <Star sx={{ fontSize: 60, color: 'warning.main', mb: 2 }} />,
      title: 'Problem Solving',
      description: 'Proven track record of solving complex manufacturing challenges and optimizing industrial processes.',
      delay: 1400
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Grow in timeout={feature.delay}>
              <Card 
                sx={{ 
                  height: '100%', 
                  textAlign: 'center', 
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 300,
                  maxWidth: 350,
                  mx: 'auto'
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeatureCards;