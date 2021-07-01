import { Course } from '../models/course';

const COURSENAMES: string[] = [
  "GRK-1","GRK-2","JAZ-1","JAZ-2","PAMO-1","PAMO-2","SAD-1","SAD-2","TAU-1","TAU-2","MAS-1","MAS-2","ANG-1","ANG-2","ANG-3","ANG-4","ANG-5","ANG-6",
  "HKJ-1","HKJ-2","HKJ-3","HKJ-4","HIS-1","HIS-2","HIS-3","HIS-4","HIS-5","HIS-6","BIU-1","BIU-2","BIU-3","BIU-4","DOT-1","DOT-2","MAD-1","MAD-2",
  "FIZ-1","FIZ-2","FIZ-3","FIZ-4","RBD-1","RBD-2","RBD-3","RBD-4"
];

let generateMockCourses = (names: string[]) => {
  let result: Course[] = [];
  names.sort();

  for (let i = 0; i < names.length; i++) {
    result.push({ id: i, name: names[i] });
  }
  return result;
} 

export const COURSES: Course[] = generateMockCourses(COURSENAMES);