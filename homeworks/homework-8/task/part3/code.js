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
// main.js
import { 
    Fiction,
    NonFiction,
    User, 
    Cart, 
    Order,
    IOrderFormatter,
    SimpleOrderFormatter,
    OrderService,
    Book,
    BasicPriceCalculator

 } from '../part1/code.js';

// Setup
const user = new User("Alice", "alice@example.com", "U001");
const cart = new Cart(new BasicPriceCalculator());
const formatter = new SimpleOrderFormatter();
const orderService = new OrderService(formatter);

// Add books
cart.addBook(new Fiction("Dune", "Frank Herbert", "9780441013593", 20.99, true));
cart.addBook(new NonFiction("Sapiens", "Yuval Noah Harari", "9780062316097", 18.00, true));

// Create and print order
const order = orderService.createOrder(user, cart);
orderService.printOrder(order);