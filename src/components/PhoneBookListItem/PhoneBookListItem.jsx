import PropTypes from 'prop-types';
import { Item, Button } from './PhoneBookListItem.styles';
import { RiUserHeartFill } from 'react-icons/ri';

const PhoneBookListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <Item>
      <span>
        <RiUserHeartFill size="20" />
        {name}:
      </span>
      <span>{number}</span>
      <Button onClick={onDeleteContact} id={id}>
        delete
      </Button>
    </Item>
  );
};

PhoneBookListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PhoneBookListItem;