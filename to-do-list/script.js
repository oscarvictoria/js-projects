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
      e.preventDefault()
    if(newItem.value === '') {
        alert('Empty Value')
        return 
    }

  
    addToArray();
    renderUI()
   
    console.log(newItem.value); 
    console.log(itemsArray)
}

function clearClicked(e) {

     itemsArray = []
     renderUI()
    

}

function addToArray() {
    itemsArray.push(newItem.value)
    
}

function renderUI() {
    list.innerHTML = ''

    if(itemsArray.length > 0) {
          list.style.display = "block"
         clearAll.style.display = 'block'
       
    } else {
          list.style.display = "none"
          clearAll.style.display = 'none'  
    }

   

    for(let i = 0; i < itemsArray.length; i++) {
      var item = document.createElement('li'); 
      item.textContent = itemsArray[i];
      list.appendChild(item);
     
    }

     
      newItem.value = ''
 

    
}