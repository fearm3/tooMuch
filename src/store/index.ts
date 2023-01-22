import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import fazlaReducer from "./features/artist/fazlaSlice";

export const store = configureStore({
  reducer: {
    fazla: fazlaReducer,
  },
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
