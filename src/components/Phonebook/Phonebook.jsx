import PropTypes from 'prop-types';

import { Section, Wrap, Title, BtnToggle, Header } from './Phonebook.styled';

const Phonebook = ({ title, changePage, children }) => {
  return (
    <Section>
      <Wrap>
        <Header>
          <Title>{title}</Title>
          <BtnToggle type="button" onClick={changePage}>
            Change page
          </BtnToggle>
        </Header>
        {children}
      </Wrap>
    </Section>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  title: PropTypes.string,
};
