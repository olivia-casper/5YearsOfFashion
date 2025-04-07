import "./css/CenterContent.css";

function CenterContent({ paragraphTop, paragraphBottom, imgSrc, imageAlt }) {
  return (
    <div className="center-section">
      <p>{paragraphTop}</p>
      <hr className="dotted" />
      <div className="bottom-content">
        {paragraphBottom && <p>{paragraphBottom}</p>}
        {imgSrc && (
          <img src={imgSrc} alt={imageAlt} />
        )}
      </div>
    </div>
  );
}

export default CenterContent;
