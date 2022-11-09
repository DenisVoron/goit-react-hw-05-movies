import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e338843fab235d92204cc1e536c80b21';

const Reviews = () => {

    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        function fetchMovie() {
            fetch(`${API_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
                .then(response => response.json())
                .then(data => {
                    setReviews(data.results.map(({ author_details, content }) => ({
                        author: author_details.username,
                        content: content,
                    }))
                    );
                });
        }

        fetchMovie();
    }, [id]);

    return (
        <>
            {reviews.length > 0
                ? (<section>
                    <ul>
                        {reviews.map(({ author, content }, index) => {
                            return (
                                <li key={index}>
                                    <p>Author: {author}</p>
                                    <p>{content}</p>
                                </li>
                            );
                        })}
                    </ul>
                </section>)
                : (<p>We don't have any reviews for this movie.</p>)}
        </>
    );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;