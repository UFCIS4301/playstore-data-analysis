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
  { title: 'Size vs Number', url: '/overall' },
  { title: 'Min. Android Version', url: '/category' },
  { title: 'Demographic', url: '/demographic' },
  { title: 'Paid Vs Free', url: '/appversion' },
  { title: 'Category Wise', url: '/price' }
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
            <div className="queries" style={{ gap: '15px', display: 'flex', marginTop: '30px',transform:'translate(-50%,-50%)',marginLeft:'50%'}}>
              {queries.map((query, index) => (
                <Button
                  to={query.url}
                  size='large'
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
