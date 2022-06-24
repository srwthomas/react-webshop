import "./DirectoryItem.style.sass";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
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
  );
};

export default DirectoryItem;
