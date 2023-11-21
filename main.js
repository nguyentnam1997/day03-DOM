const heading = document.getElementById('heading');
console.log(heading);

//đổi màu chữ: red, background: black
heading.style.color = 'red';
heading.style.backgroundColor = 'black';

const paraList = document.querySelectorAll('p');
console.log(paraList);

paraList.forEach(para => {
    para.style.color ='blue';
    para.style.fontSize =   '20px';
});

const p1 = document.querySelector('p');
const p2 = document.querySelector('p:nth-child(3)');
const p3 = document.querySelector('p:nth-child(4)');
console.log(p1);
console.log(p2);
console.log(p3);

//get/set text content
console.log(heading.innerHTML); //get đc cả thẻ html
console.log(heading.innerText); //chỉ get đc text
console.log(heading.textContent);   //chỉ get đc text

heading.innerHTML = 'Hello World';  //set nội dung

//insert
// document.body.insertBefore(p3, p1);
// heading.insertAdjacentElement('afterend', p3); 
p1.insertAdjacentElement('beforebegin', p3);

//insert button "click me" vào giữa p1, p2
// const btn = document.createElement("button");
// btn.innerText = 'Click me';
// console.log(btn);

// document.body.insertBefore(btn, p2);

p1.insertAdjacentHTML('afterend', '<button>Click me</button>')

//remove
//document.body.removeChild(p1);
p1.parentElement.removeChild(p1);   //truy cập thẻ cha thông qua thẻ con p1 (con)

//THAY THẾ
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter your name';

p2.parentElement.replaceChild(input, p2);   //thay thế thẻ input cho p2

//classList
p3.classList.add('text-red', 'text-bold', 'text-big');
p3.classList.remove('text-bold');
console.log(p3.classList.contains('text-red')); //true
console.log(p3.classList.contains('text-bold'));    //false

//classList toggle
setInterval(() => {     //hàm set tgian thêm xoá liên tục trong 1000ms
    p3.classList.toggle('text-red');
}, 1000);   //1000ms = 1s
