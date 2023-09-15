import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './styles';
import { Loading } from '../../components/Loading';

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [characterDetail, setCharacterDetail] = useState([]);

  const handleBackPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    let ignore = false;

    const getCharacterDetail = async () => {
      const json = await (
        await fetch(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`,
        )
      ).json();

      if (!ignore) {
        setCharacterDetail(json.data.results[0]);
        setLoading(false);
      }
    };

    getCharacterDetail();

    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <S.container>
          <button onClick={handleBackPage}>뒤로가기</button>
          <div>
            <img
              src={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`}
              alt="character"
            />
            <h2>{characterDetail.name}</h2>
            {characterDetail.series &&
              characterDetail.series.items.length > 0 && (
                <div>
                  <h3>Series</h3>
                  <ul>
                    {characterDetail.series.items.map((seriesItem, index) => (
                      <li key={index}>{seriesItem.name}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </S.container>
      )}
    </>
  );
};
