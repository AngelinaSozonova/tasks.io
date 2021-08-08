const myInput = document.querySelector('#myInput');
const myButton = document.querySelector('#myButton');
var mylist = document.querySelector('#mylist');
const mylist_length = document.getElementById('mylist');
var toDous;
var length__output;

function createDo (value) {
    const newItem = document.createElement('li');
        
    newItem.classList.add('item');
    newItem.textContent = value;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteBut');
    deleteButton.textContent = 'удалить';

    deleteButton.addEventListener('click', function() {
        mylist.removeChild(newItem); 
        saveList();
        counterTasks();
    })

    newItem.appendChild(deleteButton); 
    mylist.appendChild(newItem);
    myInput.value = ' ';
    counterTasks();
}

myButton.addEventListener('click', function() {
    const newValue = myInput.value;
    createDo(newValue);
    saveList();
})
    
document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem('item')) {
        mylist.innerHTML = localStorage.getItem('item'); 
        counterTasks();
    }
    
})

function saveList() {
    toDous = mylist.innerHTML;
    localStorage.setItem('item', toDous);
}

function counterTasks() {
    length__output = mylist_length.children.length; 
    document.getElementById('result').innerHTML = length__output; 
}