import PropTypes from 'prop-types';
import { Main } from './Container.styles';

export const Container = ({ children }) => {
  return <Main>{children}</Main>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
