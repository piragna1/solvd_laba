/**Part 2: Implementation*/
/* 
- Create Objects: Instantiate multiple Book objects, representing different books available in the bookstore.
 Also, create a few User objects.
- Add Books to Cart: Simulate users adding books to their cart by creating instances of the Cart class and 
 using its methods.

 */
import { Book, User, Cart, Order } from "../part1/code.js";


//-----------------------Objects creation phase
const book1 = new Book(
    "Solaris",
    "Stanisław Lem",
    "978-0-15-602760-1",
    16.99,
    true
);

const book2 = new Book(
    "The Teutonic Knights",
    "Henryk Sienkiewicz",
    "978-0-8021-3885-2",
    18.50,
    false
);

const book3 = new Book(
    "Ferdydurke",
    "Witold Gombrowicz",
    "978-0-300-07942-3",
    14.75,
    true
);

const book4 = new Book(
    "The Issa Valley",
    "Czesław Miłosz",
    "978-0-374-53046-5",
    13.40,
    true
);

const book5 = new Book(
    "Stone Upon Stone",
    "Wiesław Myśliwski",
    "978-1-56478-636-8",
    19.99,
    false
);
const books = [book1, book2, book3, book4, book5];




const user1 = new User(
    "Anna Kowalska",
    "anna.kowalska@example.com",
    "U001"
);

const user2 = new User(
    "Jan Nowak",
    "jan.nowak@example.com",
    "U002"
);

const user3 = new User(
    "Katarzyna Zielińska",
    "k.zielinska@example.com",
    "U003"
);

const user4 = new User(
    "Piotr Wiśniewski",
    "piotr.wisniewski@example.com",
    "U004"
);

const user5 = new User(
    "Tomasz Lewandowski",
    "t.lewandowski@example.com",
    "U005"
);
const cart1 = new Cart();
const cart2 = new Cart();
const cart3 = new Cart();
const cart4 = new Cart();
const cart5 = new Cart();


//---------------------------



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
//---------------------------



//-----------------------Ordering process

/*- Place Orders: Implement the process of placing an order. Users should be able to create instances of the 
Order class, specifying the books they want to purchase.

export class Order{
    userId=undefined;
    books=[];
    totalPrice=0;
    constructor(userId,books,totalPrice){
        this.userId=userId;
        this.books=books;
        this.totalPrice=totalPrice;
    }
}
    
*/
User.prototype.placeOrder = function placeOrder(id, books, totalPrice){
    return new Order(id,books,totalPrice);
}
// console.log(User.prototype.placeOrder);//[Function: placeOrder]

const order1 =user1.placeOrder(user1.id,cart1.getBooks,cart1.calculatePrice());
order1.printInfo();

const order2 =user2.placeOrder(user2.id,cart2.getBooks,cart2.calculatePrice());
order2.printInfo();

const order3 =user3.placeOrder(user3.id,cart3.getBooks,cart3.calculatePrice());
order3.printInfo();

const order4 =user4.placeOrder(user4.id,cart4.getBooks,cart4.calculatePrice());
order4.printInfo();

const order5 =user5.placeOrder(user5.id,cart5.getBooks,cart5.calculatePrice());
order5.printInfo();
//---------------------------
