import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "./projectBlock.css";
interface Props {
  name: string;
  img: string;
  id: string;
}



const ProjectBlock = (props: Props) => {
  return (
    <div className="item-block">
      <Link to={props.id}>
      <div className="images-container">
        <img src={props.img} alt="err" />
      </div>
      <div className="name-container">
        <p className="animated-text">{props.name}</p>
        <div className="d-flex justify-content-end">
          <div className="arrow-container">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProjectBlock;
