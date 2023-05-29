const models = require("../models");

const browse = (req, res) => {
  models.articles
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.articles
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const articles = req.body;

  // TODO validations (length, format...)

  articles.id = parseInt(req.params.id, 10);

  models.articles
    .update(articles)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  const articles = req.body;

  try {
    // 1ère étape : insérer une image
    const image = await models.images.insert(articles.src, articles.alt);

    // 2ème étape : récupérer son id
    const article = await models.articles.insert(articles, image[0].insertId);
    // 3ème étape : insérer l'article avec l'id de l'image
    res
      .status(201)
      .json({ ...articles, id: article[0].insertId, image_id: image });
    // 4ème étape : renvoyer les infos
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
  // TODO validations (length, format...)

  // models.articles
  //   .insert(articles)
  //   .then(([result]) => {
  //     res.location(`/articles/${result.insertId}`).sendStatus(201);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.sendStatus(500);
  //   });
  res.sendStatus(201);
};

const destroy = (req, res) => {
  models.articles
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
