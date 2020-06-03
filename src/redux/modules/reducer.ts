import { combineReducers } from 'redux';
import { History } from 'history';
import books from './books';
import auth from './auth';
import { connectRouter } from 'connected-react-router';

const reducer: any = (history: History) =>
  combineReducers({
    books,
    auth,
    router: connectRouter(history),
  });

export default reducer;

export type RootState = ReturnType<typeof reducer>;