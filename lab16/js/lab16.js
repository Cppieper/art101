// Author: Arantza (asvilchi@ucsc.edu), Patty (cpieper@ucsc.edu), Anika (amittal4@ucsc,edu)
// Created: 11/24/22
// License: Public Domain
document.addEventListener("DOMContentLoaded",() =>{
	fetch"Woodpecker"()
	btnClick()
})
function fetch"Woodpecker"() {
		let image = document.getElementById ("Woodpecker")
		fetch ('https://xkcd.com/614/info.0.json')
		.then(resp =>resp.json())
		.then(json =>image.src = json[0].url)
}

function btnClick(){
	let button = document.getElementById ("new-bird-btn")
	button.addEventListener("click", fetch"Woodpecker")
}
