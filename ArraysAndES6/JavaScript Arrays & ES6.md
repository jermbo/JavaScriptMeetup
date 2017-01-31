# JavaScript Arrays & ES6

The latest version of JavaScript has been out now for a while now, browser support is nearing complete, and the time is now to understand and use some powerful features ES2015 has to offer.

Today I will show you some real examples of code that you can use in your projects without the need for a compiler. *This is, of course, you don't have to support browsers 2 years or older. In that case, Bable and some Gulp will get you what you need*

## Array Basics

Arrays are a wonderful data type with a lot of power behind them. First, it's important to make sure we are on the same page with Arrays. 

* Array items are accessed via their index. `myArray[2]`

* Arrays are zero based. Meaning the first item in the array is at index 0. 

* Arrays have a length property. `myArray.length`

* You can create your own method by accessing the `Array.prototype` method.

* There are 3 types of methods on the array prototype : Mutator | Accessor | Iteration 

  ## Setup

Before we go further, I want to set the context of what we are about to do. We will be manipulating arrays, so lets assume there is an array declared at the top of the script called `animaniacs` and it has some string values. 

```javascript
const animaniacs = ['Yakko', 'Wakko', 'Dot']
```

Unless otherwise stated, each example will draw back to this array. 

## Array Methods

### Mutator Methods

Simply put, they mutate the original array. 

#### Push

Adding something to the end of an array is as simple as calling `.pop` on an array item

```javascript
animaniacs.push('Dr. Otto Scratchansniff');
// ['Yakko', 'Wakko', 'Dot', 'Dr. Otto Scratchansniff']
```

#### Shift

To do the opposite and add items to the beginning of an array, you call `.shift()`

```javascript
animaniacs.push('Hello Nurse');
// ['Hello Nurse', 'Yakko', 'Wakko', 'Dot'];
```



## New ES6 Methods

There are a couple of new methods introduced in ES6 that can be used to your advantage.	 

#### Array.from

The `Array.from()` method creates a new Array instance from an array-like or iterable object.

```Javascript
Array.from('JavaScript'); // // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
```

