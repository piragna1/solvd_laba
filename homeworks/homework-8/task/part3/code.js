/*
Part 3: Demonstration

- Create a Scenario: Design a scenario where 
        users browse books, 
        add them to their carts, 
        and place orders. 
    Simulate interactions between users, carts, and orders.

- Interaction: Demonstrate how objects of different classes interact with each other. For example, a user 
 interacts with a cart, and a cart interacts with orders.

- Polymorphism: Utilize polymorphism by treating different types of books (e.g., fiction, non-fiction) uniformly 
 when users add them to the cart.
*/
import { User, Cart, Fiction, NonFiction } from '../part1/code.js'; // adjust path as needed

// Create Users
const user1 = new User("Alice", "alice@example.com", "U001");

// Create Books
const book1 = new Fiction("Dune", "Frank Herbert", "9780441013593", 20.99, true);
const book2 = new NonFiction("Sapiens", "Yuval Noah Harari", "9780062316097", 18.00, true);
const book3 = new Fiction("1984", "George Orwell", "9780451524935", 15.50, true);

// Simulate browsing and adding books
const cart1 = new Cart();
cart1.addBook(book1);
cart1.addBook(book2);
cart1.addBook(book3);

// Show what's in the cart
console.log(`🛒 ${user1.name}'s Cart:`);
cart1.getBooks.forEach(book => {
    console.log(`- ${book.title} (${book.genre}) - $${book.price}`);
});
console.log(`Total: $${cart1.calculatePrice()}`);

// Place an order
const order1 = user1.placeOrder(cart1);
order1.printInfo();
