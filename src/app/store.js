import { configureStore } from '@reduxjs/toolkit'
import playingReducer from '../features/playing/playingSlice'
import likeReducer from '../features/like/likeSlice'
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  like: likeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    playing: playingReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
