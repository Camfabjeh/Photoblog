import React from "react";

function ArticleAdmin() {
  return (
    <div className="container">
      <form className="row">
        <label htmlFor="">
          Titre
          <input type="text" required minLength={5} maxLength={255} />
        </label>
        <label htmlFor="">
          Sous-titre
          <input type="text" required minLength={5} maxLength={255} />
        </label>
        <label htmlFor="">
          Résumé
          <textarea required minLength={5} />
        </label>
        <label htmlFor="">
          Source image
          <input type="text" required minLength={5} />
        </label>
        <label htmlFor="">
          Texte alternatif
          <input type="text" required minLength={1} maxLength={255} />
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
