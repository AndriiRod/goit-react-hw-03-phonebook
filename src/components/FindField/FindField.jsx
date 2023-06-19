import PropTypes from 'prop-types';

import { Input, Label } from './FindField.styled';

const FindField = ({ value, changeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={changeFilter} />
    </Label>
  );
};

export default FindField;

FindField.propTypes = {
  value: PropTypes.string,
};
