/////////////////////////////////////////////////////////

function colorbutton(){
    alert('nordic blue')
colorbtn.style.backgroundColor='#29446f'
colorbtn.style.color='#FFFFFF'
colorbtn.textContent='Nordic blue'
}

let colorbtn = document.querySelector('#color')
colorbtn.addEventListener('click',colorbutton)
/////////////////////////////////////////////////////////

function myFavPlace(){
    alert('My bed')
image.style.display='block'
button.style.display='none'

}
let image = document.querySelector('#bed')
let button = document.querySelector('#place')
button.addEventListener('click', myFavPlace)
//////////////////////////////////////////////////////////
function myFavRitual(){
    alert('my computer')
ritualButt.style.display='none'
ritImage.style.display='block'
}
let ritualButt = document.querySelector('#ritual') 
let ritImage = document.querySelector('#ritualimage')
ritualButt.addEventListener('click',myFavRitual)
///////////////////////////////////////////////////////////
function ugly(){
alert('Thats an ugly face huh?')
}
let imagekeaton = document.querySelector('#keaton')
imagekeaton.addEventListener('mouseover',ugly)

