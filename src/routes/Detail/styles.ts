import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  position: relative;
  min-height: 100vh;

  & img {
    max-width: 50%;
    max-height: 70vh;
  }

  & button {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #fff;
    border: 1px solid #000;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  & button:hover {
    background-color: #eee;
  }
`;
