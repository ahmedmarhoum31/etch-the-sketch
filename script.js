
const container = document.querySelector(".grid-container");
// gridSize will contain how many grid elements we want, so maximumGridSize calculate the size to give to each element
let gridSize = 16;
let maximumGridSize = String(60/16)+"vh";

for(let i=0;i<16;i++)
{
    let newDivContainer = document.createElement("div");
    newDivContainer.classList.add("make-container-flex");
    container.appendChild(newDivContainer);
    for(let j = 0; j<16; j++)
    {
       let gridElement = document.createElement("div");
       gridElement.classList.add("grid-element");
       gridElement.style.height = maximumGridSize;
       gridElement.style.aspectRatio ="1/1";
       newDivContainer.appendChild(gridElement);
    }
}