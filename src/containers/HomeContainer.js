import { connect } from 'react-redux';
import {
  fetchArticles,
  deleteArticle,
  postArticle,
  getArticles
} from '../modules/articles';

import Home from '../components/Home';


const mapDispatchToProps = {
  fetchArticles: () => fetchArticles(),
  deleteArticle: deleteArticle,
  postArticle: postArticle,
};

const mapStateToProps = (state) => {
  return {
    articles: getArticles(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
