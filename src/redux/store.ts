import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo-slice';

export const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
