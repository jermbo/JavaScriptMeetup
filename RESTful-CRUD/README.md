# Build a ReSTful CRUD API in seconds

## Definitions
Before we get to far into the weeds, I want to take a minute to make sure we are all on the same page with some terminology and what the problem is.

### ReST
Representational State Transfer. It's an architecture style for designing networked applications. It relies on stateless, client-server interaction, typically via HTTP.

### CRUD
Create Read Update Delete. These are your basic database functions. The HTTP Method equivalents are POST = Create; GET = Read; PUT ( or ) PATCH = Update; DELETE = Delete.

### API
Application Program Interface. It's a way for two computers to communicate with each other. Client software calls a Server API and gets back structured data.

## The problem
I have two reasons for wanting to create my own API.

First, teaching API's to new developers is hard. There are a lot of blockers when it comes to using an API. For example, authentication is sometimes hard, especially for beginners. Data limitations hinder the development process. Varying data sets make it difficult teach core concepts. So, I decided that it would be best to create my own API to show the core concepts.

This started off ok. I set up a node server, started building out the CRUD, and the filters, then the limitations. As I got deeper into my Node and Express API, there were a lot of things I haven't considered before. Mainly I have built an API to do exactly what I needed, when I needed it. There were a lot more things to consider than I cared about.

My second problem was trying to find an API that had all the data related to my favorite TV show. Futurama. I am a huge fan and trying to find various pieces of information I had to go to several different locations to gather said knowledge.

I figured this would be a fun way to learn API for my students and fulfill a particular nerd itch I have been wanting to scratch for a while. Two birds one stone.

