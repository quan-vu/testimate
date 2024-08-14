import { getProjects } from "../data/dataloader";
import { project1 } from "../data/project-1.testimate";
import AutoForm from "./components/AutoForm/AutoForm";

const App = () => {
  // const projects: IProject[] = getProjects();
  // const activeProject: IProject = projects[0];
  return (
    <div>
      <h1>Main</h1>
      <AutoForm project={project1} />
    </div>
  );
};

export default App;
