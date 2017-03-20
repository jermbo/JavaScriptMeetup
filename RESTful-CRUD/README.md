# Build a ReSTful CRUD API in seconds
Before we get to far into the weeds, I want to take a minute to make sure we are all on the same page with some terminology and what the problem is.

## Definitions

### API
Application Program Interface. It's a way for two computers to communicate with each other. Client software calls a Server API and gets back structured data.

### ReST
Representational State Transfer. It's an architecture style for designing networked applications. It relies on stateless, client-server interaction, typically via HTTP.

### CRUD
Create Read Update Delete. These are your basic database functions. The HTTP Method equivalents are POST = Create; GET = Read; PUT ( or ) PATCH = Update; DELETE = Delete.

## The problem
You are working on a site or app that needs to interact with data of some sort, but the API doesn't exist for you to begin development.

Or

You are building an interface to interact with the user and capture information. But the storage location for that information isn't defined yet or the details on the data are still a bit fuzzy.

## The solution
A Mock API would be a great solution. On the surface, it brings your the ability for rapid development. Typically in early stages of a project, the data requirement are fuzzy and change over time. It is much more cost effective to not be locked into a schema right away. You can start to build and design the data as you need it.

The ability to work offline is a huge plus. With a Mock API all your calls are local. So if you are in a situation where the internet is unreliable, down, or non-existent, you can still work and make progress.

Inter-team dependencies are reduced in the early stages of development. This not only saves money but offers the flexibility. The money savings is obvious, you don't need the backend team creating something that may or may not be used. And the flexibility comes with the ability to change due to the client requirements or better understanding of the data needs and how it interacts with your application.

## The tools
What I am about to show you is just one of many ways of skinning this cat. My goal with this lecture and starter files is to get anyone up and running with an API in seconds.

Without further adieu, here is the list of tools.

### NodeJS
This should go without saying now-a-days, but if you do not have Node installed. Go to NodeJS.org and install the latest version.

### JSON-Server
"Get a full fake ReST API with zeo coding in less than 30 seconds (seriously)" - (source)[https://github.com/typicode/json-server]
