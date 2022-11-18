import { useSelector } from 'react-redux';
import { AppBar, Box, Container } from '@mui/material';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const BarApp = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static">
      <Container fixed>
        <Box component="nav" pb={1} pt={1} sx={{ display: 'flex', alignItems: 'baseline', }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Container>
    </AppBar>
  );
};
