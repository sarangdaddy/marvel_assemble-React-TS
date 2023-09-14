import { Link } from 'react-router-dom';

import S from './Character.module.css';
import PropTypes from 'prop-types';

export const Character = ({ id, name, coverImg }) => {
  return (
    <div className={S.character_container}>
      <img src={coverImg} alt="img" className={S.movie_img} />
      <h2 className={S.movie_name}>
        <Link to={`/character/${id}`}>{name}</Link>
      </h2>
    </div>
  );
};

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};
