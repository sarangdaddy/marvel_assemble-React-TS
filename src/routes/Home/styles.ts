import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Characters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;

  @media screen and (max-width: 1090px) {
    .characters {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
`;
