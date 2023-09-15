import { useEffect, useState } from 'react';

import { fetchCharacters } from '@/api';

import * as S from './styles';
import { Loading } from '@/components/Loading';
import { Character } from '@/components/Character';
import { CharacterTypes } from '@/types';

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<CharacterTypes[]>([]);

  useEffect(() => {
    let ignore = false;

    const getCharacters = async () => {
      const data = await fetchCharacters(50);

      if (!ignore) {
        setCharacters(data.results);
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
                !character.thumbnail.path.includes('image_not_available'),
            )
            .map((character) => (
              <Character
                key={character.id}
                id={character.id}
                name={character.name}
                thumbnail={character.thumbnail}
              />
            ))}
        </S.Characters>
      )}
    </S.Container>
  );
};
