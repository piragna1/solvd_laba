// task1/solution.js

/**
 * A utility class for performing operations on product arrays, such as calculating discounted prices and total prices.
 */
export class Task1 {
  /**
   * Calculates the discounted price for each product in the given array.
   */
  static calculateDiscountedPrice(products, discountPercentage) {
    return products.map((product) => ({
      ...product,
      price: product.price - (product.price * discountPercentage) / 100,
    }));
  }

  /**
   * Calculates the total price of all products in the given array.
   */
  static calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
  }
}
