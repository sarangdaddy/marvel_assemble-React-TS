import { fetchCharacters } from '@/api';

import * as S from './styles';
import { Loading } from '@/components/Loading';
import { Character } from '@/components/Character';

import { useFetch } from '@/hooks/useFetch';

export const Home = () => {
  const { data: characters, status } = useFetch(fetchCharacters, 50);
  const charactersList = characters?.results;

  // // 에러바운더리 작동 확인을 위한 에로 유도 코드
  // console.log(charactersList[9999].name);

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
