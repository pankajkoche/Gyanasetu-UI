import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { TypographyProps } from '@mui/material/Typography';

const courses = [
  {
    title: 'DSA',
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220509120600/Learn-Data-Structures-and-Algorithms-Easily.gif',
    description: 'Learn Data Structures and Algorithms to improve your problem-solving skills.'
  },
  {
    title: 'System Design',
    image: 'https://miro.medium.com/v2/resize:fit:3000/1*0zr0h8EydOH9n7f9YbF_lA.gif',
    description: 'Master the principles of system design for scalable software architecture.'
  },
  {
    title: 'Web Development',
    image: 'https://i.pinimg.com/originals/02/74/20/0274207612d515f49012c87803a9e631.gif',
    description: 'Learn to build modern web applications using the latest technologies.'
  },
  {
    title: 'Python',
    image: 'https://blog.ipemgzb.ac.in/wp-content/uploads/2022/05/benefits-of-python-for-Machine-Learning-AI.jpg',
    description: 'Get started with Python, a versatile language for various applications.'
  }
];

const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    gap: '8px',
    padding: '8px',
  },
}));

const CourseCard = styled(Card)(({ theme }) => ({
  width: 'calc(25% - 16px)', // Adjust the size as needed, considering the gap
  minWidth: '250px', // Ensure a minimum width for responsiveness
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    width: 'calc(50% - 16px)', // Two cards per row on medium screens
  },
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 16px)', // One card per row on small screens
  },
}));

const CourseCardMedia = styled(CardMedia)({
  height: 140, // Adjust the height of the image as needed
});

const StartButton = styled(Button)({
  marginTop: '16px',
  backgroundColor: '#FFA726',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#FB8C00',
  }
});

// Define the props for CourseTitle to explicitly allow the component prop
const CourseTitle = styled((props: TypographyProps<'div'>) => (
  <Typography component="div" {...props} />
))(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const CourseDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Arial, sans-serif',
  fontSize: '14px',
  color: theme.palette.text.secondary,
  marginTop: '8px',
}));

const Courses: React.FC = () => {
  return (
    <CardContainer>
      {courses.map((course) => (
        <CourseCard key={course.title}>
          <CourseCardMedia
            image={course.image}
            title={course.title}
          />
          <CardContent>
            <CourseTitle variant="h6">
              {course.title}
            </CourseTitle>
            <CourseDescription variant="body2">
              {course.description}
            </CourseDescription>
            <StartButton variant="contained">Start Now</StartButton>
          </CardContent>
        </CourseCard>
      ))}
    </CardContainer>
  );
};

export default Courses;
