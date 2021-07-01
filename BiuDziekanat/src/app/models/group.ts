import { Course } from 'src/app/models/course';

export interface Group {
    id: number;
    name: string;
    courses: Course[];
}
