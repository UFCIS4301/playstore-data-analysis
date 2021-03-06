import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useSWR from 'swr';
// components
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------
const queries = [
  { title: 'Query 1', url: '/paid-vs-free' },
  { title: 'Query 2', url: '/category' },
  { title: 'Query 3', url: '/demographic' },
  { title: 'Query 4', url: '/appversion' },
  { title: 'Query 5', url: '/size-vs-app' }
];
const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Home() {
  const [demoData, setDemoData] = React.useState(0);
  const { data } = useSWR('/api/totalappcount');
  if (data && demoData === 0) {
    setDemoData(data.rows[0].TOTAL_TUPLES);
  }
  return (
    <RootStyle title="Home">
      <Container align="center">
        <MotionContainer initial="initial" open>
          <Box sx={{ margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h1" paragraph>
                Google PlayStore Trend Analysis
              </Typography>
            </motion.div>

            <Typography sx={{ color: 'text.secondary' }}>
              Query below on data for Google Play Store
            </Typography>
            <div
              className="queries"
              style={{
                gap: '15px',
                display: 'flex',
                marginTop: '60px',
                transform: 'translate(-50%,-50%)',
                marginLeft: '43%'
              }}
            >
              {queries.map((query, index) => (
                <Button
                  to={query.url}
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  key={index}
                  style={{ minWidth: '137px' }}
                >
                  {query.title}
                </Button>
              ))}
            </div>
          </Box>
          <br />

          {/* api => api/totalappcount */}
          <Button
            onClick={(e) => {
              e.target.innerText = `There are ${demoData} tuples in the database`;
            }}
          >
            Click here to reveal Number of tuples
          </Button>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
