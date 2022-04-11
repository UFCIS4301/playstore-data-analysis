import { Translate } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// components
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------
const queries = [
  { title: 'Size vs Number', url: '/size-vs-app' },
  { title: 'Min. Android Version', url: '/appversion' },
  { title: 'Demographic', url: '/demographic' },
  { title: 'Paid Vs Free', url: '/paid-vs-free' },
  { title: 'Category Wise', url: '/category' }
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
      <Container align="center">
        <MotionContainer initial="initial" open>
          <Box sx={{  margin: 'auto', textAlign: 'center'  }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h1" paragraph>
                Google PlayStore Trend Analysis
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Query below on data for Google Play Store
            </Typography>
            <div className="queries" style={{ gap: '15px', display: 'flex', marginTop: '60px',transform:'translate(-50%,-50%)',marginLeft:'43%'}}>
              {queries.map((query, index) => (
                <Button
                  to={query.url}
                  size='large'
                  variant="contained"
                  component={RouterLink}
                  key={index}
                  style={{minWidth: '137px'}}
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
