document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("gridContainer");

    const rows = Math.floor(window.innerHeight / 10);
    const columns = Math.floor(window.innerWidth / 10);

    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 10px)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 10px)`;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);
        }
    }

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        const randomColor = Math.random() <= 0.8 ? "white" : getRandomColor();
        item.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
