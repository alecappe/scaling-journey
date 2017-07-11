// ------------------------------------
// Constants

const BASE_URL = 'http://localhost:5000';
const ARTICLES_FETCH_SUCCESS = 'ARTICLES_FETCH_SUCCESS';
const ARTICLES_FETCH_FAILURE = 'ARTICLES_FETCH_FAILURE';
const POST_ARTICLE = 'POST_ARTICLE';
const DELETE_ARTICLE = 'DELETE_ARTICLE';

// ------------------------------------
// Action creators

function fetchArticlesSuccess(articles) {
  return {
    type: ARTICLES_FETCH_SUCCESS,
    payload: articles
  }
}

function fetchArticlesFailure(errmessage) {
  return  {
    type: ARTICLES_FETCH_FAILURE,
    payload: errmessage
  }
}

export function postArticle() {
  return {
    type: POST_ARTICLE
  }
}

export function deleteArticle() {
  return {
    type: DELETE_ARTICLE
  }
}

export function fetchArticles() {
  return dispatch => {
    fetch(`${BASE_URL}/articles/`)
    .then(response => {
      if (response.ok)
        return response.json();
      throw new Error('Problem fetching the articles');
    })
    .then(jsonData => dispatch(fetchArticles(jsonData)))
    .catch(error => dispatch(fetchArticlesFailure(error.message)));

  }
}

// ------------------------------------
// Selectors

export const getArticles = state => state.articles;

// ------------------------------------
// Store & reducer

const initialState = {
  articles: [{
    aid: '',
    title: '',
    content: ''
  }]
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case ARTICLES_FETCH_SUCCESS:
    return {
      ...state,
      articles: state.articles
    };
  case ARTICLES_FETCH_FAILURE:
    return {
      ...state,
      articles: state.articles
    }
  default:
    return state;
  }
}
