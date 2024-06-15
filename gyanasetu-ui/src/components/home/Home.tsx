import React from 'react';
import { Container, Typography, Button, styled, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Courses from './cards';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const WelcomeContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'white',
});

const Make = styled('div')`
  
`
const WelcomeImage = styled('img')({
  width: '50%',
  maxWidth: '400px',
  marginBottom: '20px',
});

const StyledButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: 'orange',
  '&:hover': {
    backgroundColor: '#115293',
  },
});

const Root = styled('div')`
  margin-top: 64px; // Add top margin equal to the header height
  padding: 16px;
`

const Home: React.FC = () => {
  return (
    <Root>
      <WelcomeContainer>
        <WelcomeImage src={'https://cdni.iconscout.com/illustration/premium/thumb/team-success-4704248-3916212.png'} alt="Welcome" />
        <Typography variant="caption" component="h1" gutterBottom>
          "Welcome to GyanaSetu! We're thrilled to have you here. At GyanaSetu, we believe in bridging the gap between knowledge and success. Our platform is designed to boost your skills and provide you with the tools you need to achieve your goals. Dive in and explore our resources, courses, and community. Together, let's build a bridge to your success!"
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          GyanaSetu Empowering Your Career Aspirations
        </Typography>
      </WelcomeContainer>
      <Courses/>
    </Root>
  );
};

export default Home;
