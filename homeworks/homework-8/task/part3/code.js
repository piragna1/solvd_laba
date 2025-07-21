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

class LibrarySystem{

}

class UserManagementSystem{
    
}

class CartManagementSystem{
    addBookToCart(book,cart){
        const exists = cart.hasBook(book);
        if(!exists) cart.addBook(book);
        console.log('The cart has already have the book.')
    }
    removeBookFromCart(book,cart){
        const exists = cart.hasBook(book);
        if (exists){
            cart.removeBook(book.title);
        }
        else{console.log('The book is not in the cart');};
    }
}
class BookManagementSystem {
    disableBook(book){
        if (book.availability){
            book.disableBook();
        }
        else{
            throw Error('The book is already unavailable')
        }
    }
    enableBook(book){
        if(!book.availability){
            book.enableBook();
        }
        else{
            throw Error('The book is already available')
        }
    }
}