import { Group } from '../models/group';

const GROUPNAMES: string[] = [
  "GIN-W-1","GIN-W-2","GIN-W-3","GIN-CW-1","GIN-CW-2","GIN-CW-3","GIN-CW-4","GIN-CW-5","GIN-CW-6","GIN-LAB-1","GIN-LAB-2","GIN-LAB-3",
  "GIN-LAB-4","GNM-W-1","GNM-W-2","GNM-W-3","GNM-W-4","GNM-CW-1","GNM-CW-2","GNM-CW-3","GNM-CW-4","GNM-CW-5","GNM-CW-6","GNM-CW-7",
  "GNM-LAB-1","GNM-LAB-2","GNM-LAB-3","GNM-LAB-4","GNM-LAB-5","GNM-LAB-6"
]

let generateMockGroups = (names: string[]) => {
  let result: Group[] = [];

  for (let i = 0; i < names.length; i++) {
    result.push({ id: i, name: names[i] });
  }
  return result;
} 

export const GROUPS: Group[] = generateMockGroups(GROUPNAMES);