# The Beginning
This is the starter pack for those who want something up and running quickly.

All you have to do is get the repo down by either cloning it or downloading the zip. Run the normal `npm install` to get all the packages. When that is done, you can run `npm start`. This triggers the npm scripts to trigger the json server and open it on port 8000.

Feel free to change the db.json to what ever your project needs. Be aware this is JSON, so it's very picky about the syntax. Must use double quotes for everything, including the keys. And no dangling commas. Meaning, the last item in your object or array does not have a comma.

**Valid JSON**
```JSON
{
    "info": {
        "desc": "This is a description about the thing"
    },
    "list": [
        {
            "title": "list item 1",
            "desc": "item description"
        },
        {
            "title": "list item 1",
            "desc": "item description"
        }
    ]
}
```

**Invalid JSON**
```JSON
{
    info: {
        "desc": "This is a description about the thing"
    },
    'list': [
        {
            "title": "list item 1",
            "desc": "item description"
        },
        {
            "title": "list item 1",
            "desc": "item description",
        },
    ]
}
```
