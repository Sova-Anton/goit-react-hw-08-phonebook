import {
  Container,
  Typography,
  Box,
  TextField,
  CssBaseline,
  Button,
} from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

import { addContact } from 'redux/contacts/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const isDuplicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!name.trim() || !number.trim()) {
      return;
    }
    if (isDuplicate({ name })) {
      return toast.error(`${name} is already in contacts.`);
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Create contact
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              type="text"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Number"
              type="number"
              id="number"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
        <ToastContainer autoClose={4000} />
      </Container>
    </>
  );
}
