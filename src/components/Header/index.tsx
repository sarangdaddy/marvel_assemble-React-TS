// Header.js
import * as S from './styles';
import { ROUTE_PATH } from '@/router/routePath';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Home to={ROUTE_PATH.HOME}>HOME</S.Home>
      <S.Title>
        <span>MARVEL CHARACTERS</span>
      </S.Title>
      <div />
    </S.HeaderContainer>
  );
};
