document.addEventListener("DOMContentLoaded", function () {
    var chakra = document.getElementById("chakra");

    
    for (var i = 0; i < 24; i++) {
        var line = document.createElement("div");
        line.className = "line";
        line.style.transform = "rotate(" + i * 15 + "deg)";
        chakra.appendChild(line);
    }
});