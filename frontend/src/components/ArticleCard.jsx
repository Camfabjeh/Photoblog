import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ArticleType from "../types/article";

function ArticleCard({ article }) {
  return (
    <div className="col-md-4 col-sm-12 d-flex">
      <div className="border m-2 p-2 rounded-1 shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="text-center">{article.title}</h2>
        <div className="p-2">
          <img
            src={article.src}
            alt={article.alt}
            className="w-100 rounded-1"
          />
          <h6 className="text-center m-2 p-2 ">{article.subtitle}</h6>
          <div>
            <Link to={`/articles/${article.id}`} className="btn btn-dark w-100">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.instanceOf(ArticleType).isRequired,
};

export default ArticleCard;
