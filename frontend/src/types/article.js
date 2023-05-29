import PropTypes from "prop-types";

const ArticleType = {
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  resume: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
};

export default ArticleType;
