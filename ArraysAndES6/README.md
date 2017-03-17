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

```JavaScript
const animaniacs = ['Yakko', 'Wakko', 'Dot']
```

## Array Methods

### Mutator Methods

Simply put, they mutate the original array. 

#### Push

Push adds one or more elements to the array and returns the new length of the array. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) Let's say our list of characters is incomplete and we want to add 2 more characters.

```JavaScript
animaniacs.push('Dr. Otto Scratchansniff', 'Hello Nurse');
// ['Yakko', 'Wakko', 'Dot', 'Dr. Otto Scratchansniff', 'Hello Nurse']
```

Push accepts one or more values. You separate the values with commas. Each item that is separate by the comma will be added as new value to the end of the array.

#### Pop

This method removes one element from the end of the array. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) In our example we now should have `['Yakko', 'Wakko', 'Dot', 'Dr. Otto Scratchansniff', 'Hello Nurse']` in our array. Let's say we want to remove Hello Nurse.

```JavaScript
animaniacs.pop();
// ['Yakko', 'Wakko', 'Dot', 'Dr. Otto Scratchansniff']
```

#### Shift

This method removes one element from the end of the array.

```JavaScript
animaniacs.shift();
// ['Wakko', 'Dot', 'Dr. Otto Scratchansniff']
```

#### Splice

Splice changes the array content by adding new elements in a specific position or removing elements at a specific position and length. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

For example, we want to get rid of "Bender" and "Professor". We need to use the splice method and pass in 2 arguments. First is what Index to start with, and the second is how many we want to remove.

```JavaScript
animaniacs.splice(2, 2);
//['Wakko', 'Dot']
```

This is stating; "Start at the second index, and remove two values".

On the flip side, let's add those characters back with another cast member.

```JavaScript
animaniacs.splice(2, 0, 'Dr. Otto Scratchansniff', 'Hello Nurse', 'Buttons');
//['Wakko', 'Dot', 'Dr. Otto Scratchansniff', 'Hello Nurse', 'Buttons']
```

This will result in the array being `['Yakko', 'Wakko', 'Dr. Otto Scratchansniff', 'Hello Nurse', 'Buttons']` The first parameter is the start index, then the second parameter is the delete count ( in this case we don't want to delete anything ), and the rest are the values we want added to the array. And Just like the push method, each item separated by the comma will be a value in the array.

#### Unshift

To do the opposite and add items to the beginning of an array, you call `.shift()`

```JavaScript
animaniacs.shift('Pinkey');
// ['Pinkey', 'Wakko', 'Dot', 'Dr. Otto Scratchansniff', 'Hello Nurse', 'Buttons'];
```



## Let's ES6 things up a bit

Let's take a look at sorting an array. I want to get the `animaniacs` array to be alphabetical. To do so we need to invoke the `.sort()` method and the call back function accepts 2 parameters. Like so : 

```JavaScript
var alphabetic = animaniacs.sort(function(a,b){
  if( a < b ){
    return -1;
  }else{
    return 1;
  }
});
console.log(alphabetic);
```

Every time this loops it checks the current item with the next in line. If it is greater then the previous it stays put, else it gets moved down one. ( More information [here](http://www.w3schools.com/js/js_array_sort.asp) )

#### Fat Arrows

This is ok, but nothing about this is ES6. Let's start with the Fat Arrow and const variable type.

```JavaScript
const alphebetic = animaniacs.sort((a,b) => {
  return ( a < b )?-1: 1;
});
console.log(alphebetic);

let alphebetic = animaniacs.sort((a,b) => (a < b ) ? -1: 1);
```

#### Implicit Return

It's starting to look better. All our function is doing is returning a -1 or 1. We can shorten our function even more. 

```JavaScript
const alphebetic = animaniacs.sort((a,b) => (a < b ) ? -1: 1);
// ['Buttons', 'Dot', 'Dr. Otto Scratchansniff', 'Hello Nurse', 'Pinkey', 'Wakko']
```

#### Randomize an array

There is no randomize method of the array prototype, but you can use the sort method and get the same result.

```JavaScript
cost randomize = animaniacs.sort(() => .5 - Math.random() );
// ['Dot', 'Hello Nurse', 'Dr. Otto Scratchansniff', 'Pinkey', 'Buttons', 'Wakko']
```

## New ES6 Methods

There are a couple of new methods introduced in ES6 that can be used to your advantage.	 

#### Array.from

The `Array.from()` method creates a new Array instance from an array-like or iterable object.

```Javascript
console.log(Array.from('JavaScript'));
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
```

#### Array.find

Returns the first Array element for which the callback returns true. If there is no such element it will return `undefined`. 

```JavaScript
console.log([4, -11, 5, -7, 4, 5, -8].find(x => x < 0));
// -11
```

#### Array.findIndex

Similar to find, with the exception this will return the index where the first true item is found otherwise -1 will be returned back.

```JavaScript
console.log([4, 2, -5, -7, 4, 5, -8].findIndex(x => x < 0));
// 2
```
