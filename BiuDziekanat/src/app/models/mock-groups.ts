import { Group } from 'src/app/models/group';
import { Course } from 'src/app/models/course';
import { COURSES } from 'src/app/models/mock-courses';

const GROUPNAMES: string[] = [
  "GIN-W-1","GIN-W-2","GIN-W-3","GIN-CW-1","GIN-CW-2","GIN-CW-3","GIN-CW-4","GIN-CW-5","GIN-CW-6","GIN-LAB-1","GIN-LAB-2","GIN-LAB-3",
  "GIN-LAB-4","GNM-W-1","GNM-W-2","GNM-W-3","GNM-W-4","GNM-CW-1","GNM-CW-2","GNM-CW-3","GNM-CW-4","GNM-CW-5","GNM-CW-6","GNM-CW-7",
  "GNM-LAB-1","GNM-LAB-2","GNM-LAB-3","GNM-LAB-4","GNM-LAB-5","GNM-LAB-6"
]

let generateMockGroups = (names: string[], courses: Course[]) => {
  let result: Group[] = [];

  for (let i = 0; i < names.length; i++) {
    let generatedCourses = generateCourses(courses);
    let group: Group = { id: i, name: names[i], courses: generatedCourses };

    result.push(group);
  }
  
  return result;
}

let generateCourses = (courses: Course[]) => {
  let result: Course[] = [];

  // get random course count - random from 1 to (courses.length - 1)
  let upperCourseRangeBoundary = 1 + Math.floor( Math.random() * (courses.length - 1) );

  for (let i = 0; i < upperCourseRangeBoundary; i++) {
    let randomGroupIndex = Math.floor( Math.random() * courses.length );
    result.push(courses[randomGroupIndex]);
  }

  result.sort((a, b) => a.id - b.id);

  for (let i = 1; i < result.length; i++) {
    if (result[i-1] == result[i]) {
      result.splice(i, 1);
    }
  }

  return result;
}

export const GROUPS: Group[] = generateMockGroups(GROUPNAMES, COURSES);