import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import Loader from 'shared/Loader';
import { Container, Typography } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Typography
        component="h2"
        variant="h5"
        mt={3}
        sx={{ textAlign: 'center' }}
      >
        Contacts
      </Typography>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Container>
  );
}
