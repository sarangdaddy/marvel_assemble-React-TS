import { Link } from 'react-router-dom';

import * as S from './styles';
import { CharacterTypes } from '@/types';
import { ROUTE_PATH } from '@/router/routePath';

export const Character = ({ id, name, thumbnail }: CharacterTypes) => {
  return (
    <S.Character_container>
      <S.Movie_img src={`${thumbnail.path}.${thumbnail.extension}`} alt="img" />
      <S.Movie_name>
        <Link to={ROUTE_PATH.DETAIL.replace(':id', id.toString())}>{name}</Link>
      </S.Movie_name>
    </S.Character_container>
  );
};
