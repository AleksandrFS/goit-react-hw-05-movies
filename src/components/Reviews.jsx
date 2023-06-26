import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'fetchFilmsUtils/fetchFilmData';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
       
      } catch (error) {}
    };
    getReviews();
  }, [movieId]);

//   const { author, content, id } = reviews;
//   console.log(author);

  return (
    <div>
      <ul>
        {reviews &&
          reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Reviews;
