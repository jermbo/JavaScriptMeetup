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
Another really useful tool when working with API's in general. It is a Chrome extension and a stand a lone app. (GetPostMan)[https://www.getpostman.com/] Go ahead and down load it. You will thank me later!

## The Setup
We are going to recreate my project database and walk thought where I started, what I did to get a little easier, then where I have ended up. So, the best place to start is at the beginning. ( For those who just want the end results, start off in 01-the-beginning folder. )

### The Beginning
When I was first playing around with this, it was a simple JSON file that I hand created and then I ajax'd in and started to manipulate. That go tedious real quick. This is when I found the JSON Server.

I started by creating a directory and initialized a Node project.

`npm init`

I followed the prompts, filling out the information as I saw fit. Once that was done I started installing packages. I installed JSON Server both globally and locally:

```JavaScript
npm i -g json-server
npm i -S json-server
```

While that was installing I created a JSON file that will eventually store my data.

```JSON
{
  "info": {},
  "characters" : [],
  "episodes": []
}
```

When that was completed, I ran the command to start the server and listen for file changes.

`json-server --watch db.json --port 8000`

Then I made my way to the browser and went to `http://localhost:8000`. If everything started properly you should see a welcome screen with links to your db.
