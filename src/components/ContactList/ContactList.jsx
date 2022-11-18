import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Container } from '@mui/material';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Container component="ul" maxWidth="sm">
      {visibleContacts?.map(({ name, number, id }) => (
        <ListItem
          key={id}
          secondaryAction={
            <IconButton
              onClick={() => removeContact(id)}
              edge="end"
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <ContactPhoneSharpIcon />
            </Avatar>
          </ListItemAvatar>
          <Typography component="p" variant="h5">
            {name}: {number}
          </Typography>
          <Typography component="p" variant="h5"></Typography>
        </ListItem>
      ))}
    </Container>
  );
}
