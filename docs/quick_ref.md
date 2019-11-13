# Medusa Quick Reference

This is for already programers that want to know how to use this language.

## Program

The program starts in a `main` function with no arguments and no return type.

```mds
fn main(){

}
```

## Functions

Functions are declared in the form:

```mds
fn function_name(arg0 #type, ..., argn #type)#return_type {
    
}
```

Functions with no return value don't have the `#return_type` part.

## Types

The basic types are `int`, `float`, `bool` and `str`.

Arrays have are declared with two square brakets, like `int[]`

Function types are written in the form `fn#R (A0,A1,...,An)`. With `R` being the return type and `A0` to `An` the parameter types.

Ranges are iterables made by an `int` start value and an `int` end value.

## Variables

Variables are declared with `let` and constants with `const`, variables with initialized value can be type infered.

```mds
fn main(){
    let number = 34;
    let name #str = "Alice";
    let done #bool;
    const PI = 3.14;
}
```

## Operations

Mathematic operators `+`, `-`, `*` and `/` can be used by every numeric type. `%`, `++` and `--` can only be used with `int`.

Plus `+` is also used to concatenate strings.

Bitwise operators `~`, `|`, `^`, `&`, `<<` and `>>` can be used with `int`

Equality operators `==` and `!=` can be used with any type

Comparision operators `<`, `>`, `>=` and `<=` can be used with numeric types.

Logical operators `!`, `&&` and `||` convert any type used by then to bool automatically.

Range operator `..` is used to form Range types with two `int`s

Conversion operator `#` is used to convert a value to a basic type.

Assign operator is `=` and can be augmented with `*=`, `/=`, `%=`, `-=`, `+=`, `&=`, `|=` and `^=`.

## Control flow

If statements will convert a expression to `bool` automatically.

While and do while statements also convert to `bool` 

There are two types of `for` loop:

The C like version:
```mds
// C like for example
for(let i = 0; i < 10; i++){

}
```
and the `for` with iterable or `for in`:
```mds
// for in example
for(i: 0..5){

}
```
in the example `i` is declared with the `for` and is available only inside it.

## Iterables

Iterables have two methods called `next` and `hasNext` that are used mainly by the for in loop.

Ranges are an iterable type. Arrays and `str` have an `iter` method that returns an iterable to them.