import { nanoid } from 'nanoid';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'fetchFilmsUtils/fetchFilmData';
import { Spinner } from './Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
        if (reviewsData.length === 0) {
          setIsEmpty(true);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      {isEmpty && <p>There is no any reviews for this movie</p>}
      {error && <p>Some error occured</p>}
      {reviews && (
        <div>
          <ul>
            {reviews.map(({ author, content, id }) => {
              return (
                <li key={id ?? nanoid()}>
                  <p>Author: {author ?? ''} </p>
                  <p>{content ?? ''} </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
