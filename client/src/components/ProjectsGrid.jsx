import React, { useState } from 'react';
import {
  Container, Box, Grid, Typography, Card, CardContent, CardActions, 
  Button, Chip, Fade, IconButton, CardMedia, Collapse, Divider
} from '@mui/material';
import {
  Engineering, GitHub, ExpandMore, ExpandLess, PhotoLibrary, Launch
} from '@mui/icons-material';
import theme from '../theme';
import projectsData from '../data/projects.json';
import ImageSlideshow from './ImageSlideshow';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [slideshowOpen, setSlideshowOpen] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'primary';
      case 'Design Phase': return 'warning';
      case 'Research': return 'info';
      case 'Prototype': return 'secondary';
      case 'Testing': return 'warning';
      case 'Planning': return 'info';
      case 'Published': return 'success';
      default: return 'default';
    }
  };

  // Get the thumbnail image (first image in the array)
  const getThumbnailImage = () => {
    if (!project.images || project.images.length === 0) return null;
    try {
      return require(`../assets/projects/${project.folder}/${project.images[0]}`);
    } catch (error) {
      console.warn(`Image not found: ${project.folder}/${project.images[0]}`);
      return null;
    }
  };

  const thumbnailImage = getThumbnailImage();

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleOpenSlideshow = (e) => {
    e.stopPropagation();
    setSlideshowOpen(true);
  };

  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Fade in timeout={800 + index * 200}>
          <Card 
            sx={{ 
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                zIndex: 1,
              }
            }}
            onClick={(e) => {
              // Only expand if clicking on the card itself, not buttons
              if (e.target === e.currentTarget || e.target.closest('.card-content')) {
                handleToggleExpand();
              }
            }}
          >
            {/* Image Section */}
            <Box sx={{ position: 'relative' }}>
              {thumbnailImage ? (
                <CardMedia
                  component="img"
                  height="200"
                  image={thumbnailImage}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
              ) : (
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
                </Box>
              )}
              
              {/* Status chip */}
              <Chip 
                label={project.status}
                color={getStatusColor(project.status)}
                size="small"
                sx={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}
              />
              
              {/* Image gallery indicator */}
              {project.images && project.images.length > 1 && (
                <IconButton
                  onClick={handleOpenSlideshow}
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    },
                  }}
                  size="small"
                >
                  <PhotoLibrary fontSize="small" />
                </IconButton>
              )}
            </Box>

            {/* Basic Content */}
            <CardContent sx={{ flexGrow: 1, p: 3 }} className="card-content">
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, flex: 1 }}>
                  {project.title}
                </Typography>
                <IconButton size="small" sx={{ ml: 1 }} onClick={handleToggleExpand}>
                  {expanded ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </Box>
              
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

            {/* Expandable Detailed Content */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Divider />
              <CardContent sx={{ p: 3 }}>
                {/* Detailed Description */}
                {project.detailedDescription && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                      Project Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {project.detailedDescription}
                    </Typography>
                  </Box>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                      Key Challenges
                    </Typography>
                    {project.challenges.map((challenge, idx) => (
                      <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
                        • {challenge}
                      </Typography>
                    ))}
                  </Box>
                )}

                {/* Outcomes */}
                {project.outcomes && project.outcomes.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                      Key Outcomes
                    </Typography>
                    {project.outcomes.map((outcome, idx) => (
                      <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
                        • {outcome}
                      </Typography>
                    ))}
                  </Box>
                )}

                {/* Completion Date */}
                {project.completedDate && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Completed: {new Date(project.completedDate).toLocaleDateString()}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Collapse>
            
            {/* Action Buttons */}
            <CardActions sx={{ p: 3, pt: expanded ? 0 : 3, justifyContent: 'space-between' }} onClick={(e) => e.stopPropagation()}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {project.images && project.images.length > 0 && (
                  <Button 
                    size="small" 
                    variant="outlined"
                    startIcon={<PhotoLibrary />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenSlideshow(e);
                    }}
                  >
                    View Gallery ({project.images.length})
                  </Button>
                )}
                {project.link && project.link !== '#' && (
                  <Button 
                    size="small" 
                    variant="contained"
                    endIcon={<Launch />}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </Button>
                )}
              </Box>
              {project.github && project.github !== '#' && (
                <IconButton 
                  size="small" 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'text.secondary' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitHub />
                </IconButton>
              )}
            </CardActions>
          </Card>
        </Fade>
      </Grid>

      {/* Image Slideshow Modal */}
      {slideshowOpen && (
        <ImageSlideshow
          images={project.images}
          projectTitle={project.title}
          projectFolder={project.folder}
          onClose={() => setSlideshowOpen(false)}
        />
      )}
    </>
  );
};

const ProjectsGrid = () => {
  // Get featured projects from the JSON data
  const projectList = projectsData.projects.filter(project => project.featured);

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