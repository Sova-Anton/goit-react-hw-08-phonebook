import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Box from './Box';
import { Title, Subtitle } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import Loader from 'shared/Loader';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="section" ml="auto" mr="auto" width="1400px" pr={3} pl={3}>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Box maxWidth="500px" ml="auto" mr="auto">
        <Filter />
      </Box>
      {isLoading && !error && <Loader/>}
      <Box maxWidth="500px" ml="auto" mr="auto" pt={3}>
        <ContactList />
      </Box>
    </Box>
  );
}
