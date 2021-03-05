const elOnVcEsta = document.getElementById("elementoOndeVoceEsta");
const element = document.createElement("div");
const textContent = "whatever";

const element2 = document.createElement("div");
const textContent2 = "whateverChild";

element.innerText = textContent;
element2.innerText = textContent2;
console.log(element);

elOnVcEsta.insertAdjacentElement("afterend", element);
elOnVcEsta.appendChild(element2);

const element3 = document.createElement("div");
element3.setAttribute("id", "lChild");
element3.innerText = "hello child of child";

document.getElementById("primeiroFilhoDoFilho").appendChild(element3);

console.log(
  document.getElementById("lChild").parentElement.parentElement.nextElementSibling
    .nextElementSibling
);

