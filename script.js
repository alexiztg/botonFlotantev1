var botonFlotante = document.getElementById("botonFlotante");
var offsetX, offsetY;
var isDragging = false;

botonFlotante.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - botonFlotante.getBoundingClientRect().left;
    offsetY = e.clientY - botonFlotante.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;

    var newX = e.clientX - offsetX;
    var newY = e.clientY - offsetY;

    botonFlotante.style.left = newX + "px";
    botonFlotante.style.top = newY + "px";
});

document.addEventListener("mouseup", function () {
    isDragging = false;
});
