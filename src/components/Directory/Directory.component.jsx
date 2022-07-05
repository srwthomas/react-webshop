import DirectoryItem from "../DirectoryItem/DirectoryItem.component";
import { DirectoryContainer } from "./Directory.style.jsx";

const categories = [
  {
    title: "hats",
    imageUrl:
      "https://images.unsplash.com/photo-1627733041826-77dd65dc5a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    id: 1,
    route: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1611308725032-74f0a551d018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80",
    id: 2,
    route: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl:
      "https://www.modern-notoriety.com/wp-content/uploads/2021/09/aime-leon-dore-new-balance-550-re-release-navy-grey-green.jpg",
    id: 3,
    route: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl:
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    id: 4,
    route: "shop/womens",
  },
  {
    title: "mens",
    imageUrl:
      "https://images.unsplash.com/photo-1519831444882-bd0536407b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    id: 5,
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
