console.log("hello world");
function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted sucessfully')
}
let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);

function alerted(){
alert('you dont stink that bad')
}

let image = document.querySelector('#imaged')
image.addEventListener('mouseover', alerted)


