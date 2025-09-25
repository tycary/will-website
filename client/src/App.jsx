
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, CardActions, 
  TextField, Grid, CssBaseline, ThemeProvider, IconButton, Drawer, List, ListItem, 
  ListItemText, useMediaQuery, useTheme, Avatar, Chip, Paper, Fade, Grow, Slide
} from '@mui/material';
import {
  Menu as MenuIcon, GitHub, LinkedIn, Email, Code, Build, School,
  KeyboardArrowDown, Launch, Engineering, Rocket, Star, ChevronRight
} from '@mui/icons-material';
import theme from './theme';

function HeroSection() {
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
                  Will Cary
                </Typography>
                <Typography variant="h4" color="text.secondary" sx={{ mb: 3, fontWeight: 400 }}>
                  Mechanical Engineering Student & Innovator
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, maxWidth: '600px' }}>
                  Passionate about robotics, sustainable design, and bringing innovative ideas to life through 
                  engineering excellence and creative problem-solving.
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
                  WC
                </Avatar>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Chip icon={<Engineering />} label="Robotics" color="primary" variant="outlined" />
                  <Chip icon={<Code />} label="CAD Design" color="secondary" variant="outlined" />
                  <Chip icon={<Build />} label="Prototyping" color="primary" variant="outlined" />
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
}

function Home() {
  return (
    <>
      <HeroSection />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Grow in timeout={1000}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <Engineering sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Engineering Excellence
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Combining theoretical knowledge with practical application to solve complex engineering challenges.
                </Typography>
              </Card>
            </Grow>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grow in timeout={1200}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <Rocket sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Innovation Focus
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Passionate about pushing boundaries and developing cutting-edge solutions for tomorrow's world.
                </Typography>
              </Card>
            </Grow>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grow in timeout={1400}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <Star sx={{ fontSize: 60, color: 'warning.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Quality Driven
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Committed to delivering exceptional results through attention to detail and continuous improvement.
                </Typography>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

function Projects() {
  const projectList = [
    {
      title: 'Autonomous Robotic Arm',
      description: 'A 6-DOF robotic arm with computer vision capabilities, featuring custom 3D-printed components and advanced motion planning algorithms.',
      technologies: ['Arduino', 'Python', 'OpenCV', '3D Printing'],
      image: '/api/placeholder/400/250',
      status: 'Completed',
      link: '#',
      github: '#',
    },
    {
      title: 'Smart Wind Turbine System',
      description: 'IoT-enabled wind turbine with real-time monitoring, featuring optimized blade design and predictive maintenance capabilities.',
      technologies: ['SolidWorks', 'IoT', 'Data Analytics', 'CFD'],
      image: '/api/placeholder/400/250',
      status: 'In Progress',
      link: '#',
      github: '#',
    },
    {
      title: 'Sustainable Transport Pod',
      description: 'Electric vehicle prototype designed for urban mobility, featuring lightweight composite materials and regenerative braking.',
      technologies: ['Fusion 360', 'ANSYS', 'Composites', 'Electronics'],
      image: '/api/placeholder/400/250',
      status: 'Design Phase',
      link: '#',
      github: '#',
    },
    {
      title: 'Biomechanical Prosthetic',
      description: 'Advanced prosthetic limb with myoelectric control and haptic feedback, designed for enhanced user experience.',
      technologies: ['Bioengineering', 'Electronics', 'Materials', 'UX'],
      image: '/api/placeholder/400/250',
      status: 'Research',
      link: '#',
      github: '#',
    },
    {
      title: 'Manufacturing Automation',
      description: 'Automated assembly line system with quality control integration and real-time production monitoring.',
      technologies: ['PLC', 'HMI', 'Sensors', 'Database'],
      image: '/api/placeholder/400/250',
      status: 'Completed',
      link: '#',
      github: '#',
    },
    {
      title: 'Energy Storage System',
      description: 'Innovative battery management system for renewable energy applications with advanced thermal management.',
      technologies: ['Battery Tech', 'Thermal Analysis', 'Control Systems'],
      image: '/api/placeholder/400/250',
      status: 'Prototype',
      link: '#',
      github: '#',
    },
  ];

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
          <Grid item xs={12} md={6} lg={4} key={idx}>
            <Fade in timeout={800 + idx * 200}>
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
        ))}
      </Grid>
    </Container>
  );
}

function About() {
  const skills = [
    { category: 'CAD & Design', items: ['SolidWorks', 'Fusion 360', 'AutoCAD', 'KeyShot'], icon: <Engineering /> },
    { category: 'Programming', items: ['Python', 'MATLAB', 'C++', 'JavaScript'], icon: <Code /> },
    { category: 'Manufacturing', items: ['3D Printing', 'CNC Machining', 'Welding', 'Assembly'], icon: <Build /> },
    { category: 'Analysis', items: ['ANSYS', 'SolidWorks Simulation', 'CFD', 'FEA'], icon: <School /> },
  ];

  const timeline = [
    { year: '2024', title: 'Senior Year Projects', description: 'Leading capstone project in autonomous robotics' },
    { year: '2023', title: 'Internship at TechCorp', description: 'Developed automated testing systems' },
    { year: '2022', title: 'Research Assistant', description: 'Contributed to renewable energy research' },
    { year: '2021', title: 'Started Engineering', description: 'Began studies at Washington State University' },
  ];

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
        </Grid>

        {/* Timeline */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
            My Journey
          </Typography>
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
        </Grid>
      </Grid>
    </Container>
  );
}

function Contact() {
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
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Email */}
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Email sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Email Me
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                will.cary@example.com
              </Typography>
              <Button variant="outlined" size="small" href="mailto:will.cary@example.com">
                Send Email
              </Button>
            </Paper>

            {/* Social Links */}
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <IconButton
                  href="https://github.com/willcary"
                  target="_blank"
                  sx={{ 
                    bgcolor: 'background.paper',
                    '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-2px)' }
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/willcary"
                  target="_blank"
                  sx={{ 
                    bgcolor: 'background.paper',
                    '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-2px)' }
                  }}
                >
                  <LinkedIn />
                </IconButton>
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
                Available for internships, co-ops, and collaborative projects starting Summer 2025.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}


function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        Will Cary
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Button
              component={Link}
              to={item.path}
              fullWidth
              sx={{ py: 1, color: 'text.primary' }}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            <Box component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              Will Cary
            </Box>
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{ px: 2, fontWeight: 500 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              Will Cary
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 400 }}>
              Washington State University Mechanical Engineering Student passionate about robotics, 
              sustainable design, and innovative solutions for tomorrow's challenges.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href="https://github.com/willcary"
                target="_blank"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/willcary"
                target="_blank"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="mailto:will.cary@example.com"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                <Email />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button component={Link} to="/" color="inherit" sx={{ justifyContent: 'flex-start' }}>
                Home
              </Button>
              <Button component={Link} to="/projects" color="inherit" sx={{ justifyContent: 'flex-start' }}>
                Projects
              </Button>
              <Button component={Link} to="/about" color="inherit" sx={{ justifyContent: 'flex-start' }}>
                About
              </Button>
              <Button component={Link} to="/contact" color="inherit" sx={{ justifyContent: 'flex-start' }}>
                Contact
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              📧 will.cary@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              📍 Pullman, WA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              🎓 Mechanical Engineering Student
            </Typography>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Will Cary. Built with React, Vite, and Material-UI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <NavBar />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
