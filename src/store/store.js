// import { createStore, compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// const middleware = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleware));

// export const store = createStore(rootReducer, undefined, composedEnhancers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});
