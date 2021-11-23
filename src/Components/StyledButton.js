import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`;

export const StyledExtendButton = styled(StyledButton)`
  width: 400px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
`;
