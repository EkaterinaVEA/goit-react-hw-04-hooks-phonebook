import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 440px;
  font-size: 20px;
  margin: 0 auto;
  padding: 10px 5px;
  & span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: var(--grey);
    &:first-of-type {
      color: var(--dark);
      margin-right: 10px;
    }
    & svg {
      margin-right: 15px;
      color: var(--dark);
    }
  }
  & svg {
    color: var(--dark);
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 10px;
  font-size: 16px;
  padding: 5px;
  color: var(--dark);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: transparent;
  transition: all 250ms ease;
  &:hover {
    border: 1px solid var(--dark);
  }
`;
