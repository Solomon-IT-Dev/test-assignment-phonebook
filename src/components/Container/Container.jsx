import PropTypes from 'prop-types';
import { AppWrapper } from './Container.styled';

export default function Container({ children }) {
  return <AppWrapper>{children}</AppWrapper>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
