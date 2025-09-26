import React from 'react';
import {
  Container, Box, Grid, Typography, Paper, Card, Chip, Fade, Avatar
} from '@mui/material';
import {
  Engineering, Code, Build, School, Science, EmojiEvents
} from '@mui/icons-material';
import profileImage from '../assets/profile-will.png';

const SkillsSection = () => {
  const skills = [
    { category: 'Design & Simulation', items: ['SOLIDWORKS', 'MATLAB/Simulink', 'GDST', 'Fusion 360'], icon: <Engineering /> },
    { category: 'Manufacturing', items: ['3D Printing (FDM, SLA, L-PBF)', 'CNC Machining', 'Water Jet', '2D Laser'], icon: <Build /> },
    { category: 'Materials & Testing', items: ['Fatigue Testing', 'Tension/Compression', 'Hardness Testing', 'Optical/SEM Microscopy'], icon: <School /> },
    { category: 'Programming & Software', items: ['Python', 'MATLAB', 'Siemens NX', 'Meshmixer', 'C', 'Arduino'], icon: <Code /> },
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
    { year: '2026', title: 'M.S. Mechanical Engineering', description: 'Completed graduate degree at Washington State University, GPA: 4.0' },
    { year: '2025', title: 'B.S. Mechanical Engineering', description: 'Completed undergraduate degree at Washington State University, GPA: 4.0' },
    { year: '2023-25', title: 'Research Assistant', description: 'W.M. Keck Biomedical Materials Lab - Additive manufacturing research' },
    { year: '2022', title: 'Project Engineer Intern', description: 'Exotic Metals Forming Internship - Manufacturing process optimization' },
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
          Mechanical engineering graduate specializing in additive manufacturing and biomechanical materials research
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Introduction */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%', background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Avatar
                src={profileImage}
                alt="William Hogg"
                sx={{
                  width: 80,
                  height: 80,
                  mr: 3,
                  border: '3px solid',
                  borderColor: 'primary.main',
                }}
              />
              <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 600 }}>
                Hello, I'm William! 👋
              </Typography>
            </Box>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              I recently completed my M.S. in Mechanical Engineering at Washington State University with a 4.0 GPA, 
              specializing in additive manufacturing and biomechanical materials research. My work focuses on 
              characterizing and optimizing novel additively manufactured alloys for biomedical applications.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              As a Research Assistant at the W.M. Keck Biomedical Materials Lab, I've contributed to groundbreaking 
              research on Ti6Al4V alloys, developed innovative testing protocols, and published research on fatigue 
              behavior of additively manufactured materials.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              I'm passionate about bridging the gap between advanced manufacturing technologies and practical 
              applications in medical devices and engineering solutions that improve people's lives.
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

        {/* Project Highlights */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
            Key Achievements
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Engineering sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Innovative Projects
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  String Art Printer with 3-way pick and place mechanism, Marble Display Machine with LED integration, 
                  and precision Linear Actuator systems
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Science sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Research Impact
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  5X speed improvement in analysis automation, published research on Ti6Al4V fatigue behavior, 
                  and novel protocols for additive manufacturing
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <EmojiEvents sx={{ fontSize: 48, color: 'warning.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Recognition
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  VCFA Outstanding Junior in Mechanical Engineering, Barry Goldwater Scholarship Nominee, 
                  SOLIDWORKS certifications, and Eagle Scout achievement
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutContent;