import { useParams } from 'react-router-dom';
import { fetchCharacterDetail } from '@/api';
import { useFetch } from '@/hooks/useFetch';
import { ROUTE_PATH } from '@/router/routePath';
import * as S from './styles';

export const Detail = () => {
  const { id } = useParams();
  const { data: characterDetail } = useFetch({
    fetchFunction: fetchCharacterDetail,
    args: [id],
    cacheKey: `${ROUTE_PATH.DETAIL}/${id}`,
  });
  const detailsInfo = characterDetail?.results[0];

  // // 에러 바운더리 확인을 위한 에러 유도 코드 1
  // if (!detailsInfo) {
  //   throw new Error('Details information is missing!');
  // }

  // // 에러 바운더리 확인을 위한 에러 유도 코드 2
  // useEffect(() => {
  //   async function test() {
  //     throw new Error('에러바운더리 테스트');
  //   }
  //   test();
  // }, []);

  return (
    <>
      {detailsInfo && (
        <S.Container>
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
