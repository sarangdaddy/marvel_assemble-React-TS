import { fetchCharacters } from '@/api';
import { useFetch } from '@/hooks/useFetch';
import { ROUTE_PATH } from '@/router/routePath';
import { Character } from '@/components/Character';
import * as S from './styles';

export const Home = () => {
  const { data: characters } = useFetch({
    fetchFunction: fetchCharacters,
    args: [50],
    cacheKey: ROUTE_PATH.HOME,
  });
  const charactersList = characters?.results;

  // // 에러바운더리 작동 확인을 위한 에로 유도 코드
  // console.log(charactersList[9999].name);

  return (
    <S.Container>
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
    </S.Container>
  );
};
