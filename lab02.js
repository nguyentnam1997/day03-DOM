//1. Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)
const p = document.querySelector('p');
let arrStr = p.innerText.split(' ');
let tempArray = [];
arrStr.forEach(str => {
    if (str.length >= 5) {
        tempArray.push(`<span>${str}</span>`);
    }
    else tempArray.push(str);
});
const newPara = tempArray.join(' ');
p.innerHTML = newPara

const sp = document.querySelectorAll('span');
sp.forEach(span => {
    span.style.backgroundColor = 'yellow';
});

//2. Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
p.insertAdjacentHTML('afterend', '<a href="https://www.facebook.com/">Facebook</a>');

//3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const countLength = arrStr.length;
const div = document.createElement('div');
const a = document.querySelector('a');
a.insertAdjacentHTML('afterend', `</br> ${countLength}`);
