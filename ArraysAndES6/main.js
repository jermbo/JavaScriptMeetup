const baseURL = 'http://www.anapioficeandfire.com/api/characters/?pageSize=50';

const characters = []

fetch(baseURL)
  .then(resp => resp.json())
  .then(data => {
    // wrong.. this give you an array inside an array.
    //characters.push(data);
    //console.log(characters);

    // correct! spread all the items in to the characters array
    characters.push(...data);
    characters.forEach(char => {
    	if(char.name){
    		names.innerHTML += `<p class='name col-xs-6'>${char.name}</p>`
    	}
    });
  });

function matchName(nameToMatch, chars) {
  return chars.filter(char => {
    const regex = new RegExp(nameToMatch, 'gi')
    return char.name.match(regex);
  });
}

function displayMatches() {
  const match = matchName(this.value, characters);
  const html = match.map(m => {
    const regex = new RegExp(this.value, 'gi');
    const name = m.name.replace(regex, `<span class='hl'>${this.value}</span>`);
    if(m.name){
    	return `<p class='name col-xs-6'>${name}</p>`
    }
  }).join('');
  names.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const names = document.querySelector('.names');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

////////////////
var actors = [
  {name:"Katharine Hepburn",yearBorn:"1907",yearPassed:"2003",credits:"52"},
  {name:"Jack Nicholson",yearBorn:"1937",yearPassed:"",credits:"75"},
  {name:"Laurence Olivier",yearBorn:"1907",yearPassed:"1989",credits:"88"},
  {name:"Meryl Streep",yearBorn:"1949",yearPassed:"",credits:"79"},
  {name:"Humphrey Bogart",yearBorn:"1899",yearPassed:"1957",credits:"85"},
  {name:"Audrey Hepburn",yearBorn:"1929",yearPassed:"1993",credits:"55"},
  {name:"Robert DeNiro",yearBorn:"1943",yearPassed:"",credits:"133"},
  {name:"Bette Davis",yearBorn:"1908",yearPassed:"1989",credits:"124"},
  {name:"Cary Grant",yearBorn:"1904",yearPassed:"1968",credits:"76"},
  {name:"Marlon Brando",yearBorn:"1924",yearPassed:"2004",credits:"46"},
  {name:"James Stewart",yearBorn:"1908",yearPassed:"1997",credits:"98"},
  {name:"Ingrid Bergman",yearBorn:"1915",yearPassed:"1982",credits:"53"},
  {name:"Marilyn Monroe",yearBorn:"1926",yearPassed:"1962",credits:"56"},
  {name:"Al Pacino",yearBorn:"1940",yearPassed:"",credits:"56"},
  {name:"Grace Kelly",yearBorn:"1929",yearPassed:"1982",credits:"30"},
  {name:"Orson Welles",yearBorn:"1915",yearPassed:"1985",credits:"122"},
  {name:"Sidney Poitier",yearBorn:"1927",yearPassed:"",credits:"54"},
  {name:"Paul Newman",yearBorn:"1925",yearPassed:"2008",credits:"83"},
  {name:"Charles Chaplin",yearBorn:"1889",yearPassed:"1977",credits:"88"},
  {name:"Tom Hanks",yearBorn:"1956",yearPassed:"",credits:"50"},
  {name:"Denzel Washington",yearBorn:"1954",yearPassed:"",credits:"56"},
  {name:"Daniel Day-Lewis",yearBorn:"1957",yearPassed:"",credits:"29"},
  {name:"Julia Roberts",yearBorn:"1967",yearPassed:"",credits:"57"},
  {name:"Morgan Freeman",yearBorn:"1937",yearPassed:"",credits:"65"},
  {name:"Kevin Spacey",yearBorn:"1959",yearPassed:"",credits:"82"},
  {name:"Clint Eastwood",yearBorn:"1930",yearPassed:"",credits:"68"},
  {name:"Ralph Fiennes",yearBorn:"1962",yearPassed:"",credits:"66"},
  {name:"Will Smith",yearBorn:"1968",yearPassed:"",credits:"37"},
  {name:"Johny Depp",yearBorn:"1963",yearPassed:"",credits:"85"},
  {name:"Brad Pitt",yearBorn:"1963",yearPassed:"",credits:"75"},
  {name:"Leonardo DiCaprio",yearBorn:"1974",yearPassed:"",credits:"39"},
  {name:"Dwayne Johnson",yearBorn:"1972",yearPassed:"",credits:"93"}
];

const select = document.querySelector('.actorSelect');
const display = document.querySelector('.actorInfo');
actors.forEach(actor => {
	select.innerHTML += `<option value="${actor.name}">${actor.name}</option>`
});

select.addEventListener('change', (e) => {
	console.log(e.target.value)
	const html = actors.map(actor => {
		if( actor.name == e.target.value){
			return `<p>Name : ${actor.name}</p>
<p>Year Born : ${actor.yearBorn}</p>
<p>Year Passed : ${actor.yearPassed}</p>
<p># of Credits : ${actor.credits}</p>
`;
		}
	}).join('')
	display.innerHTML = html;
})

///////

const navItems = document.querySelectorAll('.nav li a');
console.log(navItems);
console.log(Array.from(navItems, item => item.textContent))