import { useEffect, useState } from 'react';

import * as S from './styles';
import { Loading } from '../../components/Loading';
import { Character } from '../../components/Character';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  console.log(characters);

  useEffect(() => {
    let ignore = false;

    const getCharacters = async () => {
      const json = await (
        await fetch(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`,
        )
      ).json();

      if (!ignore) {
        setCharacters(json.data.results);
        setLoading(false);
      }
    };

    getCharacters();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : (
        <S.Characters>
          {characters
            .filter(
              (character) =>
                !`${character.thumbnail.path}.${character.thumbnail.extension}`.includes(
                  'image_not_available',
                ),
            )
            .map((character) => (
              <Character
                key={character.id}
                id={character.id}
                name={character.name}
                coverImg={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            ))}
        </S.Characters>
      )}
    </S.Container>
  );
};
