// task3/solution.js

export class GradeUtils {
  /**
   * Calculates average for an array of scores.
   */
  static average(scores) {
    return scores.reduce((sum, s) => sum + s, 0) / scores.length;
  }

  /**
   * Calculates average for each subject for a student.
   */
  static calculateSubjectAverages(grades) {
    return grades.map(({ subject, scores }) => ({
      subject,
      average: this.average(scores),
    }));
  }

  /**
   * Calculates overall average for all subjects of a student.
   */
  static calculateOverallAverage(grades) {
    let subjectAverages = this.calculateSubjectAverages(grades);
    return this.average(subjectAverages.map((s) => s.average));
  }

  /**
   * Prepares a report for a list of students.
   */
  static getStudentReports(students) {
    return students.map((student) => {
      const subjectAverages = this.calculateSubjectAverages(student.grades);
      const overallAverage = this.calculateOverallAverage(student.grades);
      return {
        name: student.name,
        subjectAverages,
        overallAverage,
      };
    });
  }
}
