const API_URL = 'http://localhost:8080/jakarta-aufgabe-backend/rest';

function catToString(cat) {
    return `${cat.id}: ${cat.name} (${cat.species}, ${cat.age} Jahre alt, ${cat.isVegan ? '' : 'nicht'} vegan)`;
}

async function ajax({ method, path, onload, body, json }) {
    console.log(body);

    const req = new XMLHttpRequest();

    req.onload = onload;

    if (body) {
        body = JSON.stringify(body);
    }

    req.open(method, `${API_URL}${path}`, true);

    if (json) {
        req.setRequestHeader('Content-Type', 'application/json');
    }
    
    if (body) {
        req.send(body);
    } else {
        req.send();
    }
}

function getAllCats() {
    const onload = function () {
        const data = JSON.parse(this.responseText);
        const ul = document.getElementById('out_getCats');
        console.log(data);
        for (value in data) {
            const li = document.createElement('li');
            li.innerHTML = catToString(data[value]);
            ul.appendChild(li);
        }
    };

    ajax({
        method: 'GET',
        path: '/cats/',
        onload,
    });
}

function getCatDetails() {
    const onload = function () {
        const cat = JSON.parse(this.responseText);
        console.log(cat);
        document.getElementById('out_getCatDetails').innerHTML = catToString(cat);
    };

    ajax({
        method: 'GET',
        path: `/cats/details/?id=${document.getElementById('in_getCatDetails_id').value}`,
        onload,
    });
}

function createCat() {
    const onload = function () {
        const data = this.responseText;
        console.log(data);
        document.getElementById('out_deleteCat').innerHTML = data;
        location.reload();
    };

    ajax({
        method: 'POST',
        path: '/cats/',
        body: {
            name: document.getElementById('in_createCat_name').value,
            species: document.getElementById('in_createCat_species').value,
            age: Number(document.getElementById('in_createCat_age').value),
            isVegan: JSON.parse(document.getElementById('in_createCat_isVegan').value),
        },
        json: true,
        onload,
    });
}

function updateCat() {
    const onload = function () {
        const data = this.responseText;
        console.log(data);
        document.getElementById('out_deleteCat').innerHTML = data;
        location.reload();
    };

    ajax({
        method: 'PUT',
        path: `/cats/?id=${document.getElementById('in_updateCat_id').value}`,
        body: {
            name: document.getElementById('in_updateCat_name').value,
            species: document.getElementById('in_updateCat_species').value,
            age: Number(document.getElementById('in_updateCat_age').value),
            isVegan: JSON.parse(document.getElementById('in_updateCat_isVegan').value),
        },
        json: true,
        onload,
    });
}

function deleteCat() {
    const onload = function () {
        const data = this.responseText;
        console.log(data);
        document.getElementById('out_deleteCat').innerHTML = data;
        location.reload();
    };

    ajax({
        method: 'DELETE',
        path: `/cats/?id=${document.getElementById('in_deleteCat_id').value}`,
        onload,
    });
}

getAllCats();