import { Dance } from "./dance";
export default interface Practice {
  id: number;
  createDate: Date;
  lastPractice: Date;
  dance: Dance;
}
