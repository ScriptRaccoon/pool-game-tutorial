const dialogElement = document.getElementById("dialog");
const dialogContent = document.getElementById("dialogContent");
const closeBtn = document.getElementById("closeBtn");

export function openDialog(txt) {
    dialogContent.innerHTML = txt;
    dialogElement.open = true;
}

export function closeDialog() {
    dialogElement.open = false;
    dialogContent.innerHTML = "";
}

closeBtn.addEventListener("click", closeDialog);
