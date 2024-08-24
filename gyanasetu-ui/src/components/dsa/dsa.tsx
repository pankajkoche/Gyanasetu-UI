import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Badge, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PracticeIcon from '@mui/icons-material/Code';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import StarBorderIcon from '@mui/icons-material/StarBorder';


import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)`
  padding: 40px 0;
`;
const CurvedBottomBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ed4e2b 0%, #88d3ce 100%)',
  borderRadius: '0 0 40% 60%',
  padding: theme.spacing(4),
  boxShadow: theme.shadows[4],
  color: theme.palette.common.white,
  textAlign: 'center',
  height: '300px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
}));

const Image = styled('img')({
 
  right: '300px',
  bottom: '100px',
  height: '200px',
  width: 'auto',
  zIndex: 2,
});


const StyledAccordion = styled(Accordion)`
  margin: 10px 0;
  border-radius: 5px;
  border: 2px solid #060606;
  box-shadow: none;
  &:before {
    display: none;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  background-color: #ffffff;
  
  border-bottom: 4px solid #050404;
  min-height: 56px !important;
  &.Mui-expanded {
    min-height: 56px !important;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  padding: 0px;
`;
const HEADER_HEIGHT = 65;

const Root= styled('div')({
  marginTop: `${HEADER_HEIGHT}px`,
  overflow:'hidden'
});


const topics = [
  {
    title: 'Lec 1: Sorting-I',
    subtopics: [
      {
        problem: 'Selection Sort',
        article: true,
        youtube: true,
        practice: true,
        note: true,
        difficulty: 'Easy',
        revision: false,
      },
      {
        problem: 'Bubble Sort',
        article: true,
        youtube: true,
        practice: true,
        note: true,
        difficulty: 'Easy',
        revision: false,
      },
      {
        problem: 'Insertion Sort',
        article: true,
        youtube: true,
        practice: true,
        note: true,
        difficulty: 'Easy',
        revision: false,
      },
    ],
  },
  {
    title: 'Lec 3: Learn STL/Java-Collections or similar thing in your language',
    subtopics: [
      {
        problem: 'C++ STL',
        article: true,
        youtube: true,
        practice: true,
        note: true,
        difficulty: 'Medium',
        revision: false,
      },
      {
        problem: 'Java Collections',
        article: true,
        youtube: false,
        practice: true,
        note: true,
        difficulty: 'Easy',
        revision: false,
      },
    ],
  },
];



const DSATopics = () => {
 
  return (
    <Root >
        <CurvedBottomBox>
      <h1>Learning Data Structures And Algorithms Can Be Fun</h1>
      <p>Learn this cource and get more cahnge to get hired in Top componies</p>
      <Image src="https://renaissance.programmingpathshala.com/static/media/IntroProfiles.d37d81dc00d2b8d904d2.webp" alt="Decorative" />
    </CurvedBottomBox>
      
<StyledContainer>
      {topics.map((topic, index) => (
        <StyledAccordion key={index}>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">{topic.title}</Typography>
            <Badge badgeContent={`${topic.subtopics.length}/${topic.subtopics.length}`} color="primary" style={{ marginLeft: 'auto' }} />
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Problem</TableCell>
                    <TableCell>Article</TableCell>
                    <TableCell>YouTube</TableCell>
                    <TableCell>Practice</TableCell>
                    <TableCell>Note</TableCell>
                    <TableCell>Difficulty</TableCell>
                    <TableCell>Revision</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {topic.subtopics.map((subtopic, subIndex) => (
                    <TableRow key={subIndex}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>{subtopic.problem}</TableCell>
                      <TableCell>
                        {subtopic.article && <IconButton><ArticleIcon /></IconButton>}
                      </TableCell>
                      <TableCell>
                        {subtopic.youtube && <IconButton><YouTubeIcon /></IconButton>}
                      </TableCell>
                      <TableCell>
                        {subtopic.practice && <IconButton><PracticeIcon /></IconButton>}
                      </TableCell>
                      <TableCell>
                        {subtopic.note && <IconButton><NoteAddIcon /></IconButton>}
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" style={{ color: subtopic.difficulty === 'Easy' ? 'green' : 'orange' }}>
                          {subtopic.difficulty}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <StarBorderIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </StyledContainer>
    </Root>
    
  );
};

export default DSATopics;