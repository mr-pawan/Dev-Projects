const leftCol = document.querySelector(".left-col");
const topRow = document.querySelector(".top-row");
const grid = document.querySelector(".grid");
const addressContainer = document.querySelector(".address-input");

const bold = document.querySelector(".bold");
const italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");

const rows = 100;
const cols = 26;

// first create top row alphabets
for(let i = 0; i < cols; i++){
    // create top row alphabets
    const cell = document.createElement("div");
    cell.innerText = String.fromCharCode(65+i);
    cell.setAttribute("class", "cell");
    cell.classList.add("color");
    topRow.appendChild(cell);
}


// create left col numbers along with make cells of that row
for(let i = 0; i < rows; i++){
    //create left col number
    const leftColNumber = document.createElement("div");
    leftColNumber.innerText = i+1;
    leftColNumber.setAttribute("class", "box");
    leftCol.appendChild(leftColNumber);
}

//make a 2d array for represent everyState of currentCell
let sheetDB = [];
for(let i = 0; i < rows; i++){
    let row = []
    for(let j = 0; j < cols; j++){
        row.push({
            fontSize: "12",
            fontFamily: "monospace",
            bold: "normal",
            italic: "normal",
            underline: "none",
            hAlign : "alignCenter",
            fontColor: "black",
            backgroundColor: "white"            
        });
    }
    sheetDB.push(row);
}


//make grid cells and add event listner to it 
for(let i = 0; i < rows; i++){
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for(let j = 0; j < cols; j++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        row.appendChild(cell);

        //set unique row id and column id
        cell.setAttribute('rid', i);
        cell.setAttribute('cid', j);

        // by default H1 is always clicked
        cell.addEventListener("click", cellClickHandler);
        if(i == 0 && j == 0){
            cell.click();
        }

    }
    grid.appendChild(row);
}



//give adddress to every clicked cell in addressContainer:
function cellClickHandler(e){
    
    const rid = Number(e.target.getAttribute("rid"));
    const cid = Number(e.target.getAttribute("cid"));

    const cellObject = sheetDB[rid][cid];
    //bold
    if(cellObject.bold == "bold"){
        bold.style.backgroundColor = "gray";
    }else{
        bold.style.backgroundColor = "white";
    }

    //italic
    if(cellObject.italic == "italic"){
        italic.style.backgroundColor = "gray";
    }else{
        italic.style.backgroundColor = "white";
    }

    //underline
    console.log("cellObject.underline", cellObject.underline);

    if(cellObject.underline == "underline"){
        underline.style.backgroundColor = "gray";
    }else{
        underline.style.backgroundColor = "white";
    }
    addressContainer.value = String.fromCharCode(65+cid) + (rid+1);

}

bold.addEventListener("click", (e) => {
    const currentCell = getUiCellElement();
    const {rid, cid} = getIndexesFromAddress(addressContainer.value);

    if(currentCell.style.fontWeight == "bold"){
        currentCell.style.fontWeight = "normal";
        bold.style.backgroundColor = "white";
        sheetDB[rid][cid].bold = "normal";
    }else{
        currentCell.style.fontWeight = "bold";
        bold.style.backgroundColor = "gray";
        sheetDB[rid][cid].bold = "bold";
    }

});

italic.addEventListener("click", (e) => {
    const currentCell = getUiCellElement();
    const {rid, cid} = getIndexesFromAddress(addressContainer.value);
    if(currentCell.style.fontStyle == "italic"){
        currentCell.style.fontStyle = "normal";
        italic.style.backgroundColor = "white";
        sheetDB[rid][cid].bold = "normal";
    }else{
        currentCell.style.fontStyle = "italic";
        italic.style.backgroundColor = "gray";
        sheetDB[rid][cid].italic = "italic";
    }
});

underline.addEventListener("click", (e) => {
    const currentCell = getUiCellElement();
    const {rid, cid} = getIndexesFromAddress(addressContainer.value);

    if(currentCell.style.textDecoration == "underline"){
        currentCell.style.textDecoration = "none";
        underline.style.backgroundColor = "white";
        sheetDB[rid][cid].underline = "none";
    }else{
        currentCell.style.textDecoration = "underline";
        underline.style.backgroundColor = "gray";
        sheetDB[rid][cid].underline = "underline";
    }
})



function getUiCellElement(){
    const {rid, cid}  = getIndexesFromAddress(addressContainer.value);
    const currentCell = document.querySelector(`.cell[rid='${rid}'][cid='${cid}']`);
    return currentCell;
}

function getIndexesFromAddress (address){
    const cid = Number(address.charCodeAt(0))-65;
    const rid = Number(address.slice(1))-1;
    
    return{rid, cid};

} 



