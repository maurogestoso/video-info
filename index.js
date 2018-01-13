const electron = require("electron");

const { ipcRenderer } = electron;

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  const { path } = event.target.elements.fileInput.files[0];
  ipcRenderer.send("video:submit", path);
});

ipcRenderer.on("video:duration", (event, duration) => {
  document.querySelector("#result").innerHTML = `Video is ${duration} seconds`;
});
