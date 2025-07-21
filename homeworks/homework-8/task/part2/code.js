/**Part 2: Implementation*/
/* 
- Create Objects: Instantiate multiple Book objects, representing different books available in the bookstore.
 Also, create a few User objects.
- Add Books to Cart: Simulate users adding books to their cart by creating instances of the Cart class and 
 using its methods.

 */

import { Book, User, Cart, Order, BasicPriceCalculator } from "../part1/code.js";

//-----------------------Objects creation phase
const book1 = new Book(
    "Solaris",
    "Stanisław Lem",
    "978-0-15-602760-1",
    16.99,
    true,
    'science fiction'
);

const book2 = new Book(
    "The Teutonic Knights",
    "Henryk Sienkiewicz",
    "978-0-8021-3885-2",
    18.50,
    false,
    'historical fiction'
);

const book3 = new Book(
    "Ferdydurke",
    "Witold Gombrowicz",
    "978-0-300-07942-3",
    14.75,
    true,
    'satire / modernist literature'
);

const book4 = new Book(
    "The Issa Valley",
    "Czesław Miłosz",
    "978-0-374-53046-5",
    13.40,
    true,
    'literary fiction / coming-of-age'
);

const book5 = new Book(
    "Stone Upon Stone",
    "Wiesław Myśliwski",
    "978-1-56478-636-8",
    19.99,
    false,
    'literary fiction / family saga'
);

const books = [book1, book2, book3, book4, book5];

const user1 = new User("Anna Kowalska", "anna.kowalska@example.com", "U001");
const user2 = new User("Jan Nowak", "jan.nowak@example.com", "U002");
const user3 = new User("Katarzyna Zielińska", "k.zielinska@example.com", "U003");
const user4 = new User("Piotr Wiśniewski", "piotr.wisniewski@example.com", "U004");
const user5 = new User("Tomasz Lewandowski", "t.lewandowski@example.com", "U005");

// Create a shared price calculator instance
const priceCalculator = new BasicPriceCalculator();

// Create carts with priceCalculator passed
const cart1 = new Cart(priceCalculator);
const cart2 = new Cart(priceCalculator);
const cart3 = new Cart(priceCalculator);
const cart4 = new Cart(priceCalculator);
const cart5 = new Cart(priceCalculator);

//-----------------------Adding books to carts

cart1.addBook(book1);
cart1.addBook(book2);

cart2.addBook(book3);
cart2.addBook(book4);

cart3.addBook(book1);
cart3.addBook(book5);

cart4.addBook(book2);
cart4.addBook(book3);
cart4.addBook(book4);

cart5.addBook(book5);

//-----------------------Ordering process

// Add printInfo method to Order class prototype for convenience
Order.prototype.printInfo = function () {
    console.log(`Order for User ID: ${this.userId}`);
    console.log("Books:");
    this.books.forEach((book, idx) => {
        console.log(`  ${idx + 1}. ${book.title} by ${book.author} — $${book.price.toFixed(2)}`);
    });
    console.log(`Total Price: $${this.totalPrice.toFixed(2)}`);
    console.log('---------------------------');
};

// Simplify placeOrder: only pass the cart, get user id from 'this'
User.prototype.placeOrder = function (cart) {
    return new Order(this.id, cart.getBooks, cart.calculatePrice());
};

// Create orders
const order1 = user1.placeOrder(cart1);
order1.printInfo();

const order2 = user2.placeOrder(cart2);
order2.printInfo();

const order3 = user3.placeOrder(cart3);
order3.printInfo();

const order4 = user4.placeOrder(cart4);
order4.printInfo();

const order5 = user5.placeOrder(cart5);
order5.printInfo();
