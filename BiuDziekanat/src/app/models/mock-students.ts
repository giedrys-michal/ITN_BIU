import { Student } from 'src/app/models/student';
import { Group } from 'src/app/models/group';
import { GROUPS } from 'src/app/models/mock-groups';

const NAMES: string[] = [
  "Roman","Bolesław","Adam","Oskar","Dawid","Julian","Bogumił","Jerzy","Fryderyk","Cezary","Alan","Kazimierz","Kacper","Bogumił","Jędrzej",
  "Miron", "Ireneusz","Roman","Aleksy","Jerzy","Alfred","Cyprian","Joachim","Dobromił","Maurycy","Marcin","Kajetan","Janusz","Marek","Eryk",
  "Krystian","Paweł", "Józef","Ariel","Jacek","Oskar","Mateusz","Jędrzej","Alex","Bartłomiej","Adam","Eugeniusz","Karol","Miron","Rafał",
  "Emanuel","Kewin","Jacek","Mieszko","Joachim","Elena","Monika","Żaneta","Marzanna","Agata","Aneta","Barbara","Ilona","Andżelika","Jola",
  "Alisa","Idalia","Blanka","Maja","Elwira","Klara","Stefania","Emilia","Martyna","Alicja","Oksana","Kornelia","Eleonora","Patrycja","Eliza",
  "Blanka","Malwina","Jolanta","Izyda","Mirosława","Katarzyna","Milena","Pamela","Andżelika","Marcelina","Cecylia","Alice","Faustyna","Martyna",
  "Bogumiła","Iza","Daria","Amanda","Bogusława","Marcela","Marlena","Celina","Małgorzata","Anastazja","Danuta"
];

const LASTNAMES: string[] = [
  "Jędrzejak","Żołnowski","Kupis","Kajzer","Gunia","Rychlewski","Drabek","Kolasa","Soćko","Ożarowski","Pietraszek","Wieczorkowski","Celej",
  "Anders","Kwas","Marchel","Wachowski","Konopko","Hajduk","Piskorski","Sokal","Pocheć","Paterek","Siwiec","Szala","Sobkowiak","Danowski",
  "Rabenda","Winiarz","Byrski","Gozdek","Piętak","Postek","Pluta","Owczarczyk","Leszczyński","Beczek","Półtorak","Roszkowski","Kusa","Ciura",
  "Cupiał","Gwiazdowski","Gruszecki","Zientek","Wasielewski","Sas","Gutowski","Kotynia","Muzyka","Andrzejewski","Kucharski","Górski","Szymański",
  "Borkowski","Michalak","Pawlak","Głowacki","Błaszczyk","Głowacki","Wasilewski","Chmielewski","Cieślak","Kaźmierczak","Ostrowski","Jankowski",
  "Kołodziej","Kaźmierczak","Mazurek","Zieliński","Bąk","Kalinowski","Borkowski","Kucharski","Duda","Kamiński","Gajewski","Witkowski","Błaszczyk",
  "Kubiak","Błaszczyk","Cieślak","Krajewski","Kalinowski","Górski","Szczepański","Laskowski","Wójcik","Kwiatkowski","Kubiak","Mazurek","Kucharski",
  "Urbański","Adamski","Lewandowski","Lewandowski","Głowacki","Jankowski","Witkowski","Dąbrowski"
];

let generateMockStudents = (count: number, names: string[], lastNames: string[], groups: Group[]) => {
  let result: Student[] = [];

  for (let i = 0; i < count; i++) {
    let generatedId = generateId(i);
    let generatedName = generateName(names);
    let generatedLastName = generateLastName(lastNames);
    let generatedGroups = generateGroups(groups);

    let student: Student = generateStudent(generatedId, generatedName, generatedLastName, generatedGroups);

    result.push(student);
  }

  return result;
}

let generateStudent = (id: number, name: string, lastName: string, groups: Group[]) => {
  return { id: id, name: name, lastName: lastName, groups: groups }
}

let generateId = (studentIndex: number) => {
  let yearLastTwoDigitsIndexPrefix = new Date().getFullYear().toString().slice(2);
  let index = ('000' + studentIndex).slice(-3);
  let fullIndex = Number.parseInt(yearLastTwoDigitsIndexPrefix.concat(index));

  return fullIndex;
}

let generateName = (names: string[]) => {
  let randomIndex = Math.floor( Math.random() * names.length );
  return names[randomIndex];
}

let generateLastName = (lastNames: string[]) => {
  let randomIndex = Math.floor( Math.random() * lastNames.length );
  return lastNames[randomIndex];
}

let generateGroups = (groups: Group[]) => {
  let result: Group[] = [];

  // get random group count - random from 1 to (groups.length - 1)
  let upperGroupRangeBoundary = 1 + Math.floor( Math.random() * (groups.length - 1) );

  for (let i = 0; i < upperGroupRangeBoundary; i++) {
    let randomGroupIndex = Math.floor( Math.random() * groups.length );
    result.push(groups[randomGroupIndex]);
  }

  result.sort((a, b) => a.id - b.id);

  for (let i = 1; i < result.length; i++) {
    if (result[i-1] == result[i]) {
      result.splice(i, 1);
    }
  }

  return result;
}

export const STUDENTS: Student[] = generateMockStudents(40, NAMES, LASTNAMES, GROUPS);
