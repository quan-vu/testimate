import { IProject } from "../../types/project.type";

interface AutoFormProps {
  project: IProject;
}

const AutoForm = (props: AutoFormProps) => {
  const { project } = props;

  return (
    <div>
      <h3>{project.name}</h3>
    </div>
  );
};

export default AutoForm;
