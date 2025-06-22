export function validateEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)){
    return;
  }
  throw new Error("The email intered is not valid. Please try again...");
}

export function validateName(name){
 if (typeof name !== 'string'){
               throw new Error(`The name entered is not valid. (${name}). Please try again...`)
            }
            if (name . length < 3){
               throw new Error(`The minimum length required is of 3 characters. Please try again...`)
            }
            return;
}
export function validateLastName(lastName){
 if (typeof lastName !== 'string'){
               throw new Error(`The lastName entered is not valid. (${lastName}). Please try again...`)
            }
            if (lastName . length < 3){
               throw new Error(`The minimum length required is of 3 characters. Please try again...`)
            }
            return;
}

export function validateAge(age){

            if (typeof age !== 'number'){
               throw new Error(`The age entered is not valid. (${age}). Please enter a number...`)
            }
            if (age < 0 || age > 110){
               throw new Error(`Please enter a valid age...`)
            }
            return;
}