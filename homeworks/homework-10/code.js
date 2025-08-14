/*
### --------------------------------------------**Part 1: Understanding Hash Functions**

1. **Research**: Begin by researching and understanding what hash functions are, how they work, and their 
  applications in computer science and data storage.
*/
/*
### --------------------------------------------**Part 2: Implementing a Custom Hash Function**

1. **Custom Hash Function**: Implement a custom hash function in JavaScript. Your hash function should take a 
  string as input and produce a hash code (an integer) as output. Be creative, but ensure that your function 
  distributes values uniformly.
*/
function hash(string) {
  if (typeof string !== "string") {
    throw Error("Invalid input key");
  }
  const prime1 = 2;
  const prime3 = 137;

  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    let charcode = string.charCodeAt(index);
    sum += Math.trunc(charcode);
  }
  return Math.trunc((prime1 * sum) % prime3);
}
let arr = [
  "cześć",
  "witaj",
  "dzień dobry",
  "dobry wieczór",
  "dobranoc",
  "siema",
  "hejka",
  "elo",
  "czesc",
  "witam",
  "hola",
  "holb",
  "aloh",
  "bye",
  "bio",
  "bios",
  "ciao",
  "nv",
  "adeu",
  "hi",
  "chau",
  "nos vemos",
  "adios",
  "adios!",
  "hello",
  "hella",
  "holla",
  "hey",
  "heya",
  "heyo",
  "greetings",
  "greetz",
  "salut",
  "saludo",
  "saludos",
  "aloha",
  "alohaa",
  "alohaa!",
  "alo",
  "alo!",
  "yo",
  "sup",
  "wassup",
  "whatsup",
  "howdy",
  "hiya",
  "oi",
  "oy",
  "oy!",
  "bonjour",
  "bonsoir",
  "buenos dias",
  "buenas",
  "buenas tardes",
  "buenas noches",
  "shalom",
  "namaste",
  "namaskar",
  "namaskaram",
  "namastey",
  "ciao!",
  "tschuss",
  "tschüss",
  "hallo",
  "hallo!",
  "ola",
  "olá",
  "olaa",
  "olaaa",
  "olá!",
  "later",
  "laters!",
  "peace",
  "peace out",
  "take care",
  "take it easy",
  "catch you",
  "catch ya",
  "catch ya later",
  "olá bom dia",
  "boa tarde",
  "boa noite",
  "até logo",
  "até amanhã",
  "até breve",
  "até já",
  "adeusinho",
  "tchau",
  "xau",
  "cumprimentos",
  "saudações",
  "bem-vindo",
  "bem-vinda",
  "bem-vindos",
  "bem-vindas",
  "abraço",
  "beijinhos",
  "fique bem",
  "vá com Deus",
  "`holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaealsdjaspodk0329i0293849",
];
/*
2. **Collision Handling**: Implement a collision resolution strategy. You can choose from methods like 
  separate chaining (using linked lists), open addressing (linear probing, quadratic probing), or any other 
  technique you prefer.
*/
