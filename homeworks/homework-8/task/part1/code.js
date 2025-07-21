/**
 * 
 * ### **Part 1: Class Design**

1. **Book Class**: Create a class called `Book` to 
    represent individual books. Each book should have properties like title, author, 
    ISBN, price, and availability.

2. **User Class**: Create a class called `User` to represent users of the bookstore. 
    Users should have properties like name, email, and a unique user ID.

3. **Cart Class**: Design a class called `Cart` to simulate a shopping cart. 
    It should have methods to add books, remove books, and calculate the total price 
    of the books in the cart.

4. **Order Class**: Create an `Order` class to represent a user's order. It should 
    include information about the user, the books ordered, and the total price.
 */





/**
 * ===========================================================
 * Bookstore System - Core Classes
 * ===========================================================
 * 
 * This module defines the primary domain classes for a bookstore system:
 * - Book, Fiction, NonFiction
 * - User
 * - Cart
 * - Order
 * - OrderService (with a pluggable formatter interface)
 * 
 * The design follows OOP and SOLID principles, including:
 * - Encapsulation (via private fields and controlled getters)
 * - Polymorphism (Fiction/NonFiction are interchangeable as Book)
 * - Dependency Inversion (formatting behavior is injected via interface)
 */

//////////////////////
// BOOK CLASSES
//////////////////////

/**
 * Represents a single book in the bookstore.
 * @class
 */
export class Book {
    #title;
    #author;
    #ISBN;
    #price;
    #availability;
    #genre;

    /**
     * Creates a new Book instance.
     * @param {string} title - The book title.
     * @param {string} author - The author of the book.
     * @param {string} ISBN - The ISBN identifier.
     * @param {number} price - Price in dollars.
     * @param {boolean} availability - Whether the book is in stock.
     * @param {string} genre - Genre category.
     */
    constructor(title, author, ISBN, price, availability, genre) {
        this.#title = title;
        this.#author = author;
        this.#ISBN = ISBN;
        this.#price = price;
        this.#availability = availability;
        this.#genre = genre;
    }

