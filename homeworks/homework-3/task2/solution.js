// task2/solution.js

export class TextUtils {
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
}
