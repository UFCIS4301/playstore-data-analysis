import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// components
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------
const queries = [
  { title: 'Overall', url: '/overall' },
  { title: 'Category', url: '/category' },
  { title: 'Demographic', url: '/demographic' },
  { title: 'App version', url: '/appversion' },
  { title: 'Price', url: '/price' }
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
  return (
    <RootStyle title="Home">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h1" paragraph>
                Home page
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Query below on data for Google Play Store
            </Typography>
            <div style={{ gap: '15px', display: 'flex', marginTop: '15px' }}>
              {queries.map((query, index) => (
                <Button
                  to={query.url}
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  key={index}
                >
                  {query.title}
                </Button>
              ))}
            </div>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
