const enterBtn = document.getElementById('enter');
const userInput = document.getElementById('userInput');
const shoppingList = document.getElementById('shoppingList');
const li = document.getElementsByTagName('li');
const ul = document.querySelector('ul');


// Find length of word typed in input box
const inputLength = () => {
	return userInput.value.length;
}

//Check if there is a value in the input box after clicking button
const addListAfterClick = () => {
	if (inputLength() > 0) {
		addItem();
	}
}

// Check if the correct keycode has been pressed and if there is a value in the input box
const addAfterKeypress = (e) => {
	if (inputLength() > 0 && e.keyCode === 13) {
		addItem();
	}
}

//Creates li element, adds the userInput to the li element, appends li to shopping list, clears the input box after
const addItem = () => {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(userInput.value));
	shoppingList.appendChild(li);
	userInput.value = "";

	// Create Delete button
	const deleteBtn = document.createElement('button');
	deleteBtn.className = 'delete';
	deleteBtn.appendChild(document.createTextNode('X'));
	li.appendChild(deleteBtn);
}

// Remove item from list when delete button is pressed
const removeFromList = (e) => {
	if (e.target.classList.contains('delete')) {
		let li = e.target.parentElement;
		shoppingList.removeChild(li);

	}
}

const lineThrough = (e) => {
	if (e.target.tagName === 'li');
	e.target.classList.toggle("done");


}

ul.addEventListener('click', lineThrough);
shoppingList.addEventListener('click', removeFromList);
enterBtn.addEventListener('click', addListAfterClick);
userInput.addEventListener('keypress', addAfterKeypress);