import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchCharacterDetail } from '@/api';

import * as S from './styles';
import { Loading } from '@/components/Loading';
import { CharacterDetailTypes } from '@/types';

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [characterDetail, setCharacterDetail] =
    useState<CharacterDetailTypes>();

  const handleBackPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    let ignore = false;

    const getCharacterDetail = async () => {
      const data = await fetchCharacterDetail(id);

      if (!ignore) {
        setCharacterDetail(data.results[0]);
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
        <S.Container>
          <button onClick={handleBackPage}>뒤로가기</button>
          <div>
            <img
              src={`${characterDetail?.thumbnail.path}.${characterDetail?.thumbnail.extension}`}
              alt="character"
            />
            <h2>{characterDetail?.name}</h2>
            {characterDetail?.series &&
              characterDetail?.series.items.length > 0 && (
                <div>
                  <h3>Series</h3>
                  <ul>
                    {characterDetail?.series.items.map((seriesItem, index) => (
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
