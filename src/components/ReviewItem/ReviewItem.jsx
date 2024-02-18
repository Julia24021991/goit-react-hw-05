export const ReviewItem = ({ review: { author, content } }) => {
  return (
    <div>
      <p>Author: {author}</p>
      <p>Content: {content}</p>
    </div>
  );
};
