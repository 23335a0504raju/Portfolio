import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter
} from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'transparent',
  color: 'white',
  padding: theme.spacing(6, 2, 2),
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'center',
}));

const FooterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  marginBottom: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  margin: theme.spacing(0, 1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#3b056e',
    transform: 'translateY(-5px)',
  },
}));

// Footer Component
const Footer = () => {
  const socialLinks = [
    { icon: <Facebook />, url: '#' },
    { icon: <Twitter />, url: '#' },
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/raju-chowdavada-06b734347/' },
    { icon: <Instagram />, url: 'https://www.instagram.com/_lovely__raju_/' },
  ];

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center">
          {/* About Section - centered */}
          <Grid item xs={12} md={8} lg={6}>
            <FooterSection>
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  position: 'relative',
                  paddingBottom: 2,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 60,
                    height: '3px',
                    backgroundColor: '#9370DB',
                  }
                }}
              >
                Passion for Technology
              </Typography>
              <Divider sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                my: 2,
                width: '100%' 
              }} />
              <Typography variant="body2" sx={{ 
                opacity: 0.8, 
                mb: 2, 
                lineHeight: 1.6,
                textAlign: 'center'
              }}>
                Innovation distinguishes between a leader and a follower. We build solutions that matter and create digital experiences that users love.
              </Typography>
              <Box sx={{ mt: 2 }}>
                {socialLinks.map((social, index) => (
                  <SocialIcon key={index} href={social.url}>
                    {social.icon}
                  </SocialIcon>
                ))}
              </Box>
            </FooterSection>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;