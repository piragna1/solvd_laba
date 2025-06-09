// task2/solution.js

export class Task2 {
  /**
   * Returns the full name of a person.
   */
  static getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
  }

  /**
   * Returns an array of unique words from the given text (case-insensitive).
   */
  static getUniqueWords(text) {
    let words = text.toLowerCase().match(/\b\w+\b/g) || [];
    return words.filter(
      (word, _, arr) => arr.indexOf(word) === arr.lastIndexOf(word)
    );
  }

  /**
   * Sorts an array of words in ascending alphabetical order.
   */
  static sortWords(words) {
    return words.sort((a, b) => a.localeCompare(b));
  }

  /**
   * Filters unique words and returns them sorted.
   */
  static filterUniqueWords(text) {
    return this.sortWords(this.getUniqueWords(text));
  }

  /**
   * Calculates average for an array of scores.
   */
  static average(scores) {
    return scores.reduce((sum, s) => sum + s, 0) / scores.length;
  }

  /**
   * Calculates average for each subject for a student.
   */
  static calculateSubjectAverages(subjects) {
    return subjects.map(({ subject, grades }) => ({
      subject,
      average: this.average(grades),
    }));
  }

  /**
   * Calculates overall average for all subjects of a student.
   */
  static getAverageGrade(subjects) {
    let subjectAverages = this.calculateSubjectAverages(subjects);
    return this.average(subjectAverages.map((s) => s.average));
  }

  /**
   * Prepares a report for a list of students.
   */
  static getStudentReports(students) {
    return students.map((student) => {
      const subjectAverages = this.calculateSubjectAverages(student.subjects);
      const overallAverage = this.getAverageGrade(student.subjects);
      return {
        name: student.name,
        subjectAverages,
        overallAverage,
      };
    });
  }

  
}
