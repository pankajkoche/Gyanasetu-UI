import React, { useState } from 'react';
import { Box, Button, Typography, Tabs, Tab, TextField, Select, MenuItem, FormControl, InputLabel, Card, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Editor from '@monaco-editor/react';
import { SelectChangeEvent } from '@mui/material/Select';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const HEADER_HEIGHT = 65;

const Container = styled(Box)({
  display: 'flex',
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  overflow: 'hidden',
  marginTop: `${HEADER_HEIGHT}px`,
  backgroundColor:'#f6f3f3',
});

const ProblemStatement = styled(Card)({
  padding: '1rem',
  overflowY: 'auto',
  margin:'0.5rem',
  backgroundColor: 'white',
  width: '50%',
  boxSizing: 'border-box',
});

const CodingEnvironment = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin:'0.5rem',
  width: '50%',
  boxSizing: 'border-box',
});

const CodeEditorCard = styled(Card)<{ expanded: boolean }>(({ expanded }) => ({
  flex: expanded ? '1 0 30%' : '1 0 85%',
  padding: '0.5rem',
  marginBottom: '0.5rem',
  transition: 'flex 0.3s',
}));

const TestCaseOutputCard = styled(Card)<{ expanded: boolean }>(({ expanded }) => ({
  flex: expanded ? '1 0 60%' : '1 0 10%',
  padding: '0.5rem',
  overflowY: 'auto',
  boxSizing: 'border-box',
  transition: 'flex 0.3s',
}));

const TestCaseInput = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
});

const CustomSelect = styled(Select)({
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  fontSize: '10px',
});

const CustomButton = styled(Button)({
  fontSize: '10px',
  marginRight:'4px'
});

const Practice: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [tabValue, setTabValue] = useState(0);
  const [testCase, setTestCase] = useState({ nums: '', target: '' });
  const [language, setLanguage] = useState<string>('javascript');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleRunCode = () => {
    // Simulate code execution
    setOutput(`Output: ${code}`);
  };

  const handleSubmit = () => {
    // Handle code submission
    alert('Code submitted!');
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleLanguageChange = (event: SelectChangeEvent<unknown>) => {
    setLanguage(event.target.value as string);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <ProblemStatement>
        <Typography variant="h4">1. Two Sum</Typography>
        <Typography variant="body1" paragraph>
          Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
        </Typography>
        <Typography variant="body1" paragraph>
          You may assume that each input would have exactly one solution, and you may not use the same element twice.
        </Typography>
        <Typography variant="body1" paragraph>
          You can return the answer in any order.
        </Typography>
        <Typography variant="h6">Example 1:</Typography>
        <Typography variant="body1" paragraph>
          Input: nums = [2,7,11,15], target = 9<br />
          Output: [0,1]<br />
          Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        </Typography>
        <Typography variant="h6">Example 2:</Typography>
        <Typography variant="body1" paragraph>
          Input: nums = [3,2,4], target = 6<br />
          Output: [1,2]
        </Typography>
        <Typography variant="h6">Example 3:</Typography>
        <Typography variant="body1" paragraph>
          Input: nums = [3,3], target = 6<br />
          Output: [0,1]
        </Typography>
      </ProblemStatement>
      <CodingEnvironment>
        <CodeEditorCard expanded={isExpanded}>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="1rem">
            <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
              <CustomSelect value={language} onChange={handleLanguageChange}>
                <MenuItem value="javascript">JavaScript</MenuItem>
                <MenuItem value="python">Python</MenuItem>
                <MenuItem value="cpp">C++</MenuItem>
                <MenuItem value="csharp">C#</MenuItem>
              </CustomSelect>
            </FormControl>
            <div>
              <CustomButton variant="contained" color="primary" size="small" onClick={handleRunCode}>
                Run Code
              </CustomButton>
              <CustomButton variant="contained" color="secondary" size="small" onClick={handleSubmit}>
                Submit
              </CustomButton>
            </div>
          </Box>
          <Editor
            height="100%"
            language={language}
            defaultValue="// Write your code here"
            onChange={(value) => setCode(value || '')}
          />
        </CodeEditorCard>
        <TestCaseOutputCard expanded={isExpanded}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>Test case</Typography>
            <IconButton onClick={toggleExpand}>
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          {isExpanded ? (
          <><Tabs value={tabValue} onChange={handleTabChange} aria-label="test case tabs">
              <Tab label="Case 1" />
              <Tab label="Case 2" />
              <Tab label="Case 3" />
            </Tabs>
          <TestCaseInput>
            {tabValue === 0 && (
              <Box>
                <TextField
                  label="nums"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={testCase.nums}
                  onChange={(e) => setTestCase({ ...testCase, nums: e.target.value })}
                />
                <TextField
                  label="target"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={testCase.target}
                  onChange={(e) => setTestCase({ ...testCase, target: e.target.value })}
                />
              </Box>
            )}
            {tabValue === 1 && (
              <Box>
                <TextField
                  label="nums"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={testCase.nums}
                  onChange={(e) => setTestCase({ ...testCase, nums: e.target.value })}
                />
                <TextField
                  label="target"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={testCase.target}
                  onChange={(e) => setTestCase({ ...testCase, target: e.target.value })}
                />
              </Box>
            )}
            {tabValue === 2 && (
              <Box>
                <TextField
                  label="nums"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={testCase.nums}
                  onChange={(e) => setTestCase({ ...testCase, nums: e.target.value })}
                />
                <TextField
                  label="target"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={testCase.target}
                  onChange={(e) => setTestCase({ ...testCase, target: e.target.value })}
                />
              </Box>
            )}
          </TestCaseInput>
          
          </>): (<></>)}
          
        </TestCaseOutputCard>
      </CodingEnvironment>
    </Container>
  );
};

export default Practice;
