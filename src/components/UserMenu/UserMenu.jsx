import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    const handleLogOut = () => dispatch(logOut());

  return (
    <Box sx={{ display: 'inline-flex', ml: 'auto'}} >
      <Typography mr={3}  variant="h6" >Welcome, {user.email} </Typography>       
      <Button variant="contained" size="small" color='error' onClick={handleLogOut}>Logout</Button>
    </Box>
  );
};
