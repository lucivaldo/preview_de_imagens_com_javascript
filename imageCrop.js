const getReadedFile = function (reader, preview) {
	return function () {
		const img = document.createElement("img");
		img.src = reader.result;
		img.style = "width: 400px; height: auto";

		preview.appendChild(img);

		// Opcional
		preview.style.display = "block";
	}
}

const fileReader = function (event) {
	const files = event.target.files;
	const preview = document.querySelector("#image");

	const reader = new FileReader();
	reader.addEventListener("load", getReadedFile(reader, preview));
	reader.readAsDataURL(files[0]);
}

const init = function () {
	document.querySelector("#file").addEventListener("change", fileReader);
}

init();