import { Link } from 'components/Navigation/Navigation.styled';
import { Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box ml={'auto'}>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Box>
  );
};
