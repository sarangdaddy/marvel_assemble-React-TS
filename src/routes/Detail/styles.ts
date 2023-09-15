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
    box-shadow:
      0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
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
    font-size: 16px; // 기본 글자 크기 설정
  }

  & button:hover {
    background-color: #eee;
  }
`;
