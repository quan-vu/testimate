
export interface ITestCase {
  name: string;
  type: string;
  steps: any[];
  expectations: any[];
  path?: string;
  data?: any;
  selector?: string;
}

export interface IObjectModel {
  name: string;
  url: string;
  precondition: any;
  testCases: ITestCase[];
}

export interface IProject {
  name: string;
  description?: string;
  data: any;
  objectModels: IObjectModel[];
}
