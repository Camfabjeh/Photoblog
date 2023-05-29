/** supprime les tables si elles existent déjà, et les lister dans l'ordre inverse */

DROP TABLE IF EXISTS tags_to_articles;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS tags; 
DROP TABLE IF EXISTS images;

CREATE TABLE images (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  src VARCHAR(255),
  alt VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO images(src, alt) VALUES('https://static.wixstatic.com/media/24e398_7927f5bdc53b4bcc9d820f2d5621f715~mv2.jpg/v1/fill/w_1132,h_756,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/24e398_7927f5bdc53b4bcc9d820f2d5621f715~mv2.jpg','Sissi epate une des residentes de l EHPAD'), ('https://static.wixstatic.com/media/f43047_c38bbd6fa8fa4b57a51945171d40947e~mv2.jpg/v1/fill/w_363,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Shibumi_cours_collectif_novembre_2022_26.jpg','Explication des gestes par la ceramiste'), ('https://static.wixstatic.com/media/df36b9_2e2243de1a1543c9b042d66734b3d44f~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_1903,h_1115,al_c,q_90,usm_1.20_1.00_0.01,enc_auto/df36b9_2e2243de1a1543c9b042d66734b3d44f~mv2_d_6016_4016_s_4_2.jpg','Tarte au citron meringuee');

CREATE TABLE articles (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255),
  resume LONGTEXT,
  author VARCHAR(255),
  image_id int,
  CONSTRAINT image_id_fk FOREIGN KEY (image_id) REFERENCES images(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO articles(title,subtitle,resume,author, image_id) VALUES ('Des clowns à l''hôpital','Les clowns de l''association le Nez à l''Ouest ont rendu visite aux personnes âgées accueillies à l''EHPAD de la Gaubretière','C''est lors de l''été 2020 que j''ai accompagné Sissi et Eugène lors d''une de leurs visites mensuelles auprès des personnes âgées accueillies au sein de l''EHPAD de la Gaubretière, en Vendée','Camille Fabry', 1), ('Des mains qui façonnent (et ça me fascine)','La céramiste Caroline, de l''atelier Shibumi, explique les gestes à l''une de ses stagiaires','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Camille Fabry', 2), ('Un aller simple vers le miam','Mathilde, traiteure pour ma Cantine Buissonnière','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Camille Fabry', 3);

CREATE TABLE tags (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  label VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO tags(label) VALUES ('clowns'), ('EHPAD') ,('photographie'), ('céramiste'), ('stage de céramique'), ('traiteur'), ('pornfood');

CREATE TABLE tags_to_articles(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  tag_id INTEGER,
  article_id INTEGER,
  CONSTRAINT tag_id_fk FOREIGN KEY (tag_id) REFERENCES tags(id),
  CONSTRAINT article_id_fk FOREIGN KEY (article_id) REFERENCES articles(id)
);

INSERT INTO tags_to_articles(tag_id, article_id) VALUES (1, 1), (2,1), (3, 1), (3, 2), (3, 3), (4, 2), (5, 2), (6, 3), (7, 3);

