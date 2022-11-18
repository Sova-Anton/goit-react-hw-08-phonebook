import React from 'react';
import ContentPasteSearchSharpIcon from '@mui/icons-material/ContentPasteSearchSharp';
import { Box, Typography, OutlinedInput, InputAdornment } from '@mui/material';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Box mb={3} mt={2} textAlign='center'>
      <Typography variant="subtitle1" mb={1}> Find contacts by name</Typography>
      <OutlinedInput
        
        name="filter"
        id="outlined-adornment-password"
        type="text"
        onChange={changeFilter}
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <ContentPasteSearchSharpIcon />
          </InputAdornment>
        }
      />
    </Box>
  );
}
