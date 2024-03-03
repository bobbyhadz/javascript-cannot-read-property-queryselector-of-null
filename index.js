// Cannot read properties of null (reading 'querySelector')

console.log('bobbyhadz.com');

const element = document.getElementById('container');
console.log(element); // 👉️ div#container

// ✅ Works
const box = element.querySelector('#box');
console.log(box); // 👉️ div#box
