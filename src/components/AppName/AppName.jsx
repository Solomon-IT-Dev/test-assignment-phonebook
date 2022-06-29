import PropTypes from 'prop-types';
import { MainTitle } from './AppName.styled';

export default function AppName({ title }) {
  return title && <MainTitle>{title}</MainTitle>;
}

AppName.propTypes = {
  title: PropTypes.string,
};
