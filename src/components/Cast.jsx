import { nanoid } from 'nanoid';

import { BsPersonSquare } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { getMovieCredits } from '../fetchFilmsUtils/fetchFilmData';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getCreditsData = async () => {
      try {
        const creditsData = await getMovieCredits(movieId);
        setCredits(creditsData);
      } catch (error) {
        setError(error);
      }
    };
    getCreditsData();
  }, [movieId]);

  const { cast } = credits;

  return (
    <>
      <div>
        <ul>
          {cast &&
            cast.map(({ name, character, id, profile_path }) => {
              return (
                <li key={id ?? nanoid()}>
                  <div>
                    {profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                        alt={name ?? 'character photo'}
                      />
                    ) : (
                      <BsPersonSquare style={{ height: 300, width: 200 }} />
                    )}
                  </div>
                  <p>{name ?? ''}</p>
                  <p>Character: {character ?? ''}</p>
                </li>
              );
            })}
        </ul>
      </div>
      {error && <p>Some error occured</p>}
    </>
  );
};
export default Cast;
