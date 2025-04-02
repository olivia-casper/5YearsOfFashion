import "./css/PolaroidCard.css";

function PolaroidCard({ imgSrc, alt, caption, className }) {
  return (
    <div className={`polaroid ${className}`}>
      <img src={imgSrc} alt={alt} />
      <div className="caption">
        <p>{caption}</p>
        <div className="heart">♡</div>
      </div>
    </div>
  );
}

export default PolaroidCard;
