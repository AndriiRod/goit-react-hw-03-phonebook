import styled from '@emotion/styled';

export const Section = styled.section`
  display: grid;
  place-items: center;

  padding-top: 50px;
`;

export const Wrap = styled.div`
  width: 360px;
  padding: 19px 15px;

  background-color: #ffffff;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;

  color: #000000;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 35px rgba(18, 14, 66, 0.05);
`;

export const BtnToggle = styled.button`
  font-family: inherit;
  background-color: #00b2ff;
  color: #ffffff;

  box-shadow: 0px 14px 50px rgba(0, 25, 36, 0.2);

  border: none;

  border-radius: 2px;
`;
