import { Link } from "react-router-dom";
import "./css/Pagination.css"; // optional

function Pagination({ prevLink, nextLink }) {
  return (
    <div className="pagination">
      <div className="prev">
        <Link to={prevLink}>Previous</Link>
      </div>
      <div className="next">
        <Link to={nextLink}>Next</Link>
      </div>
    </div>
  );
}

export default Pagination;
