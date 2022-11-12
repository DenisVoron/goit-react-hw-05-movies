import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviews } from "../../services/fetch-api";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetchReviews(id)
            .then(data => {
                    setReviews(data.results.map(({ author_details, content }) => ({
                        author: author_details.username,
                        content: content,
                    }))
                    );
            })
            .catch(error => console.log(error));
        
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