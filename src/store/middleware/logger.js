// Our own logger middleware

export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    next(action);
  }
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("current tate: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};
