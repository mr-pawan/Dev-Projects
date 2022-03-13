const saveBtn = document.querySelector(".save");
const openBtn = document.querySelector(".open");

saveBtn.addEventListener("click", (e) => {
    const data = JSON.stringify(sheetDB);
    const blob = new Blob([data], { type: 'application/json' });

    // Create new URL
    const url = window.URL.createObjectURL(blob);

    // Create a link and trigger the download
    const link = document.createElement('a');
    link.download = 'sheetDB.json';
    link.href = url;

    // Append to the document
    document.body.appendChild(link);

    // Trigger the click event
    link.click();

    // Remove the element
    document.body.removeChild(link);

    // Free the URL created above
    window.URL.revokeObjectURL(url);    
});


openBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.addEventListener("change", openFileHandler);
    input.setAttribute("type", "file");
    // input.setAttribute("accept", `image/*, .pdf`);
    input.click();

});

function openFileHandler(e) {
    const input = e.currentTarget;
    
    const fileArray = input.files;
    let fileObj = fileArray[0];

    let fr = new FileReader(fileObj);
    fr.readAsText(fileObj);
    fr.onload = () => {
        console.log(fr.result);
    }
}