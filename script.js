const enterBtn = document.getElementById('enter');
const userInput = document.getElementById('userInput');
let shoppingList = document.getElementById('shoppingList');


// Find length of word typed in input box
function inputLength() {
	return userInput.value.length;
}

//Check if there is a value in the input box after clicking button
function addListAfterClick() {
	if(inputLength() > 0) {
		addItem();
	}
}

// Check if the correct keycode has been pressed and if there is a value in the input box
function addAfterKeypress(e) {
	if(inputLength() > 0 && e.keyCode === 13) {
		addItem();
	}
}

//Creates li element, adds the userInput to the li element, appends li to shopping list, clears the input box after
  const addItem = () => {
    let li = document.createElement('li');
	li.appendChild(document.createTextNode(userInput.value));
	shoppingList.appendChild(li);
	userInput.value = "";


// Create Delete button
let deleteBtn = document.createElement('button');
deleteBtn.className = 'delete';
deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);
}





enterBtn.addEventListener('click', addListAfterClick);

userInput.addEventListener('keypress', addAfterKeypress);

