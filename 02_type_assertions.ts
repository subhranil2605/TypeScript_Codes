let message;

message = 'abc';

// Type assertion "Prefix" way
let endsWithC = (<string>message).endsWith('c');

// Another way of asserting types to a variable
let altrNtvWay = (message as string).endsWith('c');


