import { Outlet } from "react-router-dom";
import Directory from "../../components/Directory/Directory.component";

const Home = () => {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
};

export default Home;
