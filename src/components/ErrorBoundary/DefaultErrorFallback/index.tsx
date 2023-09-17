import * as S from './styles';

import { ROUTE_PATH } from '@/router/routePath';
import { useNavigate } from 'react-router-dom';

interface DefaultErrorFallbackProps {
  error: Error;
}

export const DefaultErrorFallback = ({ error }: DefaultErrorFallbackProps) => {
  const navigate = useNavigate();
  return (
    <S.ErrorContainer>
      <S.ErrorTitle>에러 발생</S.ErrorTitle>
      <S.ErrorMessage>{error.message}</S.ErrorMessage>
      <span>홈 화면으로 이동해 주세요.</span>
      <S.HomeButton onClick={() => navigate(ROUTE_PATH.ROOT)}>
        HOME 으로 이동하기
      </S.HomeButton>
    </S.ErrorContainer>
  );
};
