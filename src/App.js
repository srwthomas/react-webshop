import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

import {
  onAuthStateChangedListener,
  createUserDoc,
} from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user.action";

import Home from "./routes/Home/Home.component.jsx";
import Navigation from "./routes/Navigation/Navigation.component.jsx";
import Auth from "./routes/Auth/Auth.component.jsx";
import Shop from "./routes/Shop/Shop.component.jsx";
import Checkout from "./routes/Checkout/Checkout.component.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDoc(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
