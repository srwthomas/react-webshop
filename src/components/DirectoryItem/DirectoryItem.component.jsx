import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./DirectoryItem.style.jsx";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
<<<<<<< HEAD
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

        <div className="body">
          <a href={`/shop/${category.title}`}>
            <h2>{title.toUpperCase()}</h2>
            <p>SEE MORE</p>
          </a>
        </div>

    </div>
=======
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </Body>
    </DirectoryItemContainer>
>>>>>>> 2a62c6e5b5657d90ed7df7b8f8b642be1f39e57e
  );
};

export default DirectoryItem;
