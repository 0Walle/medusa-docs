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

Arrays have are declared with two square brakets, example: `int[]`

Function types are written in the form `fn#R (A0,A1,...,An)`. With `R` being the return type and `A0` to `An` the parameter types.

Ranges are iterables made by an `int` start value and an `int` end value.

Optional types are the normal types but they can also have a `none` value. They are represented with a `?`, example: `int?`.

Tuples can group diferent types, they are represented with `(Type1,Type2,Type3)`, example: `(int,str,float)`

### Typename declaration

A `typename` declaration is used to give another name to an type. It does't create a new type and is declared in global scope.

```mds
typename Person = (str,int);
```

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

## Tuples

Tuples items are accessed with an index operation, but unlike arrays the value must be an integer literal, because tuple types need to be known at compile time.

```mds
let product = ("Coffee", 12, 1);
let name = product[0];
let price = product[1];
let quantity = product[2];

let i = 1;
let price_again = product[i];
// Error, index value must be known.
```

## Enums

Enums create an type that can have values determined by the enum. They are declared in the global scope, outside functions. Enum values are represented by integers, they are just syntatic sugar.

```mds
enum DayOfWeek{
    sunday, monday, tuesday, wednesday,
    thursday, friday, saturday
}

fn main(){
    let event = (DayOfWeek.monday,"Go to dentist");
    // The type of `event` is (DayOfWeek,str)
}
```

### Bitfield enums

Enums can be used as bitfields. Their declarations have an `<<` before the body.

```mds
enum Feature << {
    round, opaque, heavy, smooth
}
```

You can use the `|` or `+` operator in them to join the values

```mds
let my_thing = Feature.round | Feature.smooth;
```

## Optional types and optional handling

Optionals are used to make types `none`able. This is useful to represent the absence of an value. But it needs to be checked before using, because errors caused by null values are very common.

```mds
let bread_count #int? = none;
// now bread_count has an none value
```

To use an optional type it must be unwrapped before. The `??` can unwrap to an value in case the expression is `none`.

```mds
let some_number = bread_count + 2;
// Error, can't use + operator with `int?` and `int`

let some_number = bread_count ?? -1;
// now if `bread_count` is `none` then -1 will be the result
// if not then the value of `bread_count` will be the result
```

The other way to unwrap optional is with an `with` statement. It works like an if statement, but it will execute if the value is not `none` otherwise the else clause is executed.

```mds
with(count: bread_count){
    // if `bread_count` is not none then `count`
    // will be declared with the value of `bread_count`
    println("There are {} bread(s)".format(count));
}else{
    // if `bread_count` is none then this part is executed.
    // the variable `count` is not availble here.
    println("There is no bread");
}
```

### Optional Convertions

Converting an optional to `bool` will result in false if it is `none`, else it returns `true`. Converting to `str` will result in an `str?` with `none` if the value of the optional was `none` else it will be the converted value to string.

```mds
let wallet #int? = none;
let has_wallet = wallet#bool; // will be false
println("Money: {}".format(wallet#str ?? "none, no wallet"));
// Output:
// Money: none, no wallet
```

## Exception handling

Exceptions in medusa are different of the ones found in some other languages. They are types that are raised from an function.

An Exceptional function has an `!` before the return type or before the body for functions with no return (this will be changed in a update);

the `raise` statement will raise an exception, and an `raise!` statment will stop the execution and show an error menssage.

```mds
fn failFunction() #!int{
    raise "I can't do it";
    return 0;
}

fn main(){
    let a = failFunction();
    // Error, the exceptional type must be handled
}
```

You can raise the exception again with an `raise` after the call. Or panic the program with an `raise! error_message`.

```mds
let a = failFunction() raise;
// this will raise the excpetion again in the current function
// for this the current function must be also exceptional

let a = failFunction() raise! "Something failed";
// this will stop execution and show the error message at the end
// in that case the function doesn't need to be exceptional
```

The `try..catch` statement is similar to an `with` statement, but it works with exceptional types instead of optionals. (this feature isn't complete, the error value in the catch expression doesn't work)

```mds
try(value: failFunction()){
    // do something with the value
}catch(_){ // `_` can't be used for now
    // do something if it goes wrong
}
```

## Type casting

Casting is not a fully supported feature yet. You can use the `as` operator to cast an type to another, resulting in an optional type.