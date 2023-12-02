burger = document.querySelector('.burger')
header = document.querySelector('.header')
headlist = document.querySelector('.head-list')


burger.addEventListener('click',()=>{
    headlist.classList.toggle('v-class');
    header.classList.toggle('h-nav');


})