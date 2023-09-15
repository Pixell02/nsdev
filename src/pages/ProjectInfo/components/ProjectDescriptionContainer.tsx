import ReactMarkdown from "react-markdown";
import AnimationRight from "../../../components/AnimationRight";
import useLanguage from "../../../hooks/useLanguage";
import "./projectDescriptionContainer.css";

interface projectInfoProps {
  title: string;
  descriptionPL: string | null;
  descriptionEN: string | null;
  images: { src: string }[];
}

interface props {
  projectInfo: projectInfoProps | null;
}

const ProjectDescriptionContainer = ({ projectInfo }: props) => {
  const { currentLanguage } = useLanguage();

  if (!projectInfo) {
    return null; // Możesz obsłużyć przypadek, gdy projectInfo jest null
  }

  const description =
    currentLanguage === "pl" ? projectInfo.descriptionPL : projectInfo.descriptionEN;

  return (
    <div className="description-container">
      <AnimationRight>
      <div className="title-container">
        <h1>{projectInfo.title}</h1>
      </div>
      <div className="description-content">
        {description && (
          <ReactMarkdown>{description}</ReactMarkdown>
        )}
      </div>
      </AnimationRight>
    </div>
  );
};

export default ProjectDescriptionContainer;
