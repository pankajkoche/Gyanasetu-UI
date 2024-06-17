import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box, styled } from '@mui/material';
import { Padding } from '@mui/icons-material';

interface BlogContent {
  Title?:string;
  type: string;
  url?: string;
  caption?: string;
  text?: string;
  language?: string;
  code?: string;
}

interface BlogData {
  title: string;
  content: BlogContent[];
}

interface BlogComponentProps {
  blogData: BlogData;
}

const Root = styled(Container)`
    margin-top: 100px;
`
const Blog: React.FC<BlogComponentProps> = ({ blogData }) => {
  return (
    <Root maxWidth="md">
        <Typography variant='h4'>
            {blogData.title}
        </Typography>
      {blogData.content.map((section, index) => {
        switch (section.type) {
          case 'image':
            return (
              <Card key={index} sx={{ marginBottom: 2 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={section.url}
                  alt={section.caption}
                />
                
              </Card>
            );
          case 'introduction':
          case 'explanation':
            return (
              <Box key={index} sx={{ marginBottom: 2 }}>
                <Typography variant="body1">{section.text}</Typography>
              </Box>
            );
          case 'code':
            return (
              <Card key={index} sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography variant="h6">Code Example:</Typography>
                  <pre>
                    <code>{section.code}</code>
                  </pre>
                </CardContent>
              </Card>
            );
          default:
            return null;
        }
      })}
    </Root>
  );
};

export default Blog;