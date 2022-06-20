import DirectoryItem from "../DirectoryItem/DirectoryItem.component";
import "./Directory.style.sass";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
