const setRootProperties = (key, value) => {
  let root = document.documentElement;

  root.style.setProperty(key, value);
};

const main = () => {
  const characters = document.querySelector('h1').innerText.length;

  setRootProperties('--typewriterCharacters', characters);
};

main();
