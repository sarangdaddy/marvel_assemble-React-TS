import { useNavigate, useParams } from 'react-router-dom';

import { fetchCharacterDetail } from '@/api';

import * as S from './styles';
import { Loading } from '@/components/Loading';
import { useFetch } from '@/hooks/useFetch';

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: characterDetail, status } = useFetch(fetchCharacterDetail, id);
  const detailsInfo = characterDetail?.results[0];

  // // 에러 바운더리 확인을 위한 에러 유도 코드
  // if (!detailsInfo) {
  //   throw new Error('Details information is missing!');
  // }

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <>
      {status === 'pending' ? (
        <Loading />
      ) : (
        <S.Container>
          <button onClick={handleBackPage}>뒤로가기</button>
          <div>
            <img
              src={`${detailsInfo?.thumbnail.path}.${detailsInfo?.thumbnail.extension}`}
              alt="character"
            />
            <h2>{detailsInfo?.name}</h2>
            {detailsInfo?.series && detailsInfo?.series.items.length > 0 && (
              <div>
                <h3>Series</h3>
                <ul>
                  {detailsInfo?.series.items.map((seriesItem, index) => (
                    <li key={index}>{seriesItem.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </S.Container>
      )}
    </>
  );
};
