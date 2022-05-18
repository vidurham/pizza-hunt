//create variable to hold db connection
let db;

// establish a connection to the IndexedDB database called 'pizza-hunt' and set it to version 1
const request = indexedDB.open('pizza_hunt', 1);