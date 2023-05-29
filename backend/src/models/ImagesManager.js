const AbstractManager = require("./AbstractManager");

class ImagesManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  insert(src, alt) {
    return this.database.query(
      `insert into ${this.table} (src, alt) values (?, ?)`,
      [src, alt]
    );
  }

  update(images) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [images.title, images.id]
    );
  }
}

module.exports = ImagesManager;
