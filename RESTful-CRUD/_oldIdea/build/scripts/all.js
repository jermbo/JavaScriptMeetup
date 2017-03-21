'use strict';

var categorySelect = document.querySelector('.category');
var submitBtn = document.querySelector('#submit');
var inputs = document.querySelectorAll('[type="text"]');
var baseURL = 'http://localhost:8000';

fetch(baseURL + '/db').then(function (data) {
    return data.json();
}).then(function (data) {
    displayCategories(data);
});

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function displayCategories(data) {
    var output = '';
    for (var prop in data) {
        output += '<option value="' + prop + '">' + prop.capitalize() + '</option>';
    }
    categorySelect.innerHTML = output;
}

var obj = {};
submitBtn.addEventListener('click', function () {
    inputs.forEach(function (input) {
        var keys = input.name.split('.');
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
    var cat = categorySelect.value;
    fetch(baseURL + '/' + cat, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (data) {
        console.log(data);
    });
}
//# sourceMappingURL=all.js.map
