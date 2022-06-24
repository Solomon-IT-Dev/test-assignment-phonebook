import PropTypes from 'prop-types';
import { SubTitle } from './SectionName.styled';

export default function SectionName({ title }) {
    return (
        <>
            {title && <SubTitle>{title}</SubTitle>}
        </>
    );
};

SectionName.propTypes = {
    title: PropTypes.string,
};