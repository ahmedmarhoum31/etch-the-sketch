
const container = document.querySelector(".grid-container");
// gridSize will contain how many grid elements we want, so maximumGridSize calculate the size to give to each element
let gridSize = 16;
let maximumGridSize = String(64/16)+"vh";

//this for loop will create 16 div container, in which each container will have 16 divs inside of them
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

// this function will get the user input
function getUserInput()
{
    return Number(prompt("please enter the grid number you want! (between 1 and 100)"));
}


// this function will delete the old grid, and set new one based on the userInput (implementation of grid same logic as in the beginning of script)
function settingTheGrid(userInput)
{
    if(userInput>=100)
    {
        prompt("maximum greed number is 100!");

    }else
    {
        gridSizeText.textContent = "current grid size = " + userInput;
        //removing previous Grid
        let existingGridElements = document.querySelectorAll(".make-container-flex");
        existingGridElements.forEach(div=> div.remove());

        //calculating Grid size based on grid number
        let maximumGridSize = String(64.1/userInput)+"vh";

        for(let i = 0; i<userInput; i++)
        {
            let newDivContainer = document.createElement("div");
            newDivContainer.classList.add("make-container-flex");
            container.appendChild(newDivContainer);
            for(j = 0; j<userInput; j++)
            {
                let gridElement = document.createElement("div");
                gridElement.classList.add("grid-element");
                gridElement.style.height = maximumGridSize;
                gridElement.style.aspectRatio ="1/1";
                newDivContainer.appendChild(gridElement);
            }
        }
        const gridElements = document.querySelectorAll(".grid-element");

        gridElements.forEach(element => element.addEventListener("mouseenter",()=>
        {
            element.style.backgroundColor = "black";

        }))
        
    }
}

const changeSizeButton = document.querySelector(".select-grid-number");
const gridSizeText = document.querySelector(".grid-number");

changeSizeButton.addEventListener("click",()=>
{
    settingTheGrid(getUserInput());
})


