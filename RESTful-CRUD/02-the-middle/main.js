console.clear();
const baseURL = 'http://localhost:8000',
    inputs = document.querySelectorAll('[type="text"], [name="sayings"]'),
    submitBtn = document.querySelector('#submit'),
    displayBtn = document.querySelector('#display'),
    obj = {};

submitBtn.addEventListener('click', getValues);


function getValues() {
    //
    // Loop through each input that has been cached
    //
    inputs.forEach(input => {
        //
        // If input name is equal to sayings,
        // then we want to store the data in an array of items,
        // so we split in semicolon and space ( '; ' ).
        //
        if (input.name == 'sayings') {
            obj[input.name] = input.value.split('; ');
        } else {
            //
            // For everything else,
            // we want to store in the object based on its name.
            //

            // first split the name field and get an array of values
            const keys = input.name.split('.');

            // if the length is larger than one we want to create a parent child relationship
            if (keys.length > 1) {
                // first we need to check if the key exists
                if (!obj.hasOwnProperty(keys[0])) {
                    // add it if it does not exist
                    obj[keys[0]] = {};
                }
                // then add the child of the object
                obj[keys[0]][keys[1]] = input.value.trim();
            } else {
                // otherwise, put it in its own key
                obj[keys[0]] = input.value.trim();
            }
        }
    });
    // then save the data
    saveData();
}

function saveData() {
    //
    // define what you are trying to do with the request
    // here we are posting, and sending the data along with the body,
    // and making sure the headers are tell the server what is coming.
    //
    const header = {
        body: JSON.stringify(obj),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // call the fetch api and pass in the destination url and the header.
    fetch(`${baseURL}/characters`, header)
        .then(data => {
            // display to the user the results.
            console.log(data);
        });
}
