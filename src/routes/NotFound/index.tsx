import { useRouteError } from 'react-router-dom';

import * as S from './styles';

export const NotFound = () => {
  const errorInLoader = useRouteError() as Error;

  return (
    <S.ErrorContainer>
      <S.ErrorTitle>{'잘못된 주소입니다..'}</S.ErrorTitle>
      <S.ErrorMessage>{errorInLoader && errorInLoader.message}</S.ErrorMessage>
      <span>홈 화면으로 이동해 주세요.</span>
      <S.HomeButton onClick={() => (window.location.href = '/')}>
        HOME 으로 이동하기
      </S.HomeButton>
    </S.ErrorContainer>
  );
};
