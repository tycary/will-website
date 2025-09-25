import React from 'react';
import {
  Container, Box, Grid, Typography, Card, CardContent, CardActions, 
  Button, Chip, Fade, IconButton
} from '@mui/material';
import {
  Engineering, Launch, GitHub
} from '@mui/icons-material';
import theme from '../theme';

const ProjectCard = ({ project, index }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'primary';
      case 'Design Phase': return 'warning';
      case 'Research': return 'info';
      case 'Prototype': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Fade in timeout={800 + index * 200}>
        <Card 
          sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            }
          }}
        >
          <Box
            sx={{
              height: 200,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}22, ${theme.palette.secondary.main}22)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Engineering sx={{ fontSize: 80, color: 'primary.main', opacity: 0.3 }} />
            <Chip 
              label={project.status}
              color={getStatusColor(project.status)}
              size="small"
              sx={{ position: 'absolute', top: 12, right: 12 }}
            />
          </Box>
          
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
              {project.description}
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: 'primary.main' }}>
                Technologies:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {project.technologies.map((tech, techIdx) => (
                  <Chip
                    key={techIdx}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: '0.75rem' }}
                  />
                ))}
              </Box>
            </Box>
          </CardContent>
          
          <CardActions sx={{ p: 3, pt: 0, justifyContent: 'space-between' }}>
            <Button 
              size="small" 
              variant="contained"
              endIcon={<Launch />}
              href={project.link}
            >
              View Project
            </Button>
            <IconButton 
              size="small" 
              href={project.github}
              sx={{ color: 'text.secondary' }}
            >
              <GitHub />
            </IconButton>
          </CardActions>
        </Card>
      </Fade>
    </Grid>
  );
};

const ProjectsGrid = () => {
  const projectList = [
    {
      title: 'Autonomous Robotic Arm',
      description: 'A 6-DOF robotic arm with computer vision capabilities, featuring custom 3D-printed components and advanced motion planning algorithms.',
      technologies: ['Arduino', 'Python', 'OpenCV', '3D Printing'],
      status: 'Completed',
      link: '#',
      github: '#',
    },
    {
      title: 'Smart Wind Turbine System',
      description: 'IoT-enabled wind turbine with real-time monitoring, featuring optimized blade design and predictive maintenance capabilities.',
      technologies: ['SolidWorks', 'IoT', 'Data Analytics', 'CFD'],
      status: 'In Progress',
      link: '#',
      github: '#',
    },
    {
      title: 'Sustainable Transport Pod',
      description: 'Electric vehicle prototype designed for urban mobility, featuring lightweight composite materials and regenerative braking.',
      technologies: ['Fusion 360', 'ANSYS', 'Composites', 'Electronics'],
      status: 'Design Phase',
      link: '#',
      github: '#',
    },
    {
      title: 'Biomechanical Prosthetic',
      description: 'Advanced prosthetic limb with myoelectric control and haptic feedback, designed for enhanced user experience.',
      technologies: ['Bioengineering', 'Electronics', 'Materials', 'UX'],
      status: 'Research',
      link: '#',
      github: '#',
    },
    {
      title: 'Manufacturing Automation',
      description: 'Automated assembly line system with quality control integration and real-time production monitoring.',
      technologies: ['PLC', 'HMI', 'Sensors', 'Database'],
      status: 'Completed',
      link: '#',
      github: '#',
    },
    {
      title: 'Energy Storage System',
      description: 'Innovative battery management system for renewable energy applications with advanced thermal management.',
      technologies: ['Battery Tech', 'Thermal Analysis', 'Control Systems'],
      status: 'Prototype',
      link: '#',
      github: '#',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Featured Projects
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
          A showcase of innovative engineering solutions, from robotics and automation to sustainable design and beyond.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsGrid;