// Activity 1
document.getElementById('head').innerText = 'Hello, greetings by author!';
document.getElementsByClassName('para')[0].style.backgroundColor = 'yellow';


// Activity 2
let newElement = document.createElement('div');
newElement.innerText = 'Hi this is a new element.';
document.body.appendChild(newElement);

let newliElement = document.createElement('li');
newliElement.innerText = 'Russia';
document.getElementsByClassName('newlist')[0].appendChild(newliElement);
let newliElement2 = document.createElement('li');
newliElement2.innerText = 'Netherland';
document.getElementsByClassName('newlist')[0].appendChild(newliElement2);

// Activity 3
document.querySelector('.para').remove();
document.querySelector('.newlist').lastElementChild.remove();

// Activity 4
document.querySelector('img').src = './mountain-view.jpg';
document.querySelector('img').classList.remove('enlarge');
document.querySelector('img').classList.add('small');

// Activity 5
function changeContent(){
    document.querySelector('.para2').innerText = "Nice view below :')."
}

function changeBorderColor(){
    document.querySelector('.para2').style.borderColor = "yellow";
}

function defaultColor(){
    document.querySelector('.para2').style.borderColor = "#000000";
}
