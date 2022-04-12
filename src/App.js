import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component.jsx";
import Navigation from "./routes/Navigation/Navigation.component.jsx";
import Auth from "./routes/Auth/Auth.component.jsx";
import Shop from "./routes/Shop/Shop.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
