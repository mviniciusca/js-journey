### # Notes
This is a collection of notes that I have taken while learning JavaScript. It is not a tutorial, but rather a reference for myself.

### ## Variables

Definition: A variable is a named storage location in memory that can hold a value. You can think of it as a box that you can put things in. You can also take things out of the box and put new things in.

| Variable | Explanation | Example |
|---|---|---|
| String | This is a sequence of text known as a string. To signify that the value is a string, enclose it in single or double quote marks. | `let myVariable = 'Bob';` or `let myVariable = "Bob";` |
| Number | This is a number. Numbers don't have quotes around them. | `let myVariable = 10;` |
| Boolean | This is a True/False value. The words `true` and `false` are special keywords that don't need quote marks. | `let myVariable = true;` |
| Array | This is a structure that allows you to store multiple values in a single reference. Refer to each member of the array like this: `myVariable[0]`, `myVariable[1]`, etc. | `let myVariable = [1,'Bob','Steve',10];` |
| Object | This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn. All of the above examples too. | `let myVariable = document.querySelector('h1');` |

source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)


##### Constants 
Definition: A constant is a variable that cannot be changed. You can think of it as a box that is locked and cannot be opened. You can put things in the box, but you cannot take them out or change them.

##### Primitive Types

Definition: A primitive type is a data type that is not an object and has no methods. The primitive types are:
- String
- Number
- Boolean
- Undefined
- Null
- Symbol (new in ES6)
- BigInt (new in ES11)
source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values)


###### Math Operations
| Operation | Description | Example |
|---|---|---|
| + | Addition | `let sum = 1 + 2;` |
| - | Subtraction | `let difference = 2 - 1;` |
| * | Multiplication | `let product = 2 * 3;` |
| / | Division | `let quotient = 6 / 2;` |
| % | Modulus | `let remainder = 5 % 2;` |
| ** | Exponentiation | `let power = 2 ** 3;` |
| ++ | Increment | `let x = 1; x++;` |
| -- | Decrement | `let x = 1; x--;` |
| += | Addition assignment | `let x = 1; x += 2;` |
| -= | Subtraction assignment | `let x = 1; x -= 2;` |
| *= | Multiplication assignment | `let x = 1; x *= 2;` |
| /= | Division assignment | `let x = 1; x /= 2;` |
| %= | Modulus assignment | `let x = 1; x %= 2;` |
| **= | Exponentiation assignment | `let x = 1; x **= 2;` |
