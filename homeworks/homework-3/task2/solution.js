import { compose } from "../shared/utils.js";

/**
 * A utility class providing static methods for processing person and student data,
 * including name formatting, word filtering and sorting, grade averaging, and report generation.
 *
 * @class
 * @exports
 */
export class Task2 {

  /**
   * Returns the full name of a person by concatenating their first and last names.
   * @param {Object} person - The person object.
   * @param {string} person.firstName - The person's first name.
   * @param {string} person.lastName - The person's last name.
   * @returns {string} The full name of the person.
   */
  static getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
  }

  /**
   * Returns an array of unique words from the given text.
   * A word is considered unique if it appears exactly once in the text (case-insensitive).
   *
   * @param {string} text - The input text to extract unique words from.
   * @returns {string[]} An array of unique words found in the text.
   */
  static getUniqueWords(text) {
    let words = text.toLowerCase().match(/\b\w+\b/g) || [];
    return words.filter(
      (word, _, arr) => arr.indexOf(word) === arr.lastIndexOf(word)
    );
  }

  /**
   * Sorts an array of words in ascending alphabetical order.
   *
   * @param {string[]} words - The array of words to sort.
   * @returns {string[]} The sorted array of words.
   */
  static sortWords(words) {
    return words.sort((a, b) => a.localeCompare(b));
  }

  /**
   * Composes the getUniqueWords and sortWords methods to filter and sort unique words from an input.
   * @function
   * @param {string[]} words - The array of words to process.
   * @returns {string[]} An array of unique, sorted words.
   */
  static filterUniqueWords = compose(this.sortWords, this.getUniqueWords);

  /**
   * Calculates the average value of an array of numbers.
   *
   * @param {number[]} scores - An array of numbers to average.
   * @returns {number} The average of the numbers in the array.
   */
  static average(scores) {
    return scores.reduce((sum, s) => sum + s, 0) / scores.length;
  }

  /**
   * Calculates the average grade for each subject in the provided array.
   *
   * @param {Array<{subject: string, grades: number[]}>} subjects - An array of objects, each containing a subject name and an array of grades.
   * @returns {Array<{subject: string, average: number}>} An array of objects, each with the subject name and its calculated average grade.
   */
  static calculateSubjectAverages(subjects) {
    return subjects.map(({ subject, grades }) => ({
      subject,
      average: this.average(grades),
    }));
  }

  /**
   * Extracts all grades from an array of student objects.
   *
   * @param {Array<Object>} students - The array of student objects.
   * @param {Array<Object>} students[].subjects - The subjects taken by the student.
   * @param {Array<*>} students[].subjects[].grades - The grades for each subject.
   * @returns {Array<*>} An array containing all grades from all students and subjects.
   */
  static extractAllGrades = (students) =>
  students.flatMap(student =>
    student.subjects.flatMap(subject => subject.grades)
  );

  /**
   * Composes the extractAllGrades and average functions to calculate the average grade.
   * @function
   * @param {...any} args - Arguments to be passed to extractAllGrades.
   * @returns {number} The average grade computed from the extracted grades.
   */
  static getAverageGrade = compose(
    this.average,this.extractAllGrades
  );

  /**
   * Generates formatted reports for a list of students, including their names and overall average grades.
   *
   * @param {Array<Object>} students - An array of student objects. Each student should have a `name` property (string)
   *   and a `subjects` property (array), where each subject contains a `grades` array (numbers).
   * @returns {string} A formatted string containing the report for each student, including their name and overall average.
   */
  static getStudentReports(students) {
    return students.map((student, index) => {
      const overallAverage = this.average(
        student.subjects.flatMap(subject => subject.grades)
      );
      return `  📘 Student ${index + 1}: ${student.name}\n    🧮 Overall Average: ${overallAverage.toFixed(2)}\n`;
    }).join('\n');
  }
}
