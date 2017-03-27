const categorySelect = document.querySelector('.category');
const submitBtn = document.querySelector('#submit');
const inputs = document.querySelectorAll('[type="text"]');
const baseURL = 'http://localhost:8000';

fetch(`${baseURL}/db`)
    .then(data => data.json())
    .then(data => {
        displayCategories(data);
    });

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function displayCategories(data) {
    let output = '';
    for (const prop in data) {
        output += `<option value="${prop}">${prop.capitalize()}</option>`;
    }
    categorySelect.innerHTML = output;
}

let obj = {};
submitBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        const keys = input.name.split('.');
        if (keys.length > 1) {
            if (!obj.hasOwnProperty(keys[0])) {
                obj[keys[0]] = {};
            }
            obj[keys[0]][keys[1]] = input.value.trim();
        } else {
            obj[keys[0]] = input.value.trim();
        }
    });
    //console.log(obj);
    submitData(obj);
});

function submitData(data) {
    const cat = categorySelect.value;
    fetch(`${baseURL}/${cat}`, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(data => {
            console.log(data);
        });
}
