import PropTypes from 'prop-types';

import { Item, Name, Number, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
