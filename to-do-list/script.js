// Item shape: string 

// State variables: Bool

// Array name: itemsArray

// Storage key name: items

var itemsArray = []; 

var newItem = document.querySelector('.item'); 

var submit = document.querySelector('.submit'); 

var itemsContainer = document.querySelector('.display-items'); 

var list = document.querySelector('.item-list')

var clearAll = document.querySelector('.clear')




submit.addEventListener('click', submitClicked)

clearAll.addEventListener('click', clearClicked)




function submitClicked(e) {
    if(newItem.value === '') {
        alert('Empty Value')
        return 
    }

    e.preventDefault()
    addToArray();
     renderUI()
   
    console.log(newItem.value); 
    console.log(itemsArray)
}

function clearClicked(e) {
    //  e.preventDefault()
     itemsContainer.innerHTML = ''

}

function addToArray() {
    itemsArray.push(newItem.value)
    
}

function renderUI() {

    if(itemsArray.length > 0) {
          list.style.display = "block"
         clearAll.style.display = 'block'
       
    } else {
          list.style.display = "none"
          clearAll.style.display = 'none'
         
  
       
         
    }
 

    var item = document.createElement('li'); 

    item.textContent = newItem.value; 

    list.appendChild(item); 

    newItem.value = ''



  




}