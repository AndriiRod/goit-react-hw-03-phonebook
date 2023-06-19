import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

import schema from 'components/schema';

import {
  FormWrap,
  SubTitle,
  Label,
  Input,
  FormBtn,
  ErrorText,
  InputContainer,
} from './AddContactForm.styled';

const ErrorBox = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const AddContactForm = ({ checkingForMatches }) => {
  const inputNameId = nanoid(6);
  const inputNumberId = nanoid(6);

  const initialValues = {
    name: '',
    number: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    checkingForMatches(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormWrap>
        <SubTitle>Add</SubTitle>
        <Label htmlFor={inputNameId}>Name</Label>
        <InputContainer>
          <Input id={inputNameId} type="text" name="name" />
          <ErrorBox name="name" component="div" />
        </InputContainer>
        <Label htmlFor={inputNumberId}>Number</Label>
        <InputContainer>
          <Input id={inputNumberId} type="tel" name="number" />
          <ErrorBox name="number" component="div" />
        </InputContainer>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormWrap>
    </Formik>
  );
};

export default AddContactForm;
