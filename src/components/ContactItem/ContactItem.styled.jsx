import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.17;

  color: #000000;
`;

export const Number = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.17;

  color: #8b8b8b;
`;

export const DeleteBtn = styled.button`
  font-family: inherit;

  position: absolute;

  right: 0;
  top: 50%;
  transform: translateY(-50%);

  background-color: #08ae2d;
  color: #ffffff;

  border: none;
`;
