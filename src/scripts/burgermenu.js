export default (function burgermenu() {
	const button = document.querySelector(".menuButton")
	const menu = document.querySelector(".primaryMenu")

	button.addEventListener("click", clickHandler)

	function clickHandler() {
		menu.style.right = menu.style.right == "-19em" ? "0" : "-19em"
	}
})()