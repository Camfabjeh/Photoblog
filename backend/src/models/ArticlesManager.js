const AbstractManager = require("./AbstractManager");

class ArticlesManager extends AbstractManager {
  constructor() {
    super({ table: "articles" });
  }

  findAll() {
    return this.database.query(
      `select a.id, a.title, i.src, i.alt from  ${this.table} as a inner join images as i on i.id = a.image_id`
    );
  }

  find(id) {
    return this.database.query(
      `select a.title, a.subtitle, a.resume, i.src, i.alt from  ${this.table} as a inner join images as i on i.id = a.image_id where a.id = ?`,
      [id]
    );
  }

  insert(article, imageId) {
    return this.database.query(
      `insert into ${this.table} (title, subtitle, resume, author, image_id) values (?, ?, ?, ?, ?)`,
      [article.title, article.subtitle, article.resume, article.author, imageId]
    );
  }

  update(articles) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [articles.title, articles.id]
    );
  }
}

module.exports = ArticlesManager;
