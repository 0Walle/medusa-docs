# Medusa Tutorial

## Basic Types and Operators

Medusa is a staticly typed language, that means that things have a single known type in the entire program.

### Numeric Types

Medusa currently has two numeric types: `int` and `float`.

The `int` type represents signed integer numbers from −32767 to +32767. Integer literals can be written in decimal form like `2573`.

The `float` type represents floating-point numbers. Float literals are written like `45.67`.

Numeric types can do numeric operations, they are:

```mds
56 + 21;  // addition
310 - 65; // subtraction
8 * 32;   // multiplication
44 / 2;   // division
8 % 2;    // remainder (or modulo)
```

`int` type can do bitwise operations, they aren't common but they can be very util sometimes:

```mds
~65;     // not
5 & 4;   // and
16 | 2;  // or
75 ^ 32; // xor
```

### The `str` type

`str` represents strings in Medusa. String literal are written with double quotes like `"I'm a string"`. If you need to write a `"` inside the string you need to escape it with `\`, for example:

```mds
// The next line will print `I'm a "escaped" string`
println("I'm a \"escaped\" string");
```

<!-- `char` is the type you get from indexing a string, sometime there will be a char literal, cause I forgot it ¯\\\_(ツ)\_/¯. -->

Indexing is done with `[ ]`, it will take a character in the string in the position inside the brackets:

```mds
// The next expression will result in the `s` char, the third letter.
"A sample string"[2];
```

>   If its the 3rd why there is a 2 there?<br>
>   Cause indexes start with 0 in programming world, with a few exceptions.

`str` type can do concatenation with the `+` operator:

```mds
println("+ operator can join" + " two strings");
```

### The `bool` type

A `bool` can only have two values: `true` or `false`, they are mainly used in conditional expressions for control flow which will be shown later. Comparision and equality operators result in a `bool`.

Equality operators `==` and `!=` can be used with every type.

```mds
5 == 5; // equals
// this expression result in true

"tomatoes" != "potatoes"; // not equals
// this expression result in true, because the strings aren't equal
```

Comparision operators `<`, `>`, `<=` and `>=` can be used with numeric types, since both sides of the expression have the same type.

```mds
3 < 5; // less than
// results in true

3 >= 5; // greater than or equal
// results in false

2.4 > 6; // compilation error, a float can't be compared to an int without conversion.
```

### Converting types

To fix the previous error a conversion must be made, conversions are made with the `#` operator followed by a basic type to convert to.

```mds
2.4 > 6#float; // compiles sucessfuly, results in false
```

Only numeric types can be converted to other numeric type, but any type can be converted to a `str` or a `bool`.

```mds
// That line will print `Is 5 greater than 0? true`
println("Is 5 greater than 0?" + (5 > 0)#str);

// The parentheses are used to group the entire expression
// to be converted to a string, like the ones in math.
```

## Variables

Variables are used to store values. Variables are declared with the `let` keyword.

```mds
let number = 5;
// `number` now stores the int 5

// all variables have a type too, it can be written using #
// but type inference makes it optional
let name #str = "Alice";

// unless the variable is uninitialized
let done #bool;
```

Constants are like variables but they can't change. They are declared with `const` and their type must be written.

```mds
const size #int = 16;
```