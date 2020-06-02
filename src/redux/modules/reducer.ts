import { combineReducers } from 'redux';
import books from './books';
import auth from './auth';
import { connectRouter } from 'connected-react-router';

const reducer = (history: any) =>
  combineReducers({
    books,
    auth,
    router: connectRouter(history),
  });

export default reducer;

export type RootState = ReturnType<typeof reducer>;