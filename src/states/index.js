import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import threadDetailReducer from './threadDetail/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import commentsReducer from './comments/reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    isPreload: isPreloadReducer,
    comments: commentsReducer,
    authUser: authUserReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
