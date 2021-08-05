import { useState } from 'react';
import Swal from 'sweetalert2';
import shortid from 'shortid';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import PhoneBookList from '../PhoneBookList/PhoneBooklist';
import { PhoneBookForm } from '../PhoneBookForm/PhoneBookForm';
import { Filter } from '../Filter/Filter';
import { ContainerContacts, ContainerAdd } from '../Container/Container.styles';
import { RiContactsFill, RiUserAddFill } from 'react-icons/ri';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState(null);

  const handleFormSubmit = ({ name, number }) => {
    const includedContact = checkContact(name, number);

    if (includedContact) {
      return;
    }

    handleAddContact(name, number)
  };

  const checkContact = (name, number) => {
    const includedName = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    const includedNumber = contacts.find(
      (contact) =>
        contact.number.replace(/[^0-9]/g, "") === number.replace(/[^0-9]/g, "")
    );

    if (includedName) {
      return Swal.fire({
        position: "center",
        title: `Sorry,${name.toUpperCase()}\n is already in contacts!`,
        confirmButtonColor: "grey",
      });
    }

    if (includedNumber) {
      return Swal.fire({
        position: "center",
        title: `This number is already in contacts as\n${includedNumber.name.toUpperCase()}`,
        confirmButtonColor: "grey",
      });
    }
  };

  const handleAddContact = (name, number) => {
    const id = shortid();

    setContacts((contacts) => [...contacts, { id, name, number }]);
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleFilterInputChange = (value) => {
    setFilter(value.toLowerCase());
  };

  const filterContacts = () =>
    contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
  );

  return (
    <>
      <Section title="Phone Book">
        <Container>
          <ContainerAdd>
            <h1>
              <RiUserAddFill /> Add Contact
            </h1>
            <PhoneBookForm
              onSubmit={handleFormSubmit}
            />
          </ContainerAdd>

          <ContainerContacts>
            <h2>
              <RiContactsFill />
              Contacts
            </h2>
            <Filter filterValue={filter} onChange={handleFilterInputChange} />
            {contacts.length > 0 && (
              <PhoneBookList
                onDeleteContact={handleDeleteContact}
                contacts={filter ? filterContacts() : contacts}
              />
            )}
          </ContainerContacts>
        </Container>
      </Section>
    </>
  );
}