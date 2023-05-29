import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// import articles from "@assets/data.json";

function OneArticle() {
  const { id } = useParams();

  const [article, setArticle] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/articles/${id}`)
      .then((res) => res.json())
      .then((art) => setArticle(art))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      {article && (
        <>
          <Helmet>
            <title>{article.title} - Mon blog photo</title>
            <meta name="description" content={article.resume} />
          </Helmet>
          <div className="row mx-4 my-4">
            <h2 className="text-center text-secondary">{article.title}</h2>
            <h4 className="text-center">{article.subtitle}</h4>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                src={article.src}
                alt={article.alt}
                className="w-100 rounded-2 shadow-sm"
              />
              <div className="text-center">
                <p>{article.resume}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OneArticle;
