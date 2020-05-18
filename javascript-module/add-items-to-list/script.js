function addToList() {
    var textValue = document.getElementById('newItem').value,
        ul = document.getElementById('myList'),
        li = document.createElement('li');

    li.innerHTML = textValue;
    ul.appendChild(li);
}

