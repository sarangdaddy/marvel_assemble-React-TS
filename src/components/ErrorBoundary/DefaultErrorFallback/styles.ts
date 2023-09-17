import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  gap: 2rem;
`;

export const ErrorTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
`;

export const ErrorMessage = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

export const ErrorDetail = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: slategray;
`;

export const HomeButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border: 1px solid black;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f7f7f7;
  }

  &:active {
    background-color: #e5e5e5;
  }
`;
