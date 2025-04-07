import { useState } from "react";
import "./css/PolaroidCard.css";

function PolaroidCard({ imgSrc, alt, caption, className }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={`polaroid ${className}`}>
      <img src={imgSrc} alt={alt} />
      <div className="caption">
        <p>{caption}</p>
        <div
          className={`heart ${liked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          {liked ? "♥" : "♡"}
        </div>
      </div>
    </div>
  );
}

export default PolaroidCard;
