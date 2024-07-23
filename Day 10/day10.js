// Activity 1
document.querySelector('.changeContent').addEventListener('click',()=>{
    document.querySelector('.para1').innerText = 'Changed inner content!';
});

document.querySelector('.img').addEventListener('dblclick', (event)=>{
    event.target.style.visibility = 'hidden';
});

// Activity 2
document.querySelector('.para1').addEventListener('mouseover', (event)=>{
    event.target.style.backgroundColor = 'aliceblue';
});
document.querySelector('.para1').addEventListener('mouseout', (event)=>{
    event.target.style.backgroundColor = 'transparent';
});

// Activity 3
document.getElementById('name').addEventListener('keydown', (event)=>{
    console.log(event.key);
});

document.getElementById('name').addEventListener('keyup', ()=>{
    document.querySelector('.inputData').innerText = document.getElementById('name').value;
});

// Activity 4
document.getElementById('form').addEventListener('submit', (event)=>{
    event.preventDefault();
    let formData = new FormData(document.getElementById('form'));
    for (let entries of formData.entries()) {
        console.log(entries[0] + ': ' + entries[1]);
    }
});

document.getElementById('gender').addEventListener('change', (event)=>{
    document.querySelector('.selectData').innerText = document.getElementById('gender').value;
});

// Activity 5
