//-------------------------------------------------------------------- HTTP

//-------------------------------- Hyper Text Transfer Protocol
//protocol for sending data over TPC (Transmission Control Protocol).
//--------------------------------

//-------------------------------- TCP
//Reliable protocol for communicating over the network
//--------------------------------

//-------------------------------- HTTP versions
//HTTP 1.1.0 it is being deprecated
//HTTP 1.1 more used (built over TCP)
//HTTP 2 (b.o TCP)
//HTTP 3 (b.o UDP)
//--------------------------------

//--------------------------------  TCP vs UDP
//UDP is faster. Does not need as much handshakeds as TCP.
/*TCP
    -(three-way handshaking for stablishing connections)
    -Tracks which packages were not sent due to any sort of problem E.G. Internet connection lost
*/
//--------------------------------

//-------------------------------- Network connections
// Client - Server 's dynamic
//--------------------------------

//-------------------------------- Three way handshaking
/* 
1 - client send synchronization message (SYN). The server receives this message.
2 - SYN + ACK(nowledgment) from server. The client receives this mess.
3 - client sends ACK message in order to start stablishing the connection.
*/
//--------------------------------

//-------------------------------- SYN
//Message sent to destination to ask for starting the establishment of a new connection.
/* 
This message has its own format. Different groups of bytes (specifications) wihch have a determined meaning and purpose:
-header
-type of message
-...
*/
//--------------------------------

//-------------------------------- ACK
//Message sent to destination to indicate the acknoledgment of received message's intentions.
//--------------------------------

//-------------------------------- Http
//when  the protocol was created, files sent were just html files. Css / js did not exist in that moment.
//when files started to be sent, and scripts were included into websites, bottlenecks were served because every execution of these required three-hand shaking
//--------------------------------

//-------------------------------- One hand shaking
//So it was implemented the one hand shaking per session for stablishing connections between clients and servers.
//--------------------------------

//--------------------------------HTTP & REST - Http request
// method     url            protocol version
// GET        /index.html    HTTP/1.1

/*

GET /index.html HTTP/1.1

headers 👇
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html, * / *
Accept-Language: en-us
Accept-Charset: ISO-8859-1,utf-8
Connection: keep-alive
blank line 
body size (bytes)
body content(OPTIONAL)

*/

//--------------------------------

//-------------------------------- HTTP methods
//GET
//DELETE
//FETCH
//POST
//--------------------------------

//-------------------------------- REST/RESTful  (REpresentational State Transfer)
//A way of make HTTP requests
//--------------------------------

//-------------------------------- REST API
//Convention/speficitation/standarization of the exposition of reources of APIs.
//Speficitation or convention of how structuring http requests!
//It allows to stablish a certain dynamic for interacting with resources in websites since every piece of data has it own URL
//It allows catching data!
//--------------------------------

//--------------------------------  Catching data!
/* 
Sometimes when you want to access certain information for a second time, for example, if the data was not changed since your previous
access, the browser is able to look up for the cached data instead of sending a new HTTP request to a given server...
*/
//--------------------------------

//-------------------------------- HTTP request types:
/* 
GET /users/42
# Retrieves user with ID 42

POST /users
# Creates a new user (usually with a JSON body)

PATCH /users/42
# Modifies details of user 42 (e.g., email)

PUT /users/42
# Replaces the entire user 42 resource

DELETE /users/42
# Deletes user 42

*/
//--------------------------------

//-------------------------------- Maybe you did not know...
// It is crucial for websites keep operations as simple as possible... think that the information in each one should be sent
// If you keep the pieces of information handled as light as possible user will not need to have an excellent conecction in order to interact with the server.
// This makes the website also accesible from places in which the connection is not that stable...
//--------------------------------

//--------------------------------
//--------------------------------

//--------------------------------
//--------------------------------

//--------------------------------
//--------------------------------

//--------------------------------
//--------------------------------

//--------------------------------
//--------------------------------

//--------------------------------
//--------------------------------
