let textInput = document.querySelector('#new-task')//textField
// console.log(textInput);
let taskAdd = document.querySelector('#addTask')//button
// console.log(taskAdd);
let incompleteListUl = document.querySelector(`#items`)
// console.log(incompleteListUl)

let completeListUl = document.querySelector(`.complete-list ul`)
// console.log(completeListUl);

let from = document.querySelector(`.new-task-container`)

// create task jukuno akta task create kora
let createTask = function (task) {
  let listItem = document.createElement(`li`)
  let input = document.createElement(`input`)
  input.type = 'checkbox'
  let label = document.createElement(`label`)
  label.innerText = task
  listItem.appendChild(input)
  listItem.appendChild(label)
  return listItem
}

// amra je task ta create korse sai task ta akhon amra add korbo

let addTask = function (event) {
  // amra akhon akta javascript built in function baboher korbo jer kaaz hollo kuno kisu submit korle jeno browser notun kore jeno reload na hoy.

  event.preventDefault()
  let listItem =createTask(textInput.value)//amra amder input er value ta ai varable a diye dilam

  //akhon sai value ta browser a list hisabe add kora ter jonno amra ja korte pare ta holo

  incompleteListUl.appendChild(listItem)//ul er morde ai li ti add kore dibe
  textInput.value = ''//task add korer sathe input field blank hoye jabe

  //amarder aituku karjer mardome amra input thake value niye sai value ta ul er morde add korte perbo.kinut akhon amra chasse list item a je input checkbos ti ase oita te click kore oi checkbox ta remove hoye aber oi checkbox add hobe complete task a ter jonn amader ja korte hobe saita holo arekta function create kora and then oita aiter sathe create kora.

  //bind the new list item in the in complete list
  bindInCompletItems(listItem,completeTask)

}

let completeTask = function () {
  //jode kuno akta element er morde thake sai element er parent node ke dore poyojon tahole use (this.parentNode ai method ti )
  let listItem = this.parentNode
  let deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Delete'
  deleteBtn.className= 'delete'
  listItem.appendChild(deleteBtn)
  let checkbox = listItem.querySelector('input[type="checkbox"]')
  checkbox.remove
  completeListUl.appendChild(listItem)
  bindCompleteItems(listItem,deleteTask)
}

// delete task work deleted the list items for complete sections
let deleteTask = function () {
  let listItem = this.parentNode
  let ul = this.parentNode
  ul.removechild(listItem)
}
// click checkbox events function

let bindInCompletItems = function (taskItem, clickCheckBox) {
  let checkBox = taskItem.checkBox('input[type="checkbox"]')
  checkBox.onchange=clickCheckBox
}

// this function work for you are complete the task
let bindCompleteItems = function (taskItem, deleteButtonClick) {
  let deleteBtn = taskItem.querySelector('.delete')
  deleteBtn.onclick=deleteButtonClick
}
// from submit

from.addEventListener('submit',addTask)