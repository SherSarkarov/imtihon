let btn = document.querySelector(".login__strelka2")
let img = document.querySelector('.login__ava')
let txt = document.querySelector('.login__left-bottom-txt2')
let nick = document.querySelector('.login__ava-txt2')
btn.addEventListener('click', ()=>{
  img.setAttribute("src", "./imges/Image.png")
  txt.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quam suscipit laboriosam tenetur, dolore est ipsam quos veniam explicabo, nisi assumenda aliquid sit voluptatum sunt et. Sapiente.'
  nick.textContent = 'Nick J'
})
let elbtn = document.querySelector(".login__strelka1")
elbtn.addEventListener('click', ()=>{
  img.setAttribute("src", "./imges/girlava.svg");
  txt.textContent ='The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!'
  nick.textContent = 'Sarah L'
})

let list = document.querySelector('.header__list')
let headerbtn = document.querySelector('.header__btn')
headerbtn.addEventListener('click', ()=>{
  list.style = ('display:block;')
})