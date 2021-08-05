import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 0 auto 50px;
`;

export const Label = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  font-weight: 500;
  left: 0;
  bottom: 5px;
  margin-bottom: 10px;
  cursor: text;
  font-size: 20px;
  color: var(--grey);

  transition: color 250ms ease, transform 250ms ease;

  & svg {
    margin-right: 10px;
    font-weight: 500;
    transition: color 250ms ease, transform 250ms ease;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding-left: 30px;
  border: none;
  border-bottom: 1px solid var(--dark);
  font-size: 20px;
  color: var(--dark);
  background-color: transparent;

  &::placeholder {
    opacity: 0;
    color: var(--dark);
    font-weight: 700;
    transition: opacity 250ms ease;
  }

  &:focus {
    outline: none;
    border-color: var(--dark);
    &::placeholder {
      opacity: 0.7;
      font-weight: 700;
      transition-delay: 250ms;
    }
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 0;
    color: var(--dark);
    & svg {
      font-weight: 700;
      color: var(--dark);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #f0f0f3;
  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;
  border-radius: 20px;
  font-size: 20px;
  text-transform: uppercase;
  color: var(--dark);
  background-color: transparent;
  transition: all 250ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  & svg {
    margin-right: 10px;
  }
`;
export const ContainerForm = styled.div`
  position: relative;
  width: 400px;
  margin-bottom: 50px;
`;