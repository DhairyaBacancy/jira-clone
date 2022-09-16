import { configureStore } from '@reduxjs/toolkit';

import issueListReducer from './slice/issueSlice';

const store = configureStore({
  reducer: {
    issues: issueListReducer
  }
});

export default store;
