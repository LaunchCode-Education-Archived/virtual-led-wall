var wallDimensions = {x: 4, y: 4};

// Set the color of the block at coordinates x,y
function setColor(x, y, color) {
	
	if (x < 0 || y < 0) {
		return;
	}
	
	// calculate which child of the container the block is
	var childNum = x + (4 - y) * 4;
	
	// fetch the block
	var block = document.querySelector("#overlays .block-overlay:nth-child(" + childNum + ")");
	
	// set the background-color propery using inline styles
	if (block) {
		block.setAttribute("style", "background-color:" + color);
	}
	
}

// Reset all blocks to be clear/transparent
function clear() {
	
	// loop across a row
	for (var i = 0; i < wallDimensions.y; i++) {
		
		// loop across a column
		for (var j = 0; j < wallDimensions.x; j++) {
			setColor(x + 1, y + 1, "");
		}	
	}
}