// import { createStore, compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// Our own logger middleware
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     next(action);
//   }
//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("current tate: ", store.getState());

//   next(action);

//   console.log("next state: ", store.getState());
// };

// const middleware = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleware));

// export const store = createStore(rootReducer, undefined, composedEnhancers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});
