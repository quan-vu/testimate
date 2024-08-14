import { IObjectModel, IProject, ITestCase } from "../../types/project.type";

interface AutoFormProps {
  project: IProject;
}

const AutoForm = (props: AutoFormProps) => {
  const { project } = props;

  const renderTestCases = (testCases: ITestCase[]) => {
    return (
      <div>
        <div>Test Cases</div>
        <div>
          {testCases.map((testCase, index) => (
            <div key={index}>
              <div>{testCase.name}</div>
              <div>
                <div>Steps</div>
                <div>
                  {testCase.steps.map((step, index) => (
                    <div key={index}>{step.name}</div>
                  ))}
                </div>
              </div>
              <div>
                <div>Expectations</div>
                <div>
                  {testCase.expectations.map((expectation, index) => (
                    <div key={index}>{expectation.name}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3>{project.name}</h3>

      <div>
        <div>Object Models</div>
        <div>
          {project.objectModels.map((objectModel, index) => (
            <div key={index}>
              <div>{objectModel.name}</div>
              <div>
                <div>Test Cases</div>
                <div>{renderTestCases(objectModel.testCases)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoForm;
