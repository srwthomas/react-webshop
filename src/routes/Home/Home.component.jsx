import { Outlet } from "react-router-dom";
import Directory from "../../components/Directory/Directory.component";

const Home = () => {
  const categories = [
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1602337871614-a2bf032f4701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: 1,
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      id: 2,
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1588273565869-a06552c35ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      id: 3,
    },
    {
      title: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: 4,
    },
    {
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: 5,
    },
  ];
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
