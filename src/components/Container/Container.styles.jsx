import styled from '@emotion/styled';

export const Main = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  border-radius: 20px;
  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;
  background-color: #f0f0f3;
  & h1,
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #727273;
    font-size: 28px;
    margin-bottom: 50px;
    margin-top: 0;
    & svg {
      margin-right: 15px;
      color: #727273;
    }
  }
`;

export const ContainerContacts = styled.div`
  width: 450px;
`;
export const ContainerAdd = styled.div`
  width: 450px;
`;
