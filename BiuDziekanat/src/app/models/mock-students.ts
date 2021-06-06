import { Student } from '../models/student';

export const STUDENTS: Student[] = [
  {
    id: 1901,
    name: "Jan",
    lastName: "Kowalski",
    groups: [
      { id: 1, name: "GIN-W-2" },
      { id: 2, name: "GIN-LAB-1" },
      { id: 3, name: "GIN-LAB-2" }
    ]
  },
  {
    id: 2102,
    name: "Zbigniew",
    lastName: "Nowak",
    groups: [
      { id: 0, name: "GIN-W-1" },
      { id: 1, name: "GIN-W-2" },
      { id: 3, name: "GIN-LAB-2" }
    ]
  },
  {
    id: 2112,
    name: "Zbigniew",
    lastName: "Nowina",
    groups: [
      { id: 2, name: "GIN-LAB-1" },
      { id: 3, name: "GIN-LAB-2" }
    ]
  },
  {
    id: 2113,
    name: "Halina",
    lastName: "Cebulak",
    groups: [
      { id: 0, name: "GIN-W-1" },
      { id: 3, name: "GIN-LAB-2" }
    ]
  },
  {
    id: 2025,
    name: "Dżesika",
    lastName: "Szydłowska",
    groups: [
      { id: 0, name: "GIN-W-1" },
      { id: 1, name: "GIN-W-2" },
      { id: 2, name: "GIN-LAB-1" },
      { id: 3, name: "GIN-LAB-2" },
      { id: 4, name: "GIN-CW-1" }
    ]
  },
  {
    id: 2035,
    name: "Michał",
    lastName: "Malinowski",
    groups: []
  }
];