var addButton = document.getElementById('addButton');

var list = document.getElementById('todoList');

addButton.addEventListener('click', ()=>{

    var todoList = document.querySelector('#todoList')

    console.log(todoList)

    var newTodoItem = document.createElement('li')
    newTodoItem.classList.add('list-group-item')
    newTodoItem.classList.add('p-3')
    newTodoItem.classList.add('hvr-back-pulse')


    var userInput = document.getElementById('userInput').value;

    newTodoItem.innerHTML = ('<img class="smallCheck mx-2" src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png" alt="checkmark"> ' + ' <span>' + userInput + '</span>') 

    if (userInput) {
        todoList.appendChild(newTodoItem)
    }

    document.getElementById('userInput').value = ''
})


list.addEventListener('click', (e)=>{

    var delItem = e.target.parentElement

    for (let i=0; i < list.children.length; i++) {
        if (delItem == list.children[i]) {
            delItem.remove()
        }
    }
        
})

