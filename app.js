// HTML Elemente bereitstellen
let displayNumber = document.querySelector("#number");
let body = document.querySelector("body");
let main = document.querySelector("main");
let resetBtn = document.querySelector("#btnReset");

let counter = 0;

 
// Eventlistener
body.addEventListener("click", count);
body.addEventListener("keyup", function(event) {
    if(event.code === 'Space' || event.code === "Enter") {
        count();
    }
});
resetBtn.addEventListener("click", reset)

function count () {
if(counter < 100) {
    counter++;
    displayCounter();
}else {
    reset();
}
        

}

function displayCounter() {
    displayNumber.innerText = counter; 
    main.style.width = (parseInt((main.style.width) || parseInt(window.getComputedStyle(main).width))) + 1 + "%";
}
       
function reset() {
    counter = 0; 
    displayNumber.innerHTML = 0; 
    main.style.width = 0 +"%";
}
