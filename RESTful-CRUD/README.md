# Build a ReSTful CRUD API in seconds
// TODO

## Definitions
Before we get to far into the weeds, I want to take a minute to make sure we are all on the same page with some terminology and what the problem is.

### API
Application Program Interface. It's a way for two computers to communicate with each other. Client software calls a Server API and gets back structured data.

### ReST
Representational State Transfer. It's an architecture style for designing networked applications. It relies on stateless, client-server interaction, typically via HTTP.

### CRUD
Create Read Update Delete. These are your basic database functions. The HTTP Method equivalents are POST = Create; GET = Read; PUT ( or ) PATCH = Update; DELETE = Delete.

## The problem
I have two reasons for wanting to create my own API.

First, teaching API's to new developers is hard. There are a lot of blockers when it comes to using an API. For example, authentication is sometimes hard, especially for beginners. Data limitations hinder the development process. Varying data sets make it difficult teach core concepts. So, I decided that it would be best to create my own API to show the core concepts.

This started off ok. I set up a node server, started building out the CRUD, and the filters, then the limitations. As I got deeper into my Node and Express API, there were a lot of things I haven't considered before. Mainly I have built an API to do exactly what I needed, when I needed it. There were a lot more things to consider than I cared about.

My second problem was trying to find an API that had all the data related to my favorite TV show. Futurama. I am a huge fan and trying to find various pieces of information I had to go to several different locations to gather said knowledge.

This I figured would be a fun way to learn API for my students and fulfill a particular nerd itch I have been wanting to scratch for a while. Two birds one stone.

## The solution
The solution is Mock API's. Pick a language and you will find a solution for creating a Mock API. The one we will focus on is called (JSON Server)[https://github.com/typicode/json-server]. It's a Node package that can run locally or be pushed up to a server. This has all the functionality on would expect a ReST API should have.

## But why Mock API's?
The reasons vary from project to project, but the overall reasons are pretty solid.

First, the ability to develop rapidly is golden. Typically, in early stages of a project, the data requirements are fuzzy and change over time. It's much more cost effective to not be 100% locked into a schema right away. You can start building and design the data as you need it.

The ability to work offline is great to. When working with a Mock API all your calls are local. So you don't need to worry about if your internet is unreliable, down, or non-existent. You can still work and make progress.

Inter-team dependencies are reduced in the early stages of development. This not only saves money but offers the flexibility. The money savings is obvious, you don't need the backend team creating something that may or may not be used. And the flexibility comes with the ability to change due to the client requirements or better understanding of the data needs and how it interacts with your application.

The list can go on, but I feel I have made my point.

## The tools
To get this up and running you need a small set of tools, 3 to be exact.

### NodeJS
This should go without saying now-a-days, but if you do not have Node installed, install it. Go to (NodeJS)[https://nodejs.org/en/] and follow the bouncing ball to install the latest version.

### JSON Server
"Get a full fake ReST API with zero coding in less than 30 seconds (seriously)" - (JSON Server GitHub)[https://github.com/typicode/json-server]. This lovely tool is what gives you all the ReSTful CRUDiness you expect from an API. We will break this down soon.

### Postman
Another really useful tool when working with API's in general. It is a Chrome extension and a stand a lone app. (GetPostman)[https://www.getpostman.com/] Go ahead and down load it. You will thank me later!

## The Setup
We are going to recreate my project database and walk thought where I started, what I did to get a little easier, then where I have ended up. So, the best place to start is at the beginning. ( For those who just want the end results, start off in 01-the-beginning folder. )

### The Beginning
When I was first playing around with this, it was a simple JSON file that was hand crafted and then ajax'd in to display to the users. Adding new data to the JSON file got tedious, real quick. After a few days and getting fed up of making stupid JSON syntax errors, I started looking for a better solution. This is when I found out about JSON Server. The whole game changed from this point on!

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
    "age": "",
    "gender": "",
    "species": "",
    "homePlanet": "",
    "occupation": "",
    "sayings": []
}
```

Now that everything is squared away, it was time to get information an populate the database. After using post man for a handful of entries, I got tired of doing this. This was not much better. So I decided, I knew what I wanted to do and moved on to the next phase.

## The Middle
