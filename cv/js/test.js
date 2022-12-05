
const container = document.querySelector('#container');
const pContent = document.createElement('p');
const h3Content = document.createElement('h3');
const divContent = document.createElement('div');
const h1Content = document.createElement('h1');

pContent.textContent = "Hey, I'm red!";
pContent.style.cssText = "color: red";
container.appendChild(pContent);

h3Content.textContent = "I'm a blue h3!";
h3Content.style.cssText = "color: blue";
container.appendChild(h3Content);

divContent.classList.add('childDiv');
divContent.style.cssText = "border-color: black";
divContent.style.cssText = "background-color: pink";
container.appendChild(divContent);

const childDiv = document.querySelector('.childDiv');

h1Content.textContent = "I'm in a div!";
childDiv.appendChild(h1Content);

pContent.textContent = "ME TOO!";
pContent.style.cssText = "color: black";
childDiv.appendChild(pContent);


