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
      title: 'String Art Printer',
      description: 'Innovative mechanical system that creates art using a 3-way pick and place mechanism to stretch and position strings, creating intricate images and patterns through precise string placement.',
      technologies: ['Mechanical Design', 'Arduino', '3D Printing', 'Image Processing', 'Stepper Motors'],
      status: 'In Progress',
      link: '#',
      github: '#',
    },
    {
      title: 'Linear Actuator System',
      description: 'Designed and manufactured a precision linear actuator featuring a threaded lead screw and ball bearing mechanism for accurate motion control in automated systems.',
      technologies: ['Precision Manufacturing', 'CAD Design', 'Motion Control', 'CNC Machining'],
      status: 'Completed',
      link: '#',
      github: '#',
    },
    {
      title: 'Marble Display Machine',
      description: 'Interactive kinetic sculpture featuring marbles moving along precisely engineered tracks with timing mechanisms, LED matrix integration, and synchronized visual effects.',
      technologies: ['Kinetic Engineering', 'Arduino', 'LED Programming', 'Mechanical Systems', 'Timing Control'],
      status: 'In Progress',
      link: '#',
      github: '#',
    },
    {
      title: 'Biomedical Materials Lab Research',
      description: 'Development of novel testing protocols for additively manufactured biomaterials, including batch Bayesian optimization and automated analysis systems achieving 5X speed improvements.',
      technologies: ['MATLAB', 'Python', 'L-PBF', 'Fatigue Testing', 'Machine Learning'],
      status: 'In Progress',
      link: '#',
      github: '#',
    },
    {
      title: 'Ti6Al4V Fatigue Research',
      description: 'Comprehensive study on corrosion fatigue behavior of additively manufactured Ti6Al4V alloys, focusing on biomedical applications and surface treatments with published results.',
      technologies: ['Materials Testing', 'Statistical Analysis', 'SEM Microscopy', 'Research Publication'],
      status: 'Completed',
      link: '#',
      github: '#',
    },
    {
      title: 'Advanced Manufacturing Systems',
      description: 'Multiple projects including titanium SPF process optimization, ergonomic roller seam welding tools, and CNC programming for miniaturized biomedical components.',
      technologies: ['Manufacturing Analysis', 'Process Optimization', 'Ergonomic Design', 'CNC Programming'],
      status: 'Completed',
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
          Research projects and professional experience in additive manufacturing, biomechanical materials, and advanced manufacturing processes.
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