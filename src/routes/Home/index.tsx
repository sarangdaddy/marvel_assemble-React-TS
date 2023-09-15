import { fetchCharacters } from '@/api';

import * as S from './styles';
import { Loading } from '@/components/Loading';
import { Character } from '@/components/Character';

import { useFetch } from '@/hooks/useFetch';

export const Home = () => {
  const { data: characters, status } = useFetch(fetchCharacters, 50);
  const charactersList = characters?.results;

  return (
    <S.Container>
      {status === 'pending' ? (
        <Loading />
      ) : (
        <S.Characters>
          {charactersList
            ?.filter(
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
