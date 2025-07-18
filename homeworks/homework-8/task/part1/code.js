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

class Book {
    title="";
    author="";
    ISBN="";
    price=0;
    availability=false;
    constructor(title,author,ISBN,price,availability){
        this.title=title;
        this.author = author;
        this.ISBN = ISBN;
        this.price=price;
        this.availability=availability;
    }
}

class User{
    name="";
    email="";
    id="";
    constructor(name,email,id){
        this.name = name;
        this.email=email;
        this.id=id;
    }
}

class Cart {
    #books =[];
    addBook(book){ 
        if (this.#books.find(book)){
            this.#books.push(book);
        }
    }
    removeBook(bookTitle){
        let findIndex = this.#books.findIndex(bookTitle);
        if (findIndex){
            this.#books.splice(findIndex,1);
        }
    }
    calculatePrice(){
        let sum = 0;
        this.#books.forEach(book => {
            sum+= book.price;
        })
        return sum;
    }
}

class Order{
    user=undefined;
    books=[];
    totalPrice=0;
    constructor(user,books,totalPrice){
        this.user=user;
        this.books=books;
        this.totalPrice=totalPrice;
    }
}