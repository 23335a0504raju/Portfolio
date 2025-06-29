import {
  Email,
  LocationOn,
  Phone
} from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
  backgroundColor: 'transparent',
  color: 'white',
  padding: '48px 0',
  marginTop: 'auto',
  '& .MuiTypography-root': {
    color: 'inherit',
  },
});

const FooterLink = styled(Link)({
  color: 'inherit',
  display: 'block',
  marginBottom: '8px',
  '&:hover': {
    color: '#1976d2',
    textDecoration: 'none',
  },
});



const Footer = () => {

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { icon: <Email fontSize="small" />, text: 'smilyraju8464@gamil.com' },
    { icon: <Phone fontSize="small" />, text: '91+ 6281924785' },
    { icon: <LocationOn fontSize="small" />, text: 'Visakhapatnam, AP' },
  ];



  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="space-between">
          {/* About Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Passion for Technology
            </Typography>
            <Typography variant="body2" paragraph sx={{ opacity: 0.8 }}>
              Innovation distinguishes between a leader and a follower. We build solutions that matter.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box component="nav">
              {quickLinks.map((link) => (
                <FooterLink 
                  key={link.name} 
                  href={link.path} 
                  underline="none"
                  variant="body2"
                  sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                >
                  {link.name}
                </FooterLink>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            {contactInfo.map((item, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Box mr={1.5} sx={{ color: 'primary.main' }}>
                  {item.icon}
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

      
      </Container>
    </FooterContainer>
  );
};

export default Footer;