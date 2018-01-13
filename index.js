document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  const file = event.target.elements.fileInput.files[0];
  console.log(file);
});
