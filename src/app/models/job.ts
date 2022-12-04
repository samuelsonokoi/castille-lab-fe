export interface IJob {
  image: string;
  title: string;
  company: string;
  requirements: IRequirement[];
  tags: string[];
}

export interface IRequirement {
  icon: string;
  requirement: string;
}
