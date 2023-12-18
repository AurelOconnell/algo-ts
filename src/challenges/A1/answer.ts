export interface Student {
    name: string;
    age: number;
} // name export, se fait avec un name import
export default interface Test {
    name: string;
} // default export, se fait avec un default import
/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 * 
 * @param students Unsorted list of students
 * @returns Sorted list of students

 */

export default function ({ students }: { students: Student[] }): Student[] {
    students.sort((a, b) => a.age - b.age );

    students.sort((a, b) => {
        if (a.age === b.age) {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    return students;
}