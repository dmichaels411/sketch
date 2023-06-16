
window.onload = () => {
    let gridSize = 16;
    let container = document.getElementById("container");
    
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("container-row");
        for (let j = 0; j < gridSize; j++) {
            let pixel = document.createElement("div");
            pixel.addEventListener("mouseover", (event) => { console.log("test") });
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}
