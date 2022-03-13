const plusBtn = document.querySelector(".fa-plus");
const sheetList = document.querySelector(".sheet-list");

//my first sheet is never attach a addEventListner of click
let firstSheet = document.querySelector(".sheet");
firstSheet.addEventListener("click", handleSheet);

plusBtn.addEventListener("click", (e) => {
    //1.first remove active class from all the availlable sheet
    //2. make new sheet as active sheet

    //1.first remove active class from all the availlable sheet
    const allSheets = document.querySelectorAll(".sheet");

    for(let i = 0; i < allSheets.length; i++){
        allSheets[i].classList.remove("active");
    }

    //2. make a new sheet
    const lastIdx = Number(allSheets.length-1);
    const newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");

    //now add active class to new sheet
    newSheet.classList.add("active");
    newSheet.setAttribute("idx", `${lastIdx+1}`);
    newSheet.innerText = `sheet ${lastIdx+2}`;

    //now append sheet to sheetList
    sheetList.appendChild(newSheet);

    //now whenever click to new sheet make them active
    newSheet.addEventListener("click", handleSheet);

   
});

function handleSheet(e){
    const sheet = e.currentTarget;

    const allSheets = document.querySelectorAll(".sheet");
    
    //remove active class to sheet
    for(let i = 0; i < allSheets.length; i++){
        allSheets[i].classList.remove("active");
    }
    sheet.classList.add("active");

}