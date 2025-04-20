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


### Constants 
Definition: A constant is a variable that cannot be changed. You can think of it as a box that is locked and cannot be opened. You can put things in the box, but you cannot take them out or change them.
