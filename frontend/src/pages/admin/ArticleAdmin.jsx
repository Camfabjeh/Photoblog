import React, { useState } from "react";

function ArticleAdmin() {
  const [article, setArticle] = useState({
    title: "",
    subtitle: "",
    resume: "",
    src: "",
    alt: "",
    tags: [],
  });

  const handleArticle = (name, value) => {
    setArticle({ ...article, [name]: value });
  };

  const postArticle = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/articles`, {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.info(json))
      .catch((err) => console.error(err));
  };
  return (
    <div className="container">
      <form className="row" onSubmit={(event) => postArticle(event)}>
        <label htmlFor="">
          Titre
          <input
            type="text"
            required
            minLength={5}
            maxLength={255}
            name="title"
            onChange={(e) => handleArticle(e.target.name, e.target.value)}
            value={article.title}
          />
        </label>
        <label htmlFor="">
          Sous-titre
          <input
            type="text"
            required
            minLength={5}
            maxLength={255}
            name="subtitle"
            onChange={(e) => handleArticle(e.target.name, e.target.value)}
            value={article.subtitle}
          />
        </label>
        <label htmlFor="">
          Résumé
          <textarea
            required
            minLength={5}
            name="resume"
            onChange={(e) => handleArticle(e.target.name, e.target.value)}
            value={article.resume}
          />
        </label>
        <label htmlFor="">
          Source image
          <input
            type="text"
            required
            minLength={5}
            name="src"
            onChange={(e) => handleArticle(e.target.name, e.target.value)}
            value={article.src}
          />
        </label>
        <label htmlFor="">
          Texte alternatif
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="alt"
            onChange={(e) => handleArticle(e.target.name, e.target.value)}
            value={article.alt}
          />
        </label>
        <label htmlFor="">
          Liste de tags
          {/* récupérer la liste des tags existants pour les afficher */}
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default ArticleAdmin;
