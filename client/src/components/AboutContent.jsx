import React from 'react';
import {
  Container, Box, Grid, Typography, Paper, Card, Chip, Fade
} from '@mui/material';
import {
  Engineering, Code, Build, School
} from '@mui/icons-material';

const SkillsSection = () => {
  const skills = [
    { category: 'CAD & Design', items: ['SolidWorks', 'Fusion 360', 'AutoCAD', 'KeyShot'], icon: <Engineering /> },
    { category: 'Programming', items: ['Python', 'MATLAB', 'C++', 'JavaScript'], icon: <Code /> },
    { category: 'Manufacturing', items: ['3D Printing', 'CNC Machining', 'Welding', 'Assembly'], icon: <Build /> },
    { category: 'Analysis', items: ['ANSYS', 'SolidWorks Simulation', 'CFD', 'FEA'], icon: <School /> },
  ];

  return (
    <Grid container spacing={3}>
      {skills.map((skillGroup, idx) => (
        <Grid item xs={12} sm={6} key={idx}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ color: 'primary.main', mr: 1 }}>
                {skillGroup.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {skillGroup.category}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skillGroup.items.map((skill, skillIdx) => (
                <Chip
                  key={skillIdx}
                  label={skill}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const Timeline = () => {
  const timeline = [
    { year: '2024', title: 'Senior Year Projects', description: 'Leading capstone project in autonomous robotics' },
    { year: '2023', title: 'Internship at TechCorp', description: 'Developed automated testing systems' },
    { year: '2022', title: 'Research Assistant', description: 'Contributed to renewable energy research' },
    { year: '2021', title: 'Started Engineering', description: 'Began studies at Washington State University' },
  ];

  return (
    <Grid container spacing={3}>
      {timeline.map((item, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Fade in timeout={1000 + idx * 200}>
            <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                {item.year}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Card>
          </Fade>
        </Grid>
      ))}
    </Grid>
  );
};

const AboutContent = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          About Me
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Passionate mechanical engineering student dedicated to innovation and sustainable design
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Introduction */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%', background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
              Hello, I'm Will! 👋
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              I'm currently pursuing my degree in Mechanical Engineering at Washington State University, 
              with a passion for robotics, automation, and sustainable design solutions. My journey combines 
              academic excellence with hands-on experience in cutting-edge engineering projects.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              When I'm not designing mechanical systems or coding control algorithms, you'll find me 
              exploring the outdoors, capturing moments through photography, or tinkering with new 
              technologies in my home workshop.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              I believe in the power of engineering to solve real-world problems and create a more 
              sustainable future for everyone.
            </Typography>
          </Paper>
        </Grid>

        {/* Skills */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            Technical Skills
          </Typography>
          <SkillsSection />
        </Grid>

        {/* Timeline */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
            My Journey
          </Typography>
          <Timeline />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutContent;