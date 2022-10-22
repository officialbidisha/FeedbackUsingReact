import { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = (props) => {
  const { numberOfStars } = props;
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(numberOfStars)].map((star, index) => {
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={index + 1}
              onClick={(e) => {
                setRating(index + 1);
              }}
            ></input>
            <FaStar
              onMouseEnter={(e) => {
                setHover(index + 1);
              }}
              onMouseLeave={(e) => setHover(null)}
              color={index + 1 <= (hover || rating) ? "orange" : "black"}
            ></FaStar>
          </label>
        );
      })}
    </div>
  );
};
export default StarRating;
