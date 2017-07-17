import { connect } from 'react-redux';
import {
  fetchArticles,
  getArticles
} from '../modules/articles';

import Home from '../components/Home';
import Table from '../components/Table';


const mapDispatchToProps = {
  articles: fetchArticles()
};

const mapStateToProps = (state) => {
  return {
    articles: () => getArticles(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
