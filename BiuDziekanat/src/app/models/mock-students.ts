import { Student } from '../models/student';

export const STUDENTS: Student[] = [
  { id: 1901, name: "Jan", lastName: "Kowalski", groups: [{ id: 1, name: "GIN-W-2" }, { id: 3, name: "GIN-LAB-2" }]},
  { id: 2102, name: "Zbigniew", lastName: "Nowak", groups: []},
  { id: 2112, name: "Zbigniew", lastName: "Nowina", groups: []},
  { id: 2113, name: "Halina", lastName: "Cebulak", groups: []},
  { id: 2025, name: "Dżesika", lastName: "Szydłowska", groups: []},
  { id: 2035, name: "Michał", lastName: "Malinowski", groups: []}
];