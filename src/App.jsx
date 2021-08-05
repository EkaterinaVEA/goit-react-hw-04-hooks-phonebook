import './App.css';
import { Component } from 'react';
import Swal from 'sweetalert2';
import shortid from 'shortid';
import FilterContacts from './helpers/FilterContacts';
import { Section } from './components/Section/Section';
import { Container } from './components/Container/Container';
import PhoneBookList from './components/PhoneBookList/PhoneBooklist';
import { PhoneBookForm } from './components/PhoneBookForm/PhoneBookForm';
import { Filter } from './components/Filter/Filter';
import { ContainerContacts, ContainerAdd } from './components/Container/Container.styles';
import { RiContactsFill, RiUserAddFill } from 'react-icons/ri';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleFormSubmit = ({ name, number }) => {
    const includedContact = this.checkContact(name, number);

    if (includedContact) {
      return;
    }

    this.handleAddContact(name, number);
  };

  checkContact = (name, number) => {
    const { contacts } = this.state;

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

  handleAddContact = (name, number) => {
    const id = shortid();

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };


  handleDeleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== e.target.id),
    });
  };

  handleFilterInputChange = value => {
    this.setState({ filter: value.toLowerCase() });
  };

  render() {
    const contacts = FilterContacts(this.state.contacts, this.state.filter);
    return (
      <>
        <Section title="Phone Book">
          <Container>
            <ContainerAdd>
              <h1>
                <RiUserAddFill /> Add Contact
              </h1>
              <PhoneBookForm
                onSubmit={this.handleFormSubmit}
              />
            </ContainerAdd>

            <ContainerContacts>
              <h2>
                <RiContactsFill />
                Contacts
              </h2>
              <Filter filterValue={this.state.filter} onChange={this.handleFilterInputChange} />
              {contacts.length > 0 && (
                <PhoneBookList onDeleteContact={this.handleDeleteContact} contacts={contacts} />
              )}
            </ContainerContacts>
          </Container>
        </Section>
      </>
    );
  }
}

export default App;