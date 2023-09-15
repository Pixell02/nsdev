import ContentContainer from "../../components/ContentContainer";
import LoadingScreen from "../../components/LoadingScreen";
import Navbar from "../../components/Navbar";
import PageContainer from "../../components/PageContainer";
import ImagesContainer from "./components/ImagesContainer";
import ProjectDescriptionContainer from "./components/ProjectDescriptionContainer";
import useProjectInfoContext from "./hooks/useProjectInfoContext";
import "./projectInfo.css";

const ProjectInfo = () => {
  const { isLoaded, projectInfo } = useProjectInfoContext();
  return (
    <PageContainer>
      {!isLoaded && <LoadingScreen />}
      {isLoaded && (
        <>
          <Navbar />
          <ContentContainer>
            <div className="project-information-container">
              <ImagesContainer projectInfo={projectInfo?.images} />
              <ProjectDescriptionContainer projectInfo={projectInfo} />
            </div>
          </ContentContainer>
        </>
      )}
    </PageContainer>
  );
};

export default ProjectInfo;
