import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import Box from '../Box';
import { selectContacts } from 'redux/selectors';
import {
  FormSection,
  LabelForm,
  Input,
  ButtonForm,
} from './ContactForm.styled';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
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
    if (isDuplicate({ name })) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact({ name, phone }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <Box
      maxWidth="500px"
      ml="auto"
      mr="auto"
      border="1px solid"
      borderRadius="10px"
      borderColor="#7979f2"
    >
      <FormSection onSubmit={handleSubmit}>
        <LabelForm htmlFor="{nameId}">Name</LabelForm>
        <Input
          id={nameId}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />

        <LabelForm htmlFor="{numberId}">Number</LabelForm>
        <Input
          id={numberId}
          type="tel"
          name="number"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />

        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormSection>
    </Box>
  );
}
