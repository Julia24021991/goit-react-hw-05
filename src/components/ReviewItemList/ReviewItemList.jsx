import { ReviewItem } from '../ReviewItem/ReviewItem';

export const ReviewItemList = ({ reviews }) => {
  return (
    <ul>
      {reviews &&
        reviews.map(review => (
          <li key={review.id}>
            <ReviewItem review={review} />
          </li>
        ))}
    </ul>
  );
};
