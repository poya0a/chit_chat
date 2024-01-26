import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import loadingSlice from './slices/loadingSlice';
import loginSlice from '../components/pages/Login/slices/loginSlice';
import statusSlice from '../components/layouts/slices/statusSlice';
import chatRoomSlice from '../components/pages/ChatRoom/slices/chatRoomSlice';

const rootReducer = combineReducers({
  loading: loadingSlice.reducer,
  login: loginSlice.reducer,
  status: statusSlice.reducer,
  chatRoom: chatRoomSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production'
});

type RootState = ReturnType<typeof store.getState>;
type AppDispath = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispath>();

export default store;
