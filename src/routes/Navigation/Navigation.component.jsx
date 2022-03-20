import { Outlet } from "react-router-dom";
import "./Navigation.style.sass";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>This is the navbar</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
