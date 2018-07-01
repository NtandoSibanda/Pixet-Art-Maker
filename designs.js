
	const table = document.getElementById('pixel_canvas');
	let gridHeight = document.getElementById('input_height');
	let gridWidth = document.getElementById('input_width');
	
	document.getElementById('input_submit').addEventListener("click", function(event) {
		event.preventDefault();
		makeGrid();
	});
	

	function makeGrid() {
		
	    table.innerHTML = '';
	    let heightValue = gridHeight.value;
	    let widthValue = gridWidth.value;
	    let color = document.getElementById('colorPicker');
	
	    for (let i = 0; i < heightValue; i++) {
	        let row = table.insertRow(i);
	        for (let j = 0; j < widthValue; j++) {
	            let cell = row.insertCell(j);

	            cell.addEventListener("click", function(event) {
	            	event.target.style.backgroundColor = color.value;
	
	            });
	            
	        }
	    }
	    
	}
