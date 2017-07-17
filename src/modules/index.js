import { combineReducers } from 'redux';
import counter from './counter';
import about from './about';
import articles from './articles';

const rootReducer = combineReducers({
  counter,
  about,
  articles,
});

export default rootReducer;
