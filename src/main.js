importScripts('../inkapi.js')

const mammoth = require("mammoth");

INKAPI.ready(() => {
	const UI = INKAPI.ui;

	UI.menu.addMenuItem(importDocx, "File", "Import", "docx");

})

function importDocx() {
	INKAPI.io.openFile(openFileHandler, { ext: "docx", allowMultipleFiles: false });
}

async function openFileHandler(res) {
	mammoth.convertToHtml({ arrayBuffer: res[0]?.data })
		.then(result => {
			console.log(result);
		})
	// INKAPI.editor.loadHTML(html);
}
