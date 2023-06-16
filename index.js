let mouseDown = false;

window.onload = () => {
    let rangeInput = document.getElementById("rangeInput");
    rangeInput.addEventListener("change", (event) => {
        createGrid(event.target.value);
        document.getElementById("rangeText").innerText = event.target.value + " x " + event.target.value;
    });

    document.body.addEventListener("mousedown", () => { mouseDown = true; });
    document.body.addEventListener("mouseup", () => { mouseDown = false; });
    
    createGrid(rangeInput.getAttribute("value"));
}

function createGrid(gridSize) {
    let container = document.getElementById("container");
    let pixelSize = container.offsetHeight / gridSize;

    container.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("container-row");
        for (let j = 0; j < gridSize; j++) {
            let pixel = document.createElement("div");
            pixel.style.height = pixelSize;
            pixel.style.width = pixelSize;

            pixel.addEventListener("mouseover", () => {
                if (mouseDown) {
                    if (!pixel.classList.contains("pixel")) {
                        pixel.classList.add("pixel");
                        pixel.style.opacity = "0.1";
                    } else {
                        let opacity = parseFloat(pixel.style.opacity);
                        if (opacity < 1) {
                            opacity += 0.1;
                            pixel.style.opacity = opacity;
                        }
                    }
                }
            });

            pixel.addEventListener("mousedown", () => {
                if (!pixel.classList.contains("pixel")) {
                    pixel.classList.add("pixel");
                    pixel.style.opacity = "0.1";
                } else {
                    let opacity = parseFloat(pixel.style.opacity);
                    if (opacity < 1) {
                        opacity += 0.1;
                        pixel.style.opacity = opacity;
                    }
                }
            });

            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}
