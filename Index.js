
const addButton = document.querySelector('.addButton');
var inputValue =   document.querySelector('.input');
var container = document.querySelector('.container');

class item
{
	constructor(itemName)
	{
		this.createDiv(itemName);
	}

	createDiv(itemName)
	{
		let input = document.createElement('.input');
		input.value = itemName;
		input.disabled = true;
		input.classList.add('');
	}
}