    // Getters for book information
    get title() { return this.#title; }
    get author() { return this.#author; }
    get ISBN() { return this.#ISBN; }
    get price() { return this.#price; }
    get genre() { return this.#genre; }
    get availability() { return this.#availability; }

    /**
     * Marks the book as available.
     */
    enableBook() { this.#availability = true; }

    /**
     * Marks the book as unavailable.
     */
    disableBook() { this.#availability = false; }
}

/**
 * Subclass of Book representing a fiction book.
 * @class
 * @extends Book
 */
export class Fiction extends Book {
    constructor(title, author, ISBN, price, availability, genre = "Fiction") {
        super(title, author, ISBN, price, availability, genre);
    }
}

/**
 * Subclass of Book representing a non-fiction book.
 * @class
 * @extends Book
 */
export class NonFiction extends Book {
    constructor(title, author, ISBN, price, availability, genre = "Non-Fiction") {
        super(title, author, ISBN, price, availability, genre);
    }
}

//////////////////////
// USER CLASS
//////////////////////

/**
 * Represents a user of the bookstore.
 * @class
 */
export class User {
    name = "";
    email = "";
    #id = "";

    /**
     * Constructs a User instance.
     * @param {string} name - The user's name.
     * @param {string} email - The user's email address.
     * @param {string} id - Unique user identifier.
     */
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.#id = id;
    }

    get id() { return this.#id; }

    /**
     * Places an order using the given cart.
     * @param {Cart} cart - The cart with books.
     * @returns {Order} The created order.
     */
    placeOrder(cart) {
        const books = cart.getBooks;
        const total = cart.calculatePrice();
        return new Order(this.id, books, total);
    }
}
//////////////////////
// CART CLASS
//////////////////////

/**
 * Simulates a user's shopping cart.
 * Holds selected books and uses an injected price calculator
 * to compute the total. This enables flexible pricing logic
 * and satisfies the Open/Closed Principle.
 *
 * @class
 */
export class Cart {
  #books;
  #priceCalculator;

  /**
   * Constructs a Cart instance.
   * @param {Object} priceCalculator - An object with a `calculate(books)` method (strategy).
   */
  constructor(priceCalculator) {
    this.#books = [];
    this.#priceCalculator = priceCalculator;
  }

  /**
   * Gets a copy of all books in the cart.
   * @returns {Book[]} List of books in the cart.
   */
  get getBooks() {
    return [...this.#books]; // Defensive copy to protect encapsulation
  }

  /**
   * Adds a book to the cart.
   * @param {Book} book - Book to be added.
   */
  addBook(book) {
    this.#books.push(book);
  }

  /**
   * Calculates the total price of books using the injected pricing strategy.
   * @returns {number} Total price in dollars.
   */
  calculatePrice() {
    return this.#priceCalculator.calculate(this.#books);
  }
}

//////////////////////
// ORDER CLASS
//////////////////////

/**
 * Represents a completed purchase order.
 * @class
 */
export class Order {
    #userId = undefined;
    #books = [];
    #totalPrice = 0;

    /**
     * Creates a new Order instance.
     * @param {string} userId - ID of the user placing the order.
     * @param {Book[]} books - Books being purchased.
     * @param {number} totalPrice - Total cost of the order.
     */
    constructor(userId, books, totalPrice) {
        this.#userId = userId;
        this.#books = books;
        this.#totalPrice = totalPrice;
    }

    /** @returns {string} User ID */
    get userId() { return this.#userId; }

    /** @returns {Book[]} List of books in the order */
    get books() { return [...this.#books]; }

    /** @returns {number} Total order price */
    get totalPrice() { return this.#totalPrice; }
}

//////////////////////
// ORDER FORMATTER INTERFACE
//////////////////////

/**
 * Interface-style base class for formatting orders.
 * Classes extending this should implement `format(order)`.
 * @class
 */
export class IOrderFormatter {
    /**
     * Formats the order into a string.
     * @param {Order} order - The order to format.
     * @returns {string}
     * @throws {Error} If not implemented.
     */
    format(order) {
        throw new Error("format() must be implemented");
    }
}

/**
 * Simple formatter that returns a console-friendly summary of an order.
 * @class
 * @implements IOrderFormatter
 */
export class SimpleOrderFormatter extends IOrderFormatter {
    format(order) {
        let output = `📦 Order Summary for User ID: ${order.userId}\n`;
        output += `📚 Books in Order:\n`;
        order.books.forEach((book, i) => {
            output += `  ${i + 1}. "${book.title}" by ${book.author} - $${book.price.toFixed(2)}\n`;
        });
        output += `💰 Total Price: $${order.totalPrice.toFixed(2)}\n`;
        return output;
    }
}

//////////////////////
// ORDER SERVICE
//////////////////////

/**
 * Handles creation and display of orders.
 * Uses dependency injection for order formatting to satisfy the Dependency Inversion Principle.
 * @class
 */
export class OrderService {
    #orderFormatter;

    /**
     * Constructs the service with a formatter dependency.
     * @param {IOrderFormatter} orderFormatter - Formatter used to print orders.
     */
    constructor(orderFormatter) {
        this.#orderFormatter = orderFormatter;
    }

    /**
     * Creates a new order from user and cart.
     * @param {User} user - The user placing the order.
     * @param {Cart} cart - The cart containing books.
     * @returns {Order}
     */
    createOrder(user, cart) {
        const books = cart.getBooks;
        const total = cart.calculatePrice();
        return new Order(user.id, books, total);
    }

    /**
     * Prints a formatted summary of the order.
     * @param {Order} order - The order to print.
     */
    printOrder(order) {
        console.log(this.#orderFormatter.format(order));
    }
}
//////////////////////
// PRICE CALCULATOR
//////////////////////

/**
 * Basic implementation of a price calculator strategy.
 * Calculates the total price by summing all book prices.
 *
 * This class follows the Strategy Pattern and supports
 * the Open/Closed Principle by allowing other pricing strategies
 * (e.g., with discounts, taxes) to be introduced without modifying Cart.
 *
 * @class
 */
export class BasicPriceCalculator {
  /**
   * Calculates the total price of given books.
   * @param {Book[]} books - Array of books to calculate total from.
   * @returns {number} Total price.
   */
  calculate(books) {
    return books.reduce((sum, book) => sum + book.price, 0);
  }
}
