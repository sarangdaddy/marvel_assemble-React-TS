import * as S from './styles';

interface DefaultErrorFallbackProps {
  error: Error;
}

export const DefaultErrorFallback = ({ error }: DefaultErrorFallbackProps) => {
  return (
    <S.ErrorContainer>
      <S.ErrorTitle>에러 발생</S.ErrorTitle>
      <S.ErrorMessage>{error.message}</S.ErrorMessage>
      <span>홈 화면으로 이동해 주세요.</span>
      <S.HomeButton onClick={() => (window.location.href = '/')}>
        HOME 으로 이동하기
      </S.HomeButton>
    </S.ErrorContainer>
  );
};
