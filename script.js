
const container = document.querySelector(".grid-container");
const changeSizeButton = document.querySelector(".select-grid-number");
const gridSizeText = document.querySelector(".grid-number");
settingTheGrid(16);
changeSizeButton.addEventListener("click",()=>
{
    settingTheGrid(getUserInput());
})

// this function will get the user input
function getUserInput()
{
    return Number(prompt("please enter the grid number you want! (between 1 and 100)"));
}

function randomizeColor()
{
    let red = Math.random()*256;
    let green = Math.random()*256;
    let blue = Math.random()*256;
    return `rgb(${red},${green},${blue})`;
}

function changeGridCell(cellElement)
{
    if(!cellElement.matches(".grid-element")) return;
    if(!cellElement.style.backgroundColor)
    {
        cellElement.style.backgroundColor = randomizeColor();
        cellElement.style.backgroundColor = "0.1";
    }
    if(cellElement.style.opacity !== "1")
    {
        cellElement.style.opacity = String(Number(cellElement.style.opacity)+0.1);
    }
}

// this function will delete the old grid, and set new one based on the userInput (implementation of grid same logic as in the beginning of script)
function settingTheGrid(userInput)
{
    if(userInput>=100)
    {
        return prompt("maximum greed number is 100!");

    }
    gridSizeText.textContent = "current grid size = " + userInput;
    //removing previous Grid
    let existingGridElements = document.querySelectorAll(".make-container-flex");
    existingGridElements.forEach(div=> div.remove());

    //calculating Grid size based on grid number
   
    let maximumGridSize;
    if(window.innerWidth <=720)
    {
         maximumGridSize = String(100/userInput)+"vw";
    }else
    {
        maximumGridSize = String(60.1/userInput)+"vh";
    }

    for(let i = 0; i<userInput; i++)
    {
        let newDivContainer = document.createElement("div");
        newDivContainer.classList.add("make-container-flex");
        container.appendChild(newDivContainer);
        for(j = 0; j<userInput; j++)
        {
            let gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            if(window.innerWidth <=720)
            {
                gridElement.style.width = maximumGridSize;
            }else
            {
                gridElement.style.height = maximumGridSize;
            }
            
            gridElement.style.aspectRatio ="1/1";
            newDivContainer.appendChild(gridElement);
        }
    }
    const gridElements = document.querySelectorAll(".grid-element");
        
    container.addEventListener("mousemove",(event)=>
    {
        changeGridCell(event.target);
    })

    container.addEventListener("touchmove",(event)=>
        {
            event.preventDefault();
            
            const touchLocation = event.changedTouches[0];
            const currentTarget = document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
            changeGridCell(currentTarget);
            
            
        }, {passive: false});
    

       
    
    
        
    
}




