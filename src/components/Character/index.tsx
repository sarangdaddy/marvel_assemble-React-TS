import { Link } from 'react-router-dom';

import * as S from './styles';

export const Character = ({ id, name, coverImg }) => {
  return (
    <S.Character_container>
      <S.Movie_img src={coverImg} alt="img" />
      <S.Movie_name>
        <Link to={`/character/${id}`}>{name}</Link>
      </S.Movie_name>
    </S.Character_container>
  );
};
