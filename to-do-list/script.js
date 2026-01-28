// Item shape: string 

// State variables: Bool

// Array name: itemsArray

// Storage key name: items

var itemsArray = []; 

var newItem = document.querySelector('.item'); 

var submit = document.querySelector('.submit'); 

var itemsContainer = document.querySelector('.display-items'); 

var list = document.querySelector('.item-list')

var filter = document.querySelector('.filter'); 

var clearAll = document.querySelector('.clear')

submit.addEventListener('click', submitClicked)

clearAll.addEventListener('click', clearClicked)

list.addEventListener('click', listClicked)

//   for(let i = 0; i < allItems.length; i++) {
//         allItems[i].addEventListener('click', printItem)   
//     }


function listClicked(e) {
    // if (e.target.className !== "fa-solid fa-x") return;


    if(e.target.className === 'fa-solid fa-x') {
        
    const clickedText = e.target;

     const clickedIndex = Array.from(list.children).indexOf(e.target);

        clickedText.remove()
            itemsArray[clickedIndex] = itemsArray[itemsArray.length - 1]; 
    itemsArray.pop();
 
    renderUI()

    }
    

}
 
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
         filter.style.display = 'block'
       
    } else if (itemsArray.length === 0) {
          list.style.display = "none"
          clearAll.style.display = 'none'
          filter.style.display = 'none'  
    }

   

    for(let i = 0; i < itemsArray.length; i++) {

      var item = document.createElement('li');

      var icon = document.createElement('i')
      icon.className = 'fa-solid fa-x'
      
      
      item.textContent = itemsArray[i];
      item.appendChild(icon);


      list.appendChild(item);

     
    }

     
      newItem.value = ''
 

    
}