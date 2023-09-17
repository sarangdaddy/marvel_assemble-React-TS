import { ROUTE_PATH } from '@/router/routePath';
import { useNavigate } from 'react-router-dom';

interface DefaultErrorFallbackProps {
  error: Error;
}

export const DefaultErrorFallback = ({ error }: DefaultErrorFallbackProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div>에러 발생</div>
      <span>{error.message}</span>
      <button onClick={() => navigate(ROUTE_PATH.ROOT)}>홈</button>
    </>
  );
};
