let form = document.getElementById('myForm');
let input = document.getElementsByClassName('myinp')[0];
let myul = document.getElementsByClassName('myul')[0];

form.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value.trim() === '') {
        return;
    }

    let newListItem = document.createElement('li');
    newListItem.innerHTML = input.value;
    
    // Create a delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => {
        newListItem.remove();
        storedata();
    });

    newListItem.appendChild(deleteButton);
    myul.appendChild(newListItem);

    input.value = '';
    storedata();
});

// Call storedata() when the page loads to retrieve stored data
window.addEventListener('load', () => {
    retrievefun();
});

function storedata() {
    localStorage.setItem('ashu', myul.innerHTML);
}

function retrievefun() {
    let getdata = localStorage.getItem('ashu');
    if (getdata) {
        myul.innerHTML = getdata;
    }
}
