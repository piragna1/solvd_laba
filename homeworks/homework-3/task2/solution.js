import { compose } from "../shared/compose.js";

export class Task2 {
  static getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
  }

  static getUniqueWords(text) {
    let words = text.toLowerCase().match(/\b\w+\b/g) || [];
    return words.filter(
      (word, _, arr) => arr.indexOf(word) === arr.lastIndexOf(word)
    );
  }

  static sortWords(words) {
    return words.sort((a, b) => a.localeCompare(b));
  }

  static filterUniqueWords = compose(this.sortWords, this.getUniqueWords);

  static average(scores) {
    return scores.reduce((sum, s) => sum + s, 0) / scores.length;
  }

  static calculateSubjectAverages(subjects) {
    return subjects.map(({ subject, grades }) => ({
      subject,
      average: this.average(grades),
    }));
  }

  static extractAllGrades = (students) =>
  students.flatMap(student =>
    student.subjects.flatMap(subject => subject.grades)
  );

  // getAverageGrade usando composición y estilo point-free
  static getAverageGrade = compose(
    this.average,this.extractAllGrades
  );

  static getStudentReports(students) {
    return students.map((student, index) => {
      const overallAverage = this.average(
        student.subjects.flatMap(subject => subject.grades)
      );
      return `  📘 Student ${index + 1}: ${student.name}\n    🧮 Overall Average: ${overallAverage.toFixed(2)}\n`;
    }).join('\n');
  }
}
