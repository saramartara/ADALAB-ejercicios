'use strict';


// elemento de HTML
const paragraph = document.querySelector('.text');

function handlescroll (){
  console.log(window.scrollY);
  if(window.scrollY> 250) {
    paragraph.classList.add("containerB")
  }
  else{
    paragraph.classList.remove('containerB');
    paragraph.classList.add('text');
  }
}




window.addEventListener("scroll", handlescroll);

// paragraph.classList.add('.containerB');

// // handler
// function scrollColors1 (){
//   return bg.classList.toggle('.containerB');
// }
// function scrollColors2 (){
//     return bg.classList.toggle('.containerC');
//   }

// // listener sobre el elemento, con tipo de evento y handler

// bg.addEventListener('scroll', scrollColors1, scrollColors2);

