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

export class User{
    name="";
    email="";
    id="";
    constructor(name,email,id){
        this.name = name;
        this.email=email;
        this.id=id;
    }
}

export class Cart {
    #books =[];
    addBook(book){ 
        const exists = this.#books.find(b => b.ISBN === book.ISBN);
        if (!exists){
            this.#books.push(book);
        }
    }
    removeBook(bookTitle){
        let findIndex = this.#books.findIndex((book) => {return book.title === bookTitle});
        if (findIndex !== -1){
            this.#books.splice(findIndex,1);
        }
    }
    calculatePrice(){
        return this.#books.reduce((total,book) => {return total+book.price;},0)
    }
    get getBooks(){
        return this.#books;
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
    printInfo() {
        console.log(`📦 Order Summary for User ID: ${this.userId}`);
        console.log("📚 Books in Order:");
        this.books.forEach((book, index) => {
            console.log(`  ${index + 1}. "${book.title}" by ${book.author} - $${book.price.toFixed(2)}`);
        });
        console.log(`💰 Total Price: $${this.totalPrice.toFixed(2)}\n`);
    }
}