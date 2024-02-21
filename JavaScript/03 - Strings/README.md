# Strings

In JavaScript, the textual data is stored as strings. There is no separate type for a single character. Strings can be enclosed within either single quotes, double quotes or backticks.

```javascript
let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;
```

You can use quotes inside a string, as long as they don't match the quotes surrounding the string.

```javascript
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

The `+` operator can also be used to add (concatenate) strings.

```javascript
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
```

The `+=` assignment operator can also be used to add (concatenate) strings.

```javascript
let text1 = "What a very ";
text1 += "nice day";
```

When used on strings, the `+` operator is called the concatenation operator.

## Backticks `` `<Template Literals>` ``

- Backticks, however, allow us to embed any expression into the string, by wrapping it in `${…}`.

```javascript
function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

- Another advantage of using backticks is that they allow a string to span multiple lines.

```javascript
let text = `The quick
brown fox
jumps over
the lazy dog`;
```

To find the length of a string, use the built-in length property.

```javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```
