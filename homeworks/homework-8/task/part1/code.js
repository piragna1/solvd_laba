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

export class Book {
    title="";
    author="";
    ISBN="";
    price=0;
    availability=false;
    genre;
    constructor(title,author,ISBN,price,availability,genre){
        this.title=title;
        this.author = author;
        this.ISBN = ISBN;
        this.price=price;
        this.availability=availability;
        this.genre=genre;
    }
}

export class Fiction extends Book {
    constructor(title, author, ISBN, price, availability, genre = "Fiction") {
        super(title, author, ISBN, price, availability, genre);
    }
}

export class NonFiction extends Book {
    constructor(title, author, ISBN, price, availability, genre = "Non-Fiction") {
        super(title, author, ISBN, price, availability, genre);
    }
}

export class User {
    name = "";
    email = "";
    id = "";

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    placeOrder(cart) {
        const books = cart.getBooks;
        const total = cart.calculatePrice();
        return new Order(this.id, books, total);
    }
}


export class Cart {
    #books =[];
    get getBooks(){
        return this.#books;
    }
    addBook(book){ 
            this.#books.push(book);
    }
    calculatePrice(){
        return this.#books.reduce((total,book) => {return total+book.price;},0)
    }
}

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
//-------------------

// IOrderFormatter.js (interface-style comment in JS)
export class IOrderFormatter {
    format(order) {
        throw new Error("format() must be implemented");
    }
}


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
