var wallDimensions = {x: 0, y: 0};

function buildWall(x, y) {
	wallDimensions.x = x;
	wallDimensions.y = y;
	
	var wall = document.querySelector("#wall");
	wall.setAttribute("style", "width:" + (x * 89) + "px;height:" + (y * 95) + "px;");
	
	var html = "";
	for (var i=0; i<x*y; i++) {
		html += '<div class="block-overlay"></div>';
	}
	
	var overlayContainer = wall.querySelector("#overlays");
	
	overlayContainer.innerHTML = html;
	
}

// Set the color of the block at coordinates x,y
function setColor(x, y, color) {
	
	if (x < 0 || y < 0) {
		return;
	}
	
	// calculate which child of the container the block is
	var childNum = x + (wallDimensions.y - y) * wallDimensions.x;
	
	// fetch the block
	var block = document.querySelector("#wall .block-overlay:nth-child(" + childNum + ")");
	
	// set the background-color propery using inline styles
	if (block) {
		block.setAttribute("style", "background-color:" + color);
	}
	
}

// Reset all blocks to be clear/transparent, or a given color
function clear(color) {
	
	// default to transparent
	color = color || "";
	
	// loop across a row
	for (var i = 0; i < wallDimensions.y; i++) {
		
		// loop across a column
		for (var j = 0; j < wallDimensions.x; j++) {
			setColor(j + 1, i + 1, color);
		}	
	}
}