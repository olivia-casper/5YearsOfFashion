function YearFrame({ imgSrc, caption, alt }) {
    return (
      <div className="frame">
        <img src={imgSrc} alt={alt} />
        <p>{caption}</p>
      </div>
    );
  }
  
  export default YearFrame;
  