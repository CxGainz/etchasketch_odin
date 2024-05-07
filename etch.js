
let gridSide = 16;

const container = document.querySelector("#container");

// set container height equal to width so the etch box is a square not a rectangle.
container.style.height = getComputedStyle(container).width;

const btn = document.querySelector("button");

//intial 16x16 grid
createGrid(gridSide);

// this 'click' event listener function takes user input number and calls createGrid() to make new grid
btn.addEventListener("click", () => {
    let res = prompt("How many squares per side up to 100?");
    if (res > 100 || res < 1 || isNaN(res)){
        alert("Please input an number between 1 and 100");
    }else{
        gridSide = res;
        container.innerHTML="";
        createGrid(gridSide);
    }
  });

function createGrid(gridSide){
    // this line of code makes sure each div is the respective percentage of width/height of container
    // have to zero out margins and borders of certain elements (like body and div) to make sure the correct number of divs fit per side.
    let divsPerSide = (100/gridSide).toString() + "%";

    // create divs for grid 
    for (let i = 0; i < Math.pow(gridSide,2); i++){
        const div = document.createElement("div");
        div.style.width = divsPerSide;
        div.style.height = divsPerSide;
        container.appendChild(div);
        let opacity = 0;
    
        div.addEventListener("mouseover", function (e) {
            // this event listener code is to randomize rgb values and increase opacity of color per mouseover event on a div element
            if (opacity < 1) opacity = opacity + 0.1;
            var colors = ['rgba(255,0,0,'+opacity+')','rgba(0,255,0,'+opacity+')','rgba(0,0,255,'+opacity+')'];
            var random_color = colors[Math.floor(Math.random() * colors.length)];
            e.target.style.background = random_color;
          });
    }
}


