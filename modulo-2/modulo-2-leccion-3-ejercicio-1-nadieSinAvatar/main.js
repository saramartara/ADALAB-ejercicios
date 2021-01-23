'use strict';


const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse

// let userAvatar = 'http://www.fillmurray.com/300/300';
let userAvatar = "";

const imgUserAvatar = document.querySelector(".user__avatar");
imgUserAvatar.src = userAvatar || DEFAULT_AVATAR;

// //operador ternario: (cond) ? valorTrue : valorFalse
// imageAvatar.src = (userAvatar === "") ? DEFAULT_AVATAR : userAvatar;