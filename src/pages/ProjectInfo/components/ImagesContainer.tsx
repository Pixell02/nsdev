import { useState } from "react";
import AnimationLeft from "../../../components/AnimationLeft";
import "./imagesContainer.css";

interface ImagesContainerProps {
  projectInfo: { src: string }[] | undefined;
}

const ImagesContainer: React.FC<ImagesContainerProps> = ({ projectInfo }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const handleCreateCircle = () => {
    if (!projectInfo) {
      return null;
    }

    const lines = [];
    for (let i = 0; i < projectInfo.length; i++) {
      lines.push(
        <div
          key={i}
          onClick={() => setSelectedImage(i)}
          className={selectedImage === i ? "selected-circle" : "selectable-circle"}
        ></div>
      );
    }
    return lines;
  };
  const handleDecrease = () => {
    if (!projectInfo) {
      return null;
    }
    if(selectedImage === 0) {
        setSelectedImage(projectInfo.length - 1);
    } else {
        setSelectedImage(selectedImage - 1);
    }
  }
  const handleIncrease = () => {
    if (!projectInfo) {
      return null;
    }
    if(selectedImage === projectInfo.length -1) {
        setSelectedImage(0);
    } else {
        setSelectedImage(selectedImage + 1);
    }
  }


  return (
    <div className="preview-container">
      <AnimationLeft>
      {projectInfo && (
        <div className="preview-block">
        <div className="preview-content">
            <img src={projectInfo[selectedImage].src} />
        </div>
        <div className="select-preview-container">
          <div className="arrow-container" onClick={handleDecrease}>{"<"}</div>
          <div className="select-circle-container">
            {handleCreateCircle()}
          </div>
          <div className="arrow-container" onClick={handleIncrease}>{">"}</div>
        </div>
      </div>
      )}
      </AnimationLeft>
      </div>
  );
};

export default ImagesContainer;