## The solution
The solution is a Mock API. Pick a language and you will find a solution for creating a Mock API. The one we will focus on is called (JSON Server)[https://github.com/typicode/json-server]. It's a Node package that can run locally or be pushed up to a server. This has all the functionality one would expect a ReST API to have.

## But why Mock API's?
The reasons vary from project to project, though there are some cases that will fit most projects.

First, the ability to develop rapidly is golden. Typically, in early stages of a project, the data requirements are fuzzy and change over time. It's much more cost effective to not be 100% locked into a schema right away. You can start building and design the data as you need it.

The ability to work offline is great to. When working with a Mock API all your calls are local. So you don't need to worry about if your internet is unreliable, down, or non-existent. You can still work and make progress.

Inter-team dependencies are reduced in the early stages of development. This not only saves money but offers the most flexibility. The money savings is obvious, you don't need the back end team creating something that may or may not be used. And the flexibility comes with the ability to change due to the client requirements or better understanding of the data needs and how it interacts with your application.

The list can go on, but I feel these points are the most generic to every case.

## The tools
To get this up and running you need a small set of tools, 3 to be exact.

### NodeJS
This should go without saying now-a-days, but if you do not have Node installed, install it. Go to (NodeJS)[https://nodejs.org/en/] and follow the bouncing ball to install the latest version.

### JSON Server
"Get a full fake ReST API with zero coding in less than 30 seconds (seriously)" - (JSON Server GitHub)[https://github.com/typicode/json-server]. This lovely tool is what gives you all the ReSTful CRUDiness you expect from an API. We will break this down soon.

### Postman
Another really useful tool when working with API's in general. It is a Chrome extension and a stand a lone app. (GetPostman)[https://www.getpostman.com/] Go ahead and down load it. You will thank me later!

## The Setup
We are going to recreate my (Futurama)[https://github.com/jermbo/FuturamaDatabase] database and walk thought where I started, what I did to make it a little easier, then where I have ended up. So, the best place to start is at the beginning. ( For those who just want the end results, start off in (01-the-beginning)[https://github.com/jermbo/JavaScriptMeetup/tree/master/RESTful-CRUD/01-the-beginning] folder. )

### The Beginning
When I was first playing around with this, it was a simple JSON file that was hand crafted and then ajax'd in to display to the users. Adding new data to the JSON file got tedious, real quick. After a few days of copying and pasting, making stupid JSON syntax errors, and making other various spelling mistakes, I got really frustrated. So, I started looking for a better solution. This is when I found out about JSON Server. The whole game changed from this point on!

The first thing that needed to be done was officially start this as a project rather than some random grouping of files. So, like any Node project, I started off by initializing the project.

`npm init`

Followed the prompts, filling out the information as I saw fit. Once that was done I started installing packages. JSON Server was installed both globally and locally like so:

```JavaScript
npm i -g json-server
npm i -S json-server
```

While that was installing I started a JSON document that housed my desired groupings of data.

```JSON
{
  "info": {},
  "characters" : [],
  "episodes": []
}
```
When JSON Server was done loading, both locally and globally, I ran the command to start the server and listen for file changes.

`json-server --watch db.json --port 8000`

Then navigated to `http://localhost:8000`. Everything started properly and saw a welcome screen with links to the nodes in the database.

Now that everything is up and running, the data importing can begin. Trying to figure out what information was required, what it looked like, what was grouped together, and what made the most sense. I eventually settled on a schema that looked like:

```JavaScript
{
    "name": {
      "first": "",
      "middle": "",
      "last": ""
    },
    "info": {
      "age": "",
      "gender": "",
      "species": "",
      "homePlanet": ""
    },
    "occupation": "",
    "sayings": [],
}
```

Now that everything is squared away, it was time to get information an populate the database. After using Postman for a handful of entries, I got tired of doing this. This was not much better then hand editing the JSON file. So I decided, I knew what I wanted to do and moved on to the next phase.

## The Middle
In a pinch, the hand editing of the JSON files is acceptable. It's not fun, but it can get the job done. But for my project, I needed to gather a lot of information and I wasn't sure where it was going to come from. So, this was going to take a while. This is when I decided to create a couple of forms to capture the information I desired and let that do the heavy lifting.

The first iteration was terrible. I was doing things the very old fashion way by setting each input field up with an id, checking if there was a value, adding to object, all of this one at a time. I thought there had to be a better way, this was just as tedious to set up. Although this did save time in the long run, it did not give me the ability to make several forms fast.

The way to get around this issue is really utilize the `name` attribute and the array features of JavaScript. My markup looked a little something like this :

```HTML
<input type="text" name="name.first" />
<input type="text" name="name.middle" />
<input type="text" name="name.last" />
<button id="submit">Submit Form</button>
```

With all the information I wanted grouped together, I used the dot notation to separate that. This is a great way to have your code be self documenting. We know that objects are accessed via the dot notation, and this tells us that there will be an object called `name` with three children `first | middle | last`. Knowing that structure we can now figure out how to get the value out of each one of them and build the object necessary to add to the database. The JavaScript looks like this :

```JavaScript
const inputs = document.querySelectorAll('inputs[type="text"]');
const submit = document.querySelector('#submit');
const obj = {};

submit.addEventListener('click', (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        const keys = input.value.split('.');
        if( keys.length == 1){
            obj[keys[0]] = input.value.trim();
        }else{
            if(!obj.hasOwnProperty(keys[0])){
                obj[keys[0]] = {};
            }
            obj[keys[0]][keys[1]] = input.value.trim();
        }
    });
});
```

There is a lot going on here, let's break it down line by line.

First, we are caching the inputs, submit button, and an object. When the user clicks the button, loop through each input field and place them in the `obj` created.

How it is determined where they go is but the name. You `split('.')` on the dot, and this returns you an array of string(s). If there is one dot in the `name` property then you will have an array of 2. If no dots, you will have an array of 1. Knowing that, we can check it see if there is more than one. If it has only one value, then we can just add it to the object like `obj[keys[0]] = input.value.trim();`.

If we have 2 items in the array, we essentially need to do the same thing, but make sure if the key exists or not. So `if(!obj.hasOwnProperty(keys[0]))` checks to see if the first item in the array is present as a key on the object. If it is not, add it, then add the child value. If the key does exist, skip creating it, and add the child to it.  

```JavaScript
if(!obj.hasOwnProperty(keys[0])){
    obj[keys[0]] = {};
}
obj[keys[0]][keys[1]] = input.value.trim();
```

This is what makes it powerful. I can create as many fields as is needed, give it a good naming structure, and populate the database with it. Check out 02-the-middle for the example of the character import script.

This was done for each piece of information that the database required. There is a form for each database collection and it all uses the same script. This is cool and all, but why not VueJS it up?

## The End

Being that I needed a good project to build in VueJS, I figured this would be a good opportunity to do so. The bad news is, this has not been completed. I have a version on the Futurama Database github, but it's practically the same as the previous example, just more Vue-ish. Looks like there will need to be another talk and push to this repo for an update.
