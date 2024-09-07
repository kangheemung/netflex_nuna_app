import "./MovieReview.style.css";
import React , { useState } from 'react';
import {Alert , Spinner, Button} from 'react-bootstrap';
import { useReviewMovieQuery } from '../../../hook/useMovieReview';

const MovieReview = ({id}) => {
  const [expandedReviews, setExpandedReviews] = useState([]);
  const {
    data: reviewData,
    isLoading,
    isError,
    error
  } = useReviewMovieQuery({id});
  console.log("reviewData",reviewData);

  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner
        animation="border"
        variant="danger"
        style={{width: "5rem", height:"5rem"}}/>
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  const toggleExpandReview = (reviewId) => {
    if (expandedReviews.includes(reviewId)) {
      setExpandedReviews(expandedReviews.filter(id => id !== reviewId));
    } else {
      setExpandedReviews([...expandedReviews, reviewId]);
    }
  };
  return (
    <>
    <div>
      <h3 className="review-title">Reviews</h3>
      {reviewData.results.length === 0 ? (
        <div className="review-wrapper no-review">No Review</div>
      ) : (
        <div>
          {/* Displaying the authors of each review */}
          {reviewData.results.map((result) => (
            <div key={result.id} className="review_contant">
            <div>{result.author}{" "}</div>
            <div>
            {expandedReviews.includes(result.id) ? result.content :
             `${result.content.slice(0, 200)}...` }
             <div style={{ display: 'flex', justifyContent: 'flex-end',margin:"1em" }}>
                <Button variant="outline-danger"  style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }} onClick={() => toggleExpandReview(result.id)}>
                  {expandedReviews.includes(result.id) ? " Read Less" : " Read More"}
                </Button>
              </div>
            </div>
            <div>{String(result.created_at).substring(0, 10)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default MovieReview
