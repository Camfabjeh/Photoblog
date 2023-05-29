import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ArticleCard from "@components/ArticleCard";
// import articles from "@assets/data.json";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/articles`)
      .then((res) => res.json())
      .then((art) => setArticles(art))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="container">
      <Helmet>
        <title>Tous mes reportages - Mon blog photo</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      </Helmet>
      <div className="row" />
      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </section>
  );
}

export default Articles;
