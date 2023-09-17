import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  padding-top: 100px;

  & img {
    max-width: 50%;
    max-height: 70vh;
    box-shadow:
      0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  }
`;
