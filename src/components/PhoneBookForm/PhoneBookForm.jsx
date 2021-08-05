import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import { Form, Label, Input, Button, ContainerForm } from './PhoneBookForm.styles';
import { RiUserLine, RiPhoneLine, RiUserAddLine } from 'react-icons/ri';

export const PhoneBookForm = ({onSubmit}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid();
  const telInputId = shortid();

  const handleSetUserInfo = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      
      case "number":
        setNumber(value);
        break;
      
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({name, number});
    setName("");
    setNumber("");
  };

    return (
    <Form onSubmit={handleSubmit} action="">
      <ContainerForm>
        <Input
          onChange={handleSetUserInfo}
          id={nameInputId}
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
        <Label htmlFor={nameInputId}>
          <RiUserLine size="25" />
          Name
        </Label>
      </ContainerForm>
      <ContainerForm>
        <Input
          onChange={handleSetUserInfo}
          id={telInputId}
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
        <Label htmlFor={telInputId}>
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

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func,
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};