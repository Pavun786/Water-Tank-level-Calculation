let button = document.getElementById("btn")


button.addEventListener("click", function() {
    waterLevelUpdate(); // Initial rendering with default values
});

function waterLevelUpdate() {
    const inputElement = document.getElementById("inputArray");
    const inputValues = inputElement.value.split(',').map(Number);

    // Here we check--> the given input is valid number or not
    if (!inputValues.every(Number.isInteger)) {
        alert("Please enter valid integer values separated by commas.");
        return;
    }

    const output = toCalculateWaterUnits(inputValues);

    displayWaterTank(inputValues);
    outPut(output);
}

function toCalculateWaterUnits(blocks) {
    let totalWaterUnits = 0;
    const n = blocks.length;

    for (let i = 1; i < n - 1; i++) {
        let leftMax = blocks[i];
        for (let j = 0; j < i; j++) {
            leftMax = Math.max(leftMax, blocks[j]);
        }

        let rightMax = blocks[i];
        for (let j = i + 1; j < n; j++) {
            rightMax = Math.max(rightMax, blocks[j]);
        }

        const currentWater = Math.min(leftMax, rightMax) - blocks[i];
        totalWaterUnits += Math.max(currentWater, 0);
    }

    return totalWaterUnits;
}

function displayWaterTank(blocks) {
    const waterTank = document.getElementById("water-tank");
    waterTank.innerHTML = ""; // Clear previous blocks

    blocks.forEach((blockHeight) => {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.height = `${blockHeight * 30}px`;
        waterTank.appendChild(block);
    });
}

function outPut(units) {
    const outputContainer = document.getElementById("output");
    outputContainer.textContent = `${units} Units of water stored in the tank`;
}





