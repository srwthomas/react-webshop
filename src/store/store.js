// import { createStore, compose, applyMiddleware } from "redux";
import { compose, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import { loggerMiddleware } from "./middleware/logger";

import { rootReducer } from "./root-reducer";

//USING createStore
// const middleware = [logger];
// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));
// export const store = createStore(rootReducer, undefined, composedEnhancers);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [process.env.NODE_ENV !== "production" && logger, thunk].filter(
    Boolean
  ),
});

export const persistor = persistStore(store);
