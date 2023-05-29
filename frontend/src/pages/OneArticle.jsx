import React from "react";
import { useParams } from "react-router-dom";
import articles from "@assets/data.json";

function OneArticle() {
  const { id } = useParams();
  const article = articles.find((art) => art.id === parseInt(id, 10));
  return <div>OneArticle - {article.title}</div>;
}

export default OneArticle;
