const animaniacs = ['Yakko', 'Wakko', 'Dot'];
animaniacs.push('Dr. Otto Scratchansniff', 'Hello Nurse');
console.log( animaniacs );

animaniacs.pop();
console.log( animaniacs );

animaniacs.shift();
console.log( animaniacs );

animaniacs.splice(2, 2);
console.log( animaniacs );

animaniacs.splice(2, 0, 'Dr. Otto Scratchansniff', 'Hello Nurse', 'Buttons');
console.log( animaniacs );

animaniacs.unshift('Pinkey');
console.log( animaniacs );

const alphebetic = animaniacs.sort((a,b) => (a < b ) ? -1: 1);
console.log( alphebetic );

const randomize = animaniacs.sort(() => .5 - Math.random() );
console.log( randomize );

const js = Array.from('JavaScript');
console.log(js);

console.log([4, -11, 5, -7, 4, 5, -8].find(x => x < 0));

console.log([4, 2, -5, -7, 4, 5, -8].findIndex(x => x < 0));