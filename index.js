const characters = document.querySelector('h1').innerText.length;

let root = document.documentElement;

root.style.setProperty('--typewriterCharacters', characters);
