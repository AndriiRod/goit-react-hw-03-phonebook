import ContactItem from 'components/ContactItem/';
import PropTypes from 'prop-types';

import { SubTitle, List } from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact, children }) => {
  return (
    <div>
      <SubTitle>Contacts</SubTitle>
      {children}
      {contacts.length !== 0 && (
        <List>
          {contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </List>
      )}
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
