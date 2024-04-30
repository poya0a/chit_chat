import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import loadingSlice from "@components/common/loadingSlice";
import statusSlice from "@components/layouts/slices/statusSlice";
import chatRoomSlice from "@components/pages/ChatRoom/chatRoomSlice";
import alertPopupSlice from "@components/common/popup/alertPopupSlice";

const rootReducer = combineReducers({
  alertPopup: alertPopupSlice.reducer,
  loading: loadingSlice.reducer,
  status: statusSlice.reducer,
  chatRoom: chatRoomSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

type RootState = ReturnType<typeof store.getState>;
type AppDispath = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispath>();

export default store;
