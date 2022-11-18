import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container>
       <Typography
        component="h1"
        variant="h4"
        mt={3}
        sx={{ textAlign: 'center' }}
      >
        Phonebook welcome page
      </Typography>
   
    </Container>
  );
}
