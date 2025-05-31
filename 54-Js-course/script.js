const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();


    if(nameInput.value === '' || emailInput.value === '') {
         msg.classList.add('error');
         msg.innerHTML = 'Please enter the fields';
         setTimeout(() => msg.classList.remove(),3000);
    } else {
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${email.value}`  ))
       userList.appendChild(li);

       //clear fields
       nameInput.value = '';
       emailInput.value = '';
    }
}



// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//    e.preventDefault();
//    document.querySelector("#my-form").style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = "<h1>Hello</h1>"
// });


//console.log(window);

//alert(1);
//single
// const form = document.getElementById('my-form');
// console.log(document.querySelector('#my-form'));


//Multiple element
//document.querySelectorAll('.item');

// const items = document.querySelectorAll('.item');

// items.forEach((item) => {
//     console.log(item);
// })


//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();

// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Martin";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector('.btn');
//  btn.style.background = 'red';

 //btn.style.display = 'none';