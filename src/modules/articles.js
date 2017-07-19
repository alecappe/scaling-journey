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

export function fetchArticles() {
  return dispatch => {
        fetch(`${BASE_URL}/articles/`)
        .then(response => {
          if (response.ok)
            return response.json();
          throw new Error('Problem fetching the articles');
        })
        .then(articles => dispatch(fetchArticlesSuccess(articles)))
        .catch(error => dispatch(fetchArticlesFailure(error.message)));
  }
}

export function postArticle({aid, title, content}) {
  return {
    type: POST_ARTICLE,
    payload: {
        aid, title, content
    }
  }
}

export function deleteArticle(aid) {
  return {
    type: DELETE_ARTICLE,
    payload: aid
  }
}


// ------------------------------------
// Selectors

export const getArticles = state => state.articles.articles;

// ------------------------------------
// Store & reducer

const initialState = {
  articles: [],
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ARTICLES_FETCH_SUCCESS:
            return {
              ...state,
              articles: action.payload,
            };
        case ARTICLES_FETCH_FAILURE:
            return {
              ...state,
              articles: action.payload,
            };
        case POST_ARTICLE:
            newArticles = state.articles.slice()
            newArticles.push(...action.payload)
            return {
                ...state,
                articles: newArticles,
            };
        case DELETE_ARTICLE:
            let newArticles = state.articles.slice();
            newArticles = newArticles.filter(e => e.aid !== action.payload);
            return {
                ...state,
                articles: newArticles,
            }
        default:
            return state;
  }
}
