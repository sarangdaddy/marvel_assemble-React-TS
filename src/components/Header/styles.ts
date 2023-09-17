import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  font-weight: 800;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 3;
`;

export const Title = styled.div`
  font-size: 1rem;
  color: #e53e3e;
  flex-grow: 2;
  text-align: center;

  &:hover {
    color: #d32f2f;
  }

  @media (min-width: 800px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

export const Home = styled(Link)`
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
  color: black;
  cursor: pointer;
  text-decoration: none;
  margin-left: 20px;

  &:focus {
    outline: none;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 400px) {
    font-size: 1rem;
  }

  @media (min-width: 800px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;
