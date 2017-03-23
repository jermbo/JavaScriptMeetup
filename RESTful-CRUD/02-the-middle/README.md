# The Middle
As I got tired of creating a JSON object and sending that through Postman, I decided to create a simple form to capture the information and send it to the API instead.

Like the first one, you can get this repo by either cloning it or downloading the zip. Run `npm install` to get all the packages. And run `npm run dev` when the packages are installed. I changed the scripts a little bit because of the added complexity.

There is a gulp task starting a local server and running the code. That also starts the browser and refreshes any changes that are made. ( Gulp + BrowserSync is a beautiful thing. If you do not know about it, GO LEARN ABOUT IT NOW! You will thank me later. )

All of this is written in vanilla JavaScript and it's using ES6 and later API's. Be sure to run this in evergreen browsers. Latest Chrome or FireFox should work just fine.

*The Fetch API does not work in or IE 11- or Safari 10- so avoid those for the example. (CanIUse)[http://caniuse.com/#search=fetch]*
