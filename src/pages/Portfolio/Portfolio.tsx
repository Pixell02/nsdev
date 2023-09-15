import AnimationTop from "../../components/AnimationTop";
import ContentContainer from "../../components/ContentContainer";
import LoadingScreen from "../../components/LoadingScreen";
import Navbar from "../../components/Navbar";
import PageContainer from "../../components/PageContainer";
import TransitionText from "../Home/TransitionText";
import ProjectBlock from "./components/ProjectBlock";
import useProjectsContext from "./hooks/useProjectsContext";





const Portfolio = () => {
  const words = ["Realizacje"];
  const {isLoaded, projects} = useProjectsContext();
  return (
    <PageContainer>
      {!isLoaded && <LoadingScreen />}
      {isLoaded && (
        <>
        <Navbar />
      <ContentContainer>
        <div style={{ marginLeft: "20px", height: "50px" }}>
          <TransitionText words={words} />
        </div>
        <div className="d-flex flex-wrap flex-row">
          {projects?.map((project, i: number) => (
            <AnimationTop key={i} delay={0.35 * i}> 
            <ProjectBlock
              key={i}
              id={project.id.toString()}
              img={project.image} 
              name={project.name}
            />
            </AnimationTop>
          ))}
        </div>
      </ContentContainer>
      </>
      )}
      
    </PageContainer>
  );
};

export default Portfolio;
