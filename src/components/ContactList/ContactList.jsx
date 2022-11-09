import React from 'react';
import { ItemContact, ButtonContact } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {visibleContacts?.map(({ name, phone, id }) => (
        <ItemContact key={id}>
          {name}: {phone}
          <ButtonContact type="button" onClick={() => removeContact(id)}>
            Delete
          </ButtonContact>
        </ItemContact>
      ))}
    </ul>
  );
}
