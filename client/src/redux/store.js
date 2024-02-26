import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"; // Import persistReducer
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Fix typo here

export const store = configureStore({
  reducer: persistedReducer, // Simplify reducer configuration
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Move middleware configuration outside of reducer
});

export const persistor=persistStore(store)