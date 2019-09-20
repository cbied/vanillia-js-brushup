// It should...
// 1 // have place to store todos
let todos = []
// 2 // have a way to display todos
// 3 // have a way to add todos
    // input field
let todoList = document.getElementById('todoList')

    // button onclick push into todos array
let addTodo = document.getElementById('addTodo')
let todoInput = document.getElementById('todoText')
function addTodos() {
    // push todos in arr
    todos.push(todoInput.value)
    // create an li and add it to the ul
    let listItem = document.createElement('li')
    todoList.appendChild(listItem)

    // set text to the inputs value
    let text = todoInput.value

    // give a unique id so we can delete the item later
    listItem.setAttribute('id', todos.length)
    // add them text to the li element
    listItem.append(text)

    // reset the input field
    todoInput.value = ''
}


// 4 // have a way to change a todo
// 5 // have a way to delete todo