import { getProjects } from "../data/dataloader";
import AutoForm from "./components/AutoForm/AutoForm";

const App = () => {
  const projects = getProjects();
  const activeProject = projects[0];
  return (
    <div>
      <h1>Main</h1>
      <AutoForm project={activeProject} />
    </div>
  );
};

export default App;
