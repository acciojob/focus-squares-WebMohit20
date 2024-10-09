//your JS code here. If required.
const square = document.querySelectorAll(".square");
console.log(square)
square.forEach(sq=>{
	sq.addEventListener("mouseover",()=>{
		for(let i =0;i<square.length;i++){
			if(sq.id == `square${i+1}`)
				continue
		square[i].style.backgroundColor = "#6F4E37";
		}
	})
	sq.addEventListener("mouseout",()=>{
		for(let i =0;i<square.length;i++){
			if(sq.id == `square${i+1}`)
				continue
		square[i].style.backgroundColor = "#E6E6FA";
		}
	})
})







