import ReactStars from "react-rating-stars-component";
import React from "react";

export const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <ReactStars
      value={rating}
      isHalf={true}
      count={5}
      size={24}
      activeColor="#ffd700"
      edit={false}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
    />
  );
};
