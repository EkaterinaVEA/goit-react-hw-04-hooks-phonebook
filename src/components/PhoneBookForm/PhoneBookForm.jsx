import PropTypes from 'prop-types';
import { Component } from 'react';
import shortid from 'shortid';
import { Form, Label, Input, Button, ContainerForm } from './PhoneBookForm.styles';
import { RiUserLine, RiPhoneLine, RiUserAddLine } from 'react-icons/ri';


export class PhoneBookForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameInputId = shortid();
  telInputId = shortid();
  contactId = shortid();

  handleSetUserInfo = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} action="">
        <ContainerForm>
          <Input
            onChange={this.handleSetUserInfo}
            id={this.nameInputId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Name"
            autoComplete="off"
            maxLength="40"
            required
          />
          <Label htmlFor={this.nameInputId}>
            <RiUserLine size="25" />
            Name
          </Label>
        </ContainerForm>
        <ContainerForm>
          <Input
            onChange={this.handleSetUserInfo}
            id={this.telInputId}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="111-11-11"
            autoComplete="off"
            maxLength="15"
            required
          />
          <Label htmlFor={this.telInputId}>
            <RiPhoneLine size="25" />
            Number
          </Label>
        </ContainerForm>
        <Button type="submit">
          <RiUserAddLine />
          Add contact
        </Button>
      </Form>
    );
  }
}

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func,
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};