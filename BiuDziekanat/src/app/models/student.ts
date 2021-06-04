import { Group } from "./group";

export interface Student {
  id: number;
  name: string;
  lastName: string;
  groups: Group[];
}
